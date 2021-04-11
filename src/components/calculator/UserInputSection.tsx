import InputCurrency from "../form/InputCurrency";
import NumSlider from "../form/NumSlider";
import Button from "../form/Button";

type Props = {
    loan: number;
    ltv: number;
    ltvOptions: Array<number>;
    months: number;
    repaymentType: string;
    setLoan: (num: number) => void;
    setMonths: (num: number) => void;
    setLtv: (num: number) => void;
    setRepaymentType: (str: string) => void;
};

const UserInputSection = (props: Props) => {
    return (
        <div className="flex-1 p-6 text-gray-400 md:p-10 xl:p-14">
            <div className="mb-8">
                <InputCurrency
                    label="How much do you want to borrow?"
                    value={props.loan}
                    onChange={props.setLoan}
                    min={5000}
                    max={25000000}
                />
            </div>
            <div className="mb-16">
                <NumSlider
                    label="How long do you need to pay back?"
                    min={3}
                    max={36}
                    value={props.months}
                    onChange={props.setMonths}
                />
            </div>
            <div className="mb-8">
                <p className="mb-3 font-light">Loan-to-Value (LTV)</p>
                <div className="flex justify-between">
                    {props.ltvOptions.map((num) => {
                        return (
                            <Button
                                key={num}
                                label={`${num} %`}
                                active={props.ltv === num}
                                onClick={() => props.setLtv(num)}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="mb-8">
                <p className="mb-3 font-light">Repayment Option</p>
                <div>
                    <button
                        className={`w-1/2 p-3 text-sm border rounded-l focus:outline-none ${
                            props.repaymentType === "Interest Only"
                                ? "border-green-salt bg-green-salt text-navy-salt text-bold"
                                : "border-gray-300 rounded-r text-gray-300"
                        }`}
                        onClick={() => props.setRepaymentType("Interest Only")}
                    >
                        Interest Only
                    </button>
                    <button
                        className={`w-1/2 p-3 text-sm border rounded-r focus:outline-none ${
                            props.repaymentType === "Principal & Interest"
                                ? "border-green-salt bg-green-salt text-navy-salt text-bold"
                                : "border-gray-300 rounded-r text-gray-300"
                        }`}
                        onClick={() =>
                            props.setRepaymentType("Principal & Interest")
                        }
                    >
                        Principal & Interest
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInputSection;
