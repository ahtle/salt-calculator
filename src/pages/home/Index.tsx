import { useState, useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import LoanCalculator from "../../components/calculator/LoanCalculator";
import saltLogoWhite from "../../images/salt-logo-white.svg";
import {
    CryptoContext,
    CryptoProps,
    cryptoInitialState,
} from "../../contexts/cryptoContext";
import axios from "axios";

const Home = () => {
    const [crypto, setCrypto] = useState<CryptoProps>(cryptoInitialState);

    const getData = () => {
        getCrypto();
    };

    const getCrypto = async () => {
        if (!crypto.loaded) {
            try {
                // const data = await axios(
                //     "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,DASH,DOGE,ETH,SALT&tsyms=USD",
                //     {
                //         headers: {
                //             authorization: process.env.REACT_APP_API_KEY,
                //         },
                //     }
                // );
                // if (data.status === 200) {
                //     console.log(data.data);
                //     const newCrypto = { ...data.data, loaded: true };
                //     setCrypto(newCrypto);
                // }

                const newCrypto = { ...crypto, loaded: true };
                setCrypto(newCrypto);
            } catch (err) {
                console.log(err);
            }
        }
    };

    // on mounted
    useEffect(() => {
        getData();
    }, [crypto]);

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
                            {crypto.loaded ? (
                                <CryptoContext.Provider value={crypto}>
                                    <LoanCalculator />
                                </CryptoContext.Provider>
                            ) : (
                                <h3 className="text-2xl text-white">Loading</h3>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Home;
