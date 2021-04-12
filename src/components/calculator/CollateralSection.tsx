import React, { useContext } from "react";
import { usdToCrypto, usdToSalt } from "../../utility/calculations";
import { currencyFormat } from "../../utility/formatter";
import { CryptoContext } from "../../contexts/cryptoContext";

// images
import btc from "../../images/btc.png";
import ltc from "../../images/ltc.png";
import dash from "../../images/dash.png";
import doge from "../../images/doge.png";
import eth from "../../images/eth.png";
import salt from "../../images/salt.png";

type Props = {
    collateral: number;
};

const CollateralSection = (props: Props) => {
    const crypto = useContext(CryptoContext);

    return (
        <React.Fragment>
            <div>
                <p className="mb-2 text-sm">Collateral Needed</p>
                <p className="mb-4 text-xl font-bold">
                    ${currencyFormat(props.collateral)} USD worth of:
                </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
                {crypto.data.BTC && (
                    <div className="flex items-center mb-3">
                        <img
                            src={btc}
                            alt="Bitcoin icon"
                            className="mr-2"
                            style={{ width: 15 }}
                        />
                        <p className="text-xs">
                            {usdToCrypto(props.collateral, crypto.data.BTC.USD)}{" "}
                            BTC
                        </p>
                    </div>
                )}
                {crypto.data.LTC && (
                    <div className="flex items-center mb-3">
                        <img
                            src={ltc}
                            alt="Litecoin icon"
                            className="mr-2"
                            style={{ width: 15 }}
                        />
                        <p className="text-xs">
                            {usdToCrypto(props.collateral, crypto.data.LTC.USD)}{" "}
                            LTC
                        </p>
                    </div>
                )}
                {crypto.data.DASH && (
                    <div className="flex items-center mb-3">
                        <img
                            src={dash}
                            alt="Dashcoin icon"
                            className="mr-2"
                            style={{ width: 15 }}
                        />
                        <p className="text-xs">
                            {usdToCrypto(
                                props.collateral,
                                crypto.data.DASH.USD
                            )}{" "}
                            DASH
                        </p>
                    </div>
                )}
                {crypto.data.DOGE && (
                    <div className="flex items-center mb-3">
                        <img
                            src={doge}
                            alt="Dogecoin icon"
                            className="mr-2"
                            style={{ width: 15 }}
                        />
                        <p className="text-xs">
                            {usdToCrypto(
                                props.collateral,
                                crypto.data.DOGE.USD
                            )}{" "}
                            DOGE
                        </p>
                    </div>
                )}
                {crypto.data.ETH && (
                    <div className="flex items-center mb-3">
                        <img
                            src={eth}
                            alt="ETH icon"
                            className="mr-2"
                            style={{ width: 15 }}
                        />
                        <p className="text-xs">
                            {usdToCrypto(props.collateral, crypto.data.ETH.USD)}{" "}
                            ETH
                        </p>
                    </div>
                )}
            </div>
            <div>
                <p className="mb-2 text-sm">Stake SALT</p>
                <div className="flex items-center">
                    <p className="text-xl font-bold">
                        {usdToSalt(props.collateral, crypto.data.SALT.USD)}
                    </p>
                    <img src={salt} alt="SALT icon" className="h-6 mb-1 ml-2" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default CollateralSection;
