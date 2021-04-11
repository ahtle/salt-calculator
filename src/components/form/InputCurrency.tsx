import React, { useState, useEffect } from "react";
import { currencyFormat } from "../../utility/formatter";

type Props = {
    label: string;
    value: number;
    min: number;
    max: number;
    onChange: (num: number) => void;
};

const InputCurrency = (props: Props) => {
    const [currencyStr, setCurrencyStr] = useState<string>("");
    const [showError, setShowError] = useState<boolean>(false);

    // currency to num
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = e.target.value.replace(/,/g, "");
        props.onChange(parseInt(num));
    };

    // process incoming num value
    useEffect(() => {
        let currency = "0";
        if (props.value) {
            currency = currencyFormat(props.value);

            // validata min / max
            if (props.value < props.min || props.value > props.max) {
                setShowError(true);
            } else {
                setShowError(false);
            }
        }
        setCurrencyStr(currency);
    }, [props.value, props.min, props.max]);

    return (
        <div>
            <p className="mb-3 font-light">{props.label}</p>
            <div className="flex w-full px-4 py-2 mb-1 border border-white rounded bg-navy-salt">
                <span className="pl-2 pr-4 text-green-salt">$</span>
                <input
                    type="text"
                    data-type="currency"
                    className="w-full text-white bg-navy-salt focus:outline-none"
                    pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                    value={currencyStr}
                    onChange={onChange}
                />
            </div>
            <p className="text-sm text-red-500">
                {showError && (
                    <span>{`Must be between $${currencyFormat(
                        props.min
                    )} and $${currencyFormat(props.max)}`}</span>
                )}
            </p>
        </div>
    );
};

export default InputCurrency;
