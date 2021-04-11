interface Props {
    theme?: string;
}

const PageWrapper: React.FC<Props> = (props) => {
    return (
        <div
            className={`min-h-full py-10 ${props.theme ? "" : "bg-navy-salt"}`}
        >
            <div className="container mx-auto">{props.children}</div>
        </div>
    );
};

export default PageWrapper;
