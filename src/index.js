import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/AppContainer';
import store from './redux/store/store';
import './styles.css';

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('root'),
);
