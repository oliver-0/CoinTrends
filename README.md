# [CoinTrends](https://cointrends.site "cointrends.site")
> A Cryptocurrency ranking website with 7-day price histories

Once my first Vue.js project back in 2018, now re-written in 2020 after a lot of lessons learned!  
Now uses the [Vue CLI](https://cli.vuejs.org/ "Vue CLI") w/ webpack in place of homemade gulp dev/build processes, and updated to [CoinCap API 2.0](https://docs.coincap.io/ "CoinCap API 2.0"). Still using the [CanvasJS](https://canvasjs.com/, "Beautiful HTML5 Charts & Graphs | CanvasJS") charting API and the [CryptoCompare API](https://min-api.cryptocompare.com/ "The Best Free CryptoCurrency Price and Historical Data API for over 90 exchanges and 1800 coins")'s cryptocurrency infobase.  

## Getting started

Clone the project from github and with your chosen package manager, install the project's dependencies:

```shell
git clone https://github.com/oliver-0/CoinTrends.git
cd CoinTrends/
npm install
``` 

## Developing & Building

To run a local copy of the site in development mode using the Vue CLI tools, run the `serve` and `build` commands.

```shell
npm run serve
```
and
```shell
npm run build
```

The Vue CLI now handles all of the live-reloading, css/js minimisation and .scss compiling that was laid out in the old [`.gulpfile`](https://github.com/oliver-0/CoinTrends/blob/900b9443ca94f0d5ee118bdda8290e774fd25d41/gulpfile.js "CoinTrends v1 .gulpfile").

### Deploying

The site is hosted on Firebase.
Use the [Firebase CLI](https://firebase.google.com/docs/cli/ "Firebase CLI Reference") to update the site.  
If logged in with the correct credentials, you can use the following to deploy your changes:

```shell
firebase deploy
```

## Features

The website is a table of the top 20 Cryptocurrencies listed by Market Cap (total $ amount in circulation), 
generated by the [CoinCap API 2.0](https://docs.coincap.io/ "CoinCap API 2.0"). 

### How it works
1. The [CryptoCompare API](https://min-api.cryptocompare.com/ "CryptoCompare API docs") is used to retrieve information on many top cryptocurrencies, such as names/icons/etc.
2. The [CoinCap API 2.0](https://docs.coincap.io/ "CoinCap API 2.0") is used to generate a list of the top 20 cryptocurrencies by Market Cap.
3. The site asynchronously calls the CoinCap API one more time per cryptocurrency, to generate a 7-day Price History for each coin.
4. The price histories are processed into charts using [CanvasJS](https://canvasjs.com/ "Beautiful HTML5 JavaScript Charts | CanvasJS.com").
5. All of the data is fed into the page as a Vue computed property, so that the table can be easily sorted on the fly.

## Links

- The project's live site: https://cointrends.site/
- Project Repository: https://github.com/oliver-0/CoinTrends/
- My Portfolio: [oliverdavies.me](https://oliverdavies.me)
- Resources: 
  - CanvasJS: https://canvasjs.com
  - CoinCap API 2.0: https://docs.coincap.io/
  - CryptoCompare API: https://min-api.cryptocompare.com/


## Licensing

The code in this project is licensed under the terms of the [MIT license](https://github.com/oliver-0/CoinTrends/blob/master/LICENSE).
