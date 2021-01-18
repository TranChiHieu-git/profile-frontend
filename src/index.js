import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/settingmode.css';
import App from './App';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from './reducer/index'
import {BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
