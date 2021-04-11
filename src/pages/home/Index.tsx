import PageWrapper from "../../components/PageWrapper";
import LoanCalculator from "../../components/calculator/LoanCalculator";
import saltLogoWhite from "../../images/salt-logo-white.svg";

const Home: React.FC = () => {
    return (
        <PageWrapper>
            <div className="flex justify-center px-2 md:px-0">
                <div className="w-full xl:w-3/4">
                    <img
                        className="mb-14"
                        src={saltLogoWhite}
                        alt="SALT logo"
                    />

                    <div className="flex flex-col items-center">
                        <h1 className="mb-10 text-white">Loan Calculator</h1>

                        <div className="w-full md:w-11/12 2xl:w-3/4">
                            <LoanCalculator />
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Home;
