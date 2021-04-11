type Props = {
    label: string;
    active?: boolean;
    onClick: () => void;
};

const Button = (props: Props) => {
    const btnClass = props.active
        ? "bg-green-salt text-navy-salt border-green-salt"
        : "bg-navy-salt border border-gray-300 text-white-300";

    return (
        <button className={`p-2 rounded ${btnClass}`} onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default Button;
