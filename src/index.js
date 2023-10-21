// This Project is https://github.com/salimovrashad
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import "@fontsource/oswald";
import './sass/style.scss'
import '../node_modules/aos/dist/aos';
import { Provider } from 'react-redux';
import configureStore from './manager/store/configureStore';
import { getMotosFromDatabase } from './manager/actions/motoAction';
import photo from './images/Spinner-1s-64px.gif'
import { getBlogsFromDatabase } from './manager/actions/blogAction';
import { getUsersFromDatabase } from './manager/actions/loginAction';

const mystore = configureStore();
const result = (
  <Provider store={mystore}>
    <App />
  </Provider>
)

ReactDOM.render(<div className='center'><img src={photo} alt="" /></div>, document.getElementById('root'));
mystore.dispatch(getMotosFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById('root'));
})
mystore.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById('root'));
})
mystore.dispatch(getUsersFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById('root'));
})