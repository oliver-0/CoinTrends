let COINCAP_API_URI = "https://coincap.io";
let CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com/data";
let CRYPTOCOMPARE_IMG_URI = "https://www.cryptocompare.com";

let app = new Vue({ /*global Vue*/ //from vue.js
  el: "#app",
  data: {
    coins: [],
    coinData: {},
    currentSort:'index',
    currentSortDir:'desc'
  },
  methods: {
    
    getCoinData: function() {
      let self = this;
      axios.get(CRYPTOCOMPARE_API_URI + "/all/coinlist") /*global axios*/ //from axios.min.js
        .then((resp) => {
          this.coinData = resp.data.Data;
          //from CryptoCompare API, app._data.coinData is populated with a list of almost all popular cryptocurrencies, and some information about them
          // I use this for their logo image links, now stored at app._data.coinData[index].ImageUrl
          this.getCoins();
           //calling this.getCoins to generate the top 20 list of cryptocurrencies and parse their price history
        })
        .catch((err) => {
          this.getCoins();
          console.error(err);
        });
    },
    
    getCoins: function(){
      let self = this;
      axios.get(COINCAP_API_URI + "/front")
        .then((resp) => {
          resp.data.length = 20; //can change this to generate more or less cryptocurrencies, and whole app will accommodate it
          this.coins = resp.data;
            //at this point app._data.coins is populated with the top 20 coins by market cap
          var coinShorts = [];
          for(var i in resp.data) {
            coinShorts.push(resp.data[i].short);
            this.coins[i].index = 1+ parseInt(i, 10); //adding index variable to app._data.coins[i].index
              //an array is generated to list the top 20 coins' short names in market cap order.
              //e.g. coinShorts: ["BTC","ETH","XRP",...]
          }
          const getCoinHist = (short) => { //calls coincap API to generate a 7-day price history for a coin. Takes short name e.g. "BTC" as param.
            return new Promise((resolve, reject) => {
              axios.get(COINCAP_API_URI + `/history/7day/${short}`)
              .then(response => {
                return resolve(response.data.price);
                  //getCoinHist returns a 2-d array of Unix timestamps (in ms) and prices (in USD)
                  // e.g. price: [[1536405714000,7568.12],[1536406714000,7700.54],...]
              })
              .catch(error => {
                return reject(error.message);
              });
            });
          };
          //an async version of forEach function for iterating axios.get
          async function asyncForEach(array, callback) {
            for (let index = 0; index < array.length; index++) {
              await callback(array[index], index, array);
            }
          }
          //function to run the iterated axios.get - used to call coincap API to generate 20 cryptocurrencies' 7-day price histories
          const start = async() => {
            //console.log(this.coins);
            await asyncForEach(this.coins, async (coin) => {
              await getCoinHist(coin.short).then((price) => {
                var ind = ""; //variable for position of current coin in the top 20 list
                ind = coinShorts.indexOf(coin.short);
                var len = price.length; //number of coins
                var priceChange = (price[len-1][1] / price[0][1]) - 1;
                  //priceChange is a percentage price change across the last 7 days
                this.coins[ind].coinHist = priceChange * 100;
                this.coins[ind].fullPriceHist = price;
                  //stores the percentage price change in app._data.coins[index].coinHist
                if (priceChange < 0) { //changes color of price history output on the page, green for price increase, red for price drop
                  this.coins[ind].color = 'red';
                } else {
                  this.coins[ind].color = 'green';
                }
                makeChart(price, ind); /*global makeChart*/ //from chart.js
                this.coins[0].shapeshift = ind;
                  //Vue will not update when new properties are added to the _data object, so this line is a hacky way to force a page content update
                  // by changing the value of an unused property to a hidden page element, it tells vue to refresh the full page content
              });
            });
            this.coins[0].shapeshift = "done";
              //can decide to only refresh page content here instead of within the start() function
              // this will cause vue to display all new page content at once, instead of one at a time.
            var loaders = document.getElementsByClassName("loader");
            for (var j = 0; j < loaders.length; j++) {
              loaders[j].style.display = "none";
            }
            var carets = document.getElementsByClassName("caret");
            for (var j = 0; j < carets.length; j++) {
              carets[j].style.display = "inline-block";
            }
            document.getElementById("caret-fill-0").style.display = "inline-block";
            var headers = document.getElementsByClassName("thead");
            for (var j = 0; j < headers.length; j++) {
              headers[j].style.pointerEvents = "auto";
              headers[j].style.cursor = "pointer";
            }
          };
          start(); //comment out this line to stop the 20+ api calls to coincap for offline work
        })
        .catch((err) => {
          console.error(err);
        });
    },
    
    getCoinImage: function(short) {
      short = (short === "VEN" ? "VET" : short); //VeChain logo workaround while there's confusion about how to handle the new VeChain fork
      try {
        return CRYPTOCOMPARE_IMG_URI + this.coinData[short].ImageUrl;
          //call this to return cryptocurrency logos, from CryptoCompare API data stored in app._data.coinData
      } catch(err) {
        console.log(err);
      }
    },
    sort: function(s) {
      let self = this;
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
        
          var carets = document.querySelectorAll(".caret, .caret-fill");
          for (var k = 0; k < carets.length; k++) {
            carets[k].classList.toggle("rotated");
          }
      } else {
        var sorts = ["index","mktcap","price","coinHist"]; //array of possible sorts
        var sortIndex = sorts.indexOf(s);
        var sortsOthers = sorts.slice();
        sortsOthers.splice(sortIndex, 1);
        document.getElementById("caret-fill-"+sortIndex).style.display = "inline-block";
        ////document.getElementById("caret-"+sortIndex).style.display = "none";
        for (var j = 0; j < sortsOthers.length; j++) {
          var ref = sortsOthers[j];
          var refIndex = sorts.indexOf(ref);
          ////document.getElementById("caret-"+refIndex).style.display = "inline-block";
          document.getElementById("caret-fill-"+refIndex).style.display = "none";
        }
      }
      this.currentSort = s;
      for(var i = 0; i < this.coins.length; i++) {
          var sortedCoinPrice = this.sortedCoins[i].fullPriceHist;
          //console.log("sortedCoinPrice: "+sortedCoinPrice);
          makeChart(sortedCoinPrice,i);
          //var testCoin = this.sortedCoins[i].index;
          //console.log(testCoin);
      //also add flipping for carets based on sort dir, and changing non-sorted columns back to non-filled
      }
      //could add styling to thead elements here that adds sort indicators
    }
  },
  created: function() {
    //on pageload, begin with an initial run of getCoinData, which will also run getCoins method and getCoinHist function
    this.getCoinData();
  },
  computed: {
    sortedCoins: function() {
      return this.coins.sort((a,b) => {
        let direction = 1;
        if (this.currentSortDir === 'desc') direction = -1;
        if (this.currentSort === 'index' ) direction = -1 * direction;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * direction;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * direction;
        return 0;
      });
      
    }
  }
});