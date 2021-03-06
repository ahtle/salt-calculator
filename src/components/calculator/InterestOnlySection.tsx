import { useState, useEffect } from "react";
import { currencyFormat } from "../../utility/formatter";
import {
    collateralNeeded,
    calculateAPR,
    interestOnlyTotalInterest,
    interestOnlyMonthlyPayment,
} from "../../utility/calculations";
import CollateralSection from "./CollateralSection";

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

    useEffect(() => {
        // APR
        const newAPR = calculateAPR(props.ltv);
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

            <CollateralSection collateral={collateral} />
        </div>
    );
};

export default InterestOnlySection;
