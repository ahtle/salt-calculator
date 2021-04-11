import InputCurrency from "../form/InputCurrency";
import NumSlider from "../form/NumSlider";

type Props = {
    loan: number;
    months: number;
    setLoan: (num: number) => void;
    setMonths: (num: number) => void;
};

const UserInputSection: React.FC<Props> = (props) => {
    return (
        <div className="flex-1 p-14">
            <div className="mb-10">
                <InputCurrency
                    label="How much do you want to borrow?"
                    value={props.loan}
                    onChange={props.setLoan}
                    min={5000}
                    max={25000000}
                />
            </div>
            <div>
                <NumSlider
                    label="How long do you need to pay back?"
                    min={3}
                    max={36}
                    value={props.months}
                    onChange={props.setMonths}
                />
            </div>
        </div>
    );
};

export default UserInputSection;
