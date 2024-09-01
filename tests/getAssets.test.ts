import {exchange} from "./setup.ts";
import {describe, expect, test} from '@jest/globals';


test('get assets', async () => {
    const assets: string[] = await exchange.getAssets();

    expect(assets).toEqual(expect.arrayContaining(["BTC", "ETH", "XRP"]));

    expect(assets).not.toEqual(expect.arrayContaining(["ALBERTO"]));
});