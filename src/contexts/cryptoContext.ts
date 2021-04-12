import { createContext } from "react";

type Coin = {
    USD: number  
}

export type CryptoProps = {
    data: {
        BTC: Coin,
        DASH: Coin,
        DOGE: Coin,
        ETH: Coin,
        LTC: Coin,
        SALT: Coin,
    };
    loaded: boolean;
}

export const cryptoInitialState = {
    data: {
        BTC: {USD: 59733.06},
        DASH: {USD: 293.39},
        DOGE: {USD: 0.07305},
        ETH: {USD: 2136.42},
        LTC: {USD: 250.28},
        SALT: {USD: 0.4128},
    },
    loaded: false
}

export const CryptoContext = createContext<CryptoProps>(cryptoInitialState);
