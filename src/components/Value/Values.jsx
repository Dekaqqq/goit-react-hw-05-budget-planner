import React from 'react';
import PropTypes from 'prop-types';
import Stat from '../Stat/Stat';
import { ContainerValue } from '../../styledComponents/styled';

const calculateTotalExpenses = expenses => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

const Values = ({ budget, expenses }) => {
    const totalExpenses = calculateTotalExpenses(expenses);
    const balance = calculateBalance(budget, totalExpenses);

    return (
        <ContainerValue>
            <Stat label="Budget" value={budget} isPositive />
            <Stat label="Expenses" value={totalExpenses} />
            <Stat label="Balance" value={balance} isPositive={balance >= 0} />
        </ContainerValue>
    );
};

Values.propTypes = {
    budget: PropTypes.number.isRequired,
    expenses: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default Values;
