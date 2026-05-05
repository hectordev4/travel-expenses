
export type Summary = {
    travelDays:number,
    expensesDays: number,
    dailyBudget: number,
    averageDailyExpense: number,
    underBudget: boolean,
    rating: 1 | 2 | 3,
    feedback: string,
}

export function generateExpenseReport(dailyExpenses:number[], dailyBudget:number): Summary{

    const travelDays = dailyExpenses.length;

    const expensesDays = dailyExpenses.reduce((acc, current) => {
        return current > 0 ? acc + 1 : acc;
    }, 0);

    const totalExpensesSum = dailyExpenses.reduce((acc, current) => acc + current, 0);

    const averageDailyExpense = travelDays > 0 ? totalExpensesSum / travelDays : 0;

    const underBudget = averageDailyExpense <= dailyBudget;

    const rating = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;

    let feedback: string;
        if (averageDailyExpense <= dailyBudget) {
            feedback = "Excel·lent gestió!";
        } else if (averageDailyExpense <= dailyBudget * 1.2) {
            feedback = "Correcte, però ajustat";
        } else {
            feedback = "Pot millorar...";
        }

    return {
        travelDays,
        expensesDays,
        dailyBudget,
        averageDailyExpense,
        underBudget,
        rating,
        feedback,
    }
}

console.log(generateExpenseReport([50, 0, 120, 85], 100))
const myReport = generateExpenseReport([50, 120, 30, 0, 80], 70);
console.log(myReport);