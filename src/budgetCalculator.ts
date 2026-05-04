
export const STATUS_MESSAGES = {
    UNDER: 'Sota pressupost ✈️',
    OVER: 'Sobre pressupost ⚠️',
    OK: 'Dins pressupost ✅',
} as const;

export type BudgetStatus = keyof typeof STATUS_MESSAGES;

function calculateBudgetStatus(totalExpenses:number, budget:number): BudgetStatus{
    const percentage = (totalExpenses/budget)*100;
    if(percentage<80) return 'UNDER';
    if(percentage>100)return 'OVER';
    return 'OK';
}

const status = calculateBudgetStatus(1200, 1000);
console.log(STATUS_MESSAGES[status]);