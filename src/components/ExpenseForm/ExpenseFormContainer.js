import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../../redux/expenses/expensesAction';

const mapDispatchToProps = dispatch => ({
    onSave: expense => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
