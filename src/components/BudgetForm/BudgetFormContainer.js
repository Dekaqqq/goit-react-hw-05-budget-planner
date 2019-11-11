import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import { addBudgetValue } from '../../redux/budget/budgetAction';

const mapDispatchToProps = dispatch => ({
    onSave: value => dispatch(addBudgetValue(value)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);
