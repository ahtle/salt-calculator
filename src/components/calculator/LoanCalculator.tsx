import { useState } from "react";
import UserInputSection from "./UserInputSection";
import InterestOnlySection from "./InterestOnlySection";
import "./calculator.css";

const LoanCalculator = () => {
    const [loan, setLoan] = useState<number>(10000000);
    const [months, setMonths] = useState<number>(12);
    const [ltv, setLtv] = useState<number>(60);
    const [ltvOptions] = useState<Array<number>>([30, 40, 50, 60, 70]);
    const [repaymentType, setRepaymentType] = useState<string>("Interest Only");

    return (
        <div
            id="LoanCalculator"
            className="grid border border-white rounded md:grid-cols-2"
        >
            <UserInputSection
                loan={loan}
                months={months}
                ltv={ltv}
                repaymentType={repaymentType}
                ltvOptions={ltvOptions}
                setLoan={(num) => setLoan(num ? num : 0)}
                setMonths={(num) => setMonths(num)}
                setLtv={(num) => setLtv(num)}
                setRepaymentType={(str) => setRepaymentType(str)}
            />
            <InterestOnlySection loan={loan} months={months} ltv={ltv} />
        </div>
    );
};

export default LoanCalculator;
