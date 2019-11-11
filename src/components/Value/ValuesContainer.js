import { connect } from 'react-redux';
import getBudgetValue from '../../redux/budget/budgetSelector';
import getExpenses from '../../redux/expenses/expensesSelector';
import Values from './Values';

const mapStateToProps = state => ({
    budget: getBudgetValue(state),
    expenses: getExpenses(state),
});

export default connect(mapStateToProps)(Values);
