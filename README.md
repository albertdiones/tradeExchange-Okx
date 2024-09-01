Trade Exchange: Okx

Candle Fetcher for Okx exchange (crypto)


```
// e.g. ['BTC','XRP','SOL']
const assets: string[] = await exchange.getAssets();
```


```

// [[open: 1, low: 0.9, high: 1.1, close: 1.05, ...]]
exchange.fetchCandlesFromExchange(symbol, 1, limit);
```


```
// {open: 1, high:2, low:0.5 current: 1.5, base_volume, quote_volume,...}
exchange.getTickerData(symbol as string)
```