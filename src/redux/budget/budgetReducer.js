import { ActionType } from './budgetAction';

const initialState = 0;

const budgetReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.ADD_BUDGET_VALUE:
            return payload;
        default:
            return state;
    }
};

export default budgetReducer;
