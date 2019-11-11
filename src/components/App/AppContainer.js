import { connect } from 'react-redux';
import App from './App';
import getExpenses from '../../redux/expenses/expensesSelector';

const mapStateToProps = state => ({
    expenses: getExpenses(state),
});

export default connect(mapStateToProps)(App);
