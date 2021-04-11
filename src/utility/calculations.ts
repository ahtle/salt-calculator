// ------------- INTEREST ONLY CALCULATOR -------------------
export const interestOnlyMonthlyPayment = (interest: number, months: number) => {
    return Math.ceil(interest / months);
}

export const interestOnlyAPR = (ltv:number) => {
    return 10 + ((ltv - 60) / 10);
}

export const interestOnlyTotalInterest = (loan:number, apr: number, months: number) => {
    // A = Principal x rate x time
    const rate = apr / 100;
    const interest = Math.ceil(loan  * rate * (months / 12));
    return interest;
}

// ------------- P & I CALCULATOR -------------------
export const principalMonthlyPayment = (loan: number, months: number, interest: number) => {
    const top = (0.12 / 12) * Math.pow(1 + 0.12 / 12, 12);
    const bottom = Math.pow(1 + 0.12 / 12, 12) - 1;

    const A = 10000000 * (top / bottom);
    return A;
};

// ------------- BOTH CALCULATOR -------------------
export const collateralNeeded = (loan: number, ltv: number) => {
    return Math.ceil(loan / (ltv / 100));
}

export const usdToCrypto = (collateral: number, cryptoValue: number) => {
    const amount = collateral / cryptoValue;
    return Number(amount).toLocaleString('en', {maximumFractionDigits: 6});
}