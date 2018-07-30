import React, { Component } from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from "./Filters/index";
import {articles} from "../fixtures";


class App extends Component {

  render() {
    return (
      <div>
        <UserForm />
        <Filters articles = {articles} />
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
}

export default App;
