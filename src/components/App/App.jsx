import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../styledComponents/styled';
import BudgetFormContainer from '../BudgetForm/BudgetFormContainer';
import ExpenseFormContainer from '../ExpenseForm/ExpenseFormContainer';
import ExpensesTableContainer from '../ExpensesTable/ExpensesTableContainer';
import ValuesContainer from '../Value/ValuesContainer';

export const App = ({ expenses }) => (
    <Container>
        <BudgetFormContainer />
        <ValuesContainer />
        <ExpenseFormContainer />
        {expenses.length > 0 && <ExpensesTableContainer />}
    </Container>
);

App.propTypes = {
    expenses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default App;
