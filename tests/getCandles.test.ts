import {exchange} from "./setup.ts";
import {describe, expect, test} from '@jest/globals';


test('get BTC ticker data', async () => {
    const symbol = exchange.getUsdtSymbol('BTC');

    const limit = 150;

    const candles = await exchange.fetchCandlesFromExchange(symbol, 1, limit);

    expect(candles).toHaveLength(limit);
});

