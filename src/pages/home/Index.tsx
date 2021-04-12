import { useState, useEffect, useCallback } from "react";
import PageWrapper from "../../components/PageWrapper";
import LoanCalculator from "../../components/calculator/Index";
import saltLogoWhite from "../../images/salt-logo-white.svg";
import {
    CryptoContext,
    CryptoProps,
    cryptoInitialState,
} from "../../contexts/cryptoContext";
import axios from "axios";

const Home = () => {
    const [crypto, setCrypto] = useState<CryptoProps>(cryptoInitialState);
    const [error, setError] = useState<boolean>(false);

    const getData = useCallback(async () => {
        if (!crypto.loaded) {
            try {
                const config = {
                    headers: {
                        authorization: process.env.REACT_APP_API_KEY,
                    },
                };
                const res = await axios(
                    "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,DASH,DOGE,ETH,SALT&tsyms=USD",
                    config
                );
                const data = { ...res.data };
                setCrypto({ data, loaded: true });
                setError(false);
            } catch (err) {
                console.log(err);
                setError(true);
            }
        }
    }, [crypto]);

    // on mounted
    useEffect(() => {
        getData();
    }, [getData]);

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
                        <h1 className="mb-10 text-2xl font-medium text-white sm:text-4xl md:text-6xl">
                            Loan Calculator
                        </h1>

                        <div className="w-full md:w-11/12 2xl:w-3/4">
                            {!error && crypto.loaded ? (
                                <CryptoContext.Provider value={crypto}>
                                    <LoanCalculator />
                                </CryptoContext.Provider>
                            ) : (
                                <h3 className="text-2xl text-white">Loading</h3>
                            )}
                            {error && (
                                <h3 className="text-2xl text-white">
                                    Please try again another time...
                                </h3>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Home;
