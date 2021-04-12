import { useState, useEffect, useContext } from "react";
import { currencyFormat } from "../../utility/formatter";
import {
    collateralNeeded,
    interestOnlyAPR,
    interestOnlyTotalInterest,
    interestOnlyMonthlyPayment,
    usdToCrypto,
} from "../../utility/calculations";
import { CryptoContext } from "../../contexts/cryptoContext";

// images
import btc from "../../images/btc.png";
import ltc from "../../images/ltc.png";
import dash from "../../images/dash.png";
import doge from "../../images/doge.png";
import eth from "../../images/eth.png";
import salt from "../../images/salt.png";

type Props = {
    loan: number;
    months: number;
    ltv: number;
};

const InterestOnlySection = (props: Props) => {
    const [apr, setApr] = useState<number>(0);
    const [interest, setInterest] = useState<number>(0);
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
    const [collateral, setCollateral] = useState<number>(0);
    const crypto = useContext(CryptoContext);

    useEffect(() => {
        console.log(crypto);
    }, [crypto]);

    useEffect(() => {
        // APR
        const newAPR = interestOnlyAPR(props.ltv);
        setApr(newAPR);

        // interest
        const newInterest = interestOnlyTotalInterest(
            props.loan,
            newAPR,
            props.months
        );
        setInterest(newInterest);

        // monthly payment
        const newMonthlyPayment = interestOnlyMonthlyPayment(
            newInterest,
            props.months
        );
        setMonthlyPayment(newMonthlyPayment);

        // colateral needed
        const newCollateral = collateralNeeded(props.loan, props.ltv);
        setCollateral(newCollateral);
    }, [props.ltv, props.loan, props.months]);

    return (
        <div className="flex-1 py-3 pl-6 pr-4 bg-green-salt text-navy-salt md:pl-10 md:py-5 xl:pl-14 xl:py-7">
            <p className="mb-2">Monthly Payment ({props.months - 1} months)</p>
            <p className="mb-2 text-4xl font-bold">
                ${currencyFormat(monthlyPayment)}
            </p>
            <p className="mb-4 text-xl font-bold">
                Last Payment: ${currencyFormat(props.loan + monthlyPayment)}
            </p>
            <div className="grid grid-cols-2 mb-2">
                <div className="mb-6">
                    <p className="text-sm">Loan Amount</p>
                    <p className="text-lg font-bold">
                        ${currencyFormat(props.loan)}
                    </p>
                </div>
                <div className="mb-6">
                    <p className="text-sm">Interest Rate (APR)</p>
                    <p className="text-lg font-bold">{apr}.00%</p>
                </div>
                <div className="mb-6">
                    <p className="text-sm">Total Loan Cost</p>
                    <p className="text-lg font-bold">
                        ${currencyFormat(props.loan + interest)}
                    </p>
                </div>
                <div className="mb-6">
                    <p className="text-sm">Interest</p>
                    <p className="text-lg font-bold">
                        ${currencyFormat(interest)}
                    </p>
                </div>
            </div>
            <div>
                <p className="mb-2 text-sm">Collateral Needed</p>
                <p className="mb-4 text-xl font-bold">
                    ${currencyFormat(collateral)} USD worth of:
                </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center mb-3">
                    <img
                        src={btc}
                        alt="Bitcoin icon"
                        className="mr-2"
                        style={{ width: 15 }}
                    />
                    <p className="text-xs">
                        {usdToCrypto(collateral, 12.1)} BTC
                    </p>
                </div>
                <div className="flex items-center mb-3">
                    <img
                        src={ltc}
                        alt="Litecoin icon"
                        className="mr-2"
                        style={{ width: 15 }}
                    />
                    <p className="text-xs">
                        {usdToCrypto(collateral, 12.1)} LTC
                    </p>
                </div>
                <div className="flex items-center mb-3">
                    <img
                        src={dash}
                        alt="Dashcoin icon"
                        className="mr-2"
                        style={{ width: 15 }}
                    />
                    <p className="text-xs">
                        {usdToCrypto(collateral, 12.1)} DASH
                    </p>
                </div>
                <div className="flex items-center mb-3">
                    <img
                        src={doge}
                        alt="Dogecoin icon"
                        className="mr-2"
                        style={{ width: 15 }}
                    />
                    <p className="text-xs">
                        {usdToCrypto(collateral, 12.1)} DOGE
                    </p>
                </div>
                <div className="flex items-center mb-3">
                    <img
                        src={eth}
                        alt="ETH icon"
                        className="mr-2"
                        style={{ width: 15 }}
                    />
                    <p className="text-xs">
                        {usdToCrypto(collateral, 12.1)} ETH
                    </p>
                </div>
            </div>
            <div>
                <p className="mb-2 text-sm">Stake SALT</p>
                <div className="flex items-center">
                    <p className="text-xl font-bold">
                        ${currencyFormat(collateral)}
                    </p>
                    <img src={salt} alt="SALT icon" className="h-6 mb-1 ml-2" />
                </div>
            </div>
        </div>
    );
};

export default InterestOnlySection;
