import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import ArticleList from './ArticleList';
import {articles} from "./fixtures";

ReactDOM.render(<ArticleList articles = {articles} />, document.getElementById('root'));