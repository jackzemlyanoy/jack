import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Article from './Article';
import {articles} from "./fixtures";

ReactDOM.render(<Article article = {articles[0]} />, document.getElementById('root'));