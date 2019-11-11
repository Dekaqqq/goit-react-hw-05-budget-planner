import { ActionType } from './expensesAction';

const initialValue = [];

const expensesReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case ActionType.ADD_EXPENSE:
            return [...state, payload];
        case ActionType.DELETE_EXPENSE:
            return state.filter(el => el.id !== payload);
        default:
            return state;
    }
};

export default expensesReducer;
