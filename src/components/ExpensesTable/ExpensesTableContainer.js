import { connect } from 'react-redux';
import ExpensesTable from './ExpensesTable';
import getExpenses from '../../redux/expenses/expensesSelector';
import { deleteExpense } from '../../redux/expenses/expensesAction';

const mapStateToProps = state => ({
    items: getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
    onRemove: id => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
