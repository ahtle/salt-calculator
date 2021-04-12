import { useState, useEffect } from "react";
import CollateralSection from "./CollateralSection";
import { currencyFormat } from "../../utility/formatter";
import {
    collateralNeeded,
    calculateAPR,
    principalMonthlyPayment,
} from "../../utility/calculations";

type Props = {
    loan: number;
    months: number;
    ltv: number;
};

const PnISection = (props: Props) => {
    const [apr, setApr] = useState<number>(0);
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
    const [totalLoanCost, setTotalLoanCost] = useState<number>(0);
    const [collateral, setCollateral] = useState<number>(0);

    useEffect(() => {
        // APR
        const newAPR = calculateAPR(props.ltv);
        setApr(newAPR);

        // monthly payment
        const newMonthlyPayment = principalMonthlyPayment(
            props.loan,
            props.months,
            newAPR
        );
        setMonthlyPayment(newMonthlyPayment);

        // total loan cost
        setTotalLoanCost(newMonthlyPayment * props.months);

        // colateral needed
        const newCollateral = collateralNeeded(props.loan, props.ltv);
        setCollateral(newCollateral);
    }, [props.ltv, props.loan, props.months]);

    return (
        <div className="flex-1 py-3 pl-6 pr-4 bg-green-salt text-navy-salt md:pl-10 md:py-5 xl:pl-14 xl:py-7">
            <p className="mb-2">Monthly Payment ({props.months} months)</p>
            <p className="mb-2 text-4xl font-bold">
                ${currencyFormat(monthlyPayment)}
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
                        ${currencyFormat(totalLoanCost)}
                    </p>
                </div>
                <div className="mb-6">
                    <p className="text-sm">Interest</p>
                    <p className="text-lg font-bold">
                        ${currencyFormat(totalLoanCost - props.loan)}
                    </p>
                </div>
            </div>

            <CollateralSection collateral={collateral} />
        </div>
    );
};

export default PnISection;
