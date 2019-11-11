export const ActionType = {
    ADD_BUDGET_VALUE: 'ADD_BUDGET_VALUE',
};

export const addBudgetValue = value => ({
    type: ActionType.ADD_BUDGET_VALUE,
    payload: value,
});
