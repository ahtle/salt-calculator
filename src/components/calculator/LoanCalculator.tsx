import { useState } from "react";
import UserInputSection from "./UserInputSection";
import "./calculator.css";

const LoanCalculator: React.FC = () => {
    const [loan, setLoan] = useState(1000);
    const [months, setMonths] = useState(3);

    return (
        <div
            id="LoanCalculator"
            className="grid border border-white rounded sm:grid-cols-2"
        >
            <UserInputSection
                loan={loan}
                months={months}
                setLoan={(num) => setLoan(num ? num : 0)}
                setMonths={(num) => setMonths(num)}
            />
            <div className="flex-1 bg-green-salt">right side</div>
        </div>
    );
};

export default LoanCalculator;
