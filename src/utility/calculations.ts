// ------------- INTEREST ONLY CALCULATOR -------------------
export const interestOnlyMonthlyPayment = (interest: number, months: number) => {
    return Math.ceil(interest / months);
}

export const interestOnlyTotalInterest = (loan:number, apr: number, months: number) => {
    // A = Principal x rate x time
    const rate = apr / 100;
    const interest = Math.ceil(loan  * rate * (months / 12));
    return interest;
}

// ------------- P & I CALCULATOR -------------------
export const principalMonthlyPayment = (loan: number, months: number, apr: number) => {
    const top = ((apr / 100) / months) * Math.pow(1 + (apr / 100) / months, months);
    const bottom = Math.pow(1 + (apr / 100) / months, months) - 1;

    const A = Math.ceil(loan * (top / bottom));
    return A;
};

// ------------- BOTH CALCULATOR -------------------
export const calculateAPR = (ltv:number) => {
    return 10 + ((ltv - 60) / 10);
}

export const collateralNeeded = (loan: number, ltv: number) => {
    return Math.ceil(loan / (ltv / 100));
}

export const usdToCrypto = (collateral: number, cryptoValue: number) => {
    const amount = collateral / cryptoValue;
    return Number(amount).toLocaleString('en', {maximumFractionDigits: 6});
}

export const usdToSalt = (collateral: number, cryptoValue: number) => {
    const amount = collateral / cryptoValue;
    return Number(amount).toLocaleString('en', {maximumFractionDigits: 0});
}