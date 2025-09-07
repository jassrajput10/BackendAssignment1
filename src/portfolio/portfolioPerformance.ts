//interface defined to represent the functions output
interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

//
export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
):  PortfolioPerformance { 
    // fix the calculation where profitorloss should be calculated to subtract from current value to initial investment 
    const profitOrLoss = currentValue - initialInvestment;

    const percentageChange = (profitOrLoss / initialInvestment) * 100;
    /**
     * 
     * @param percentageChange - this is calculted percentage change
     * @returns - it will return the performance summary
     */
    const performanceSummary = (percentageChange: number): string => {
    switch (true) {
        case percentageChange >= 20:
            return `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
        case percentageChange >= 10 && percentageChange < 20: 
            return `The portfolio has gained moderately with the profit of $${profitOrLoss}.`;
        case percentageChange >= 0.1 && percentageChange < 10:
            return `The portfolio has gained slightly with the profit of $${profitOrLoss}.`;
        case percentageChange === 0:
            return `There is no change in portfolio`;
        case percentageChange >= -9.99 && percentageChange < 0:
            return `The portfolio has lost slightly with the loss of $${profitOrLoss}.` ;   
        case percentageChange >= -19.99 && percentageChange <= -10:
            return `The portfolio has lost moderetaly with the loss of $${profitOrLoss}.`;
        case percentageChange <= -20:
            return `The portfolio has lost significantly with the loss of $${profitOrLoss}.`;
        default:
            return `No change in portfolio`;
        }

    };

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary: performanceSummary(percentageChange), // this will call the function here
    };
}
