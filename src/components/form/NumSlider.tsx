import React, { useState, useEffect } from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";

type Props = {
    label: string;
    value: number;
    min: number;
    max: number;
    onChange: (num: number) => void;
};

const SliderWithTooltip = createSliderWithTooltip(Slider);

// ---------------------- main ---------------------

const NumSlider: React.FC<Props> = (props) => {
    const [marks, setMarks] = useState<{ [key: number]: string }>({});

    const onSliderChange = (value: number) => {
        props.onChange(value);
    };

    // set slider ticks
    useEffect(() => {
        let marks: { [key: number]: string } = {};
        for (let i = props.min; i <= props.max; i++) {
            marks[i] = "";
        }
        setMarks(marks);
    }, [props.min, props.max]);

    return (
        <div>
            <p className="mb-3 font-light">{props.label}</p>
            <div className="flex items-center w-full">
                <span className="block text-xs font-light">{props.min}</span>
                <SliderWithTooltip
                    min={props.min}
                    max={props.max}
                    value={props.value}
                    marks={marks}
                    onChange={onSliderChange}
                    railStyle={{
                        height: 0,
                    }}
                    handleStyle={{
                        height: 10,
                        width: 10,
                        marginLeft: -5,
                        marginTop: -5,
                        backgroundColor: "#00FFBD",
                        border: 0,
                    }}
                    trackStyle={{
                        background: "none",
                    }}
                    tipFormatter={(value: number) => `${value} months`}
                    tipProps={{ visible: true, placement: "bottom" }}
                />
                <span className="text-xs font-light">{props.max}</span>
            </div>
        </div>
    );
};

export default NumSlider;
