import React, { Component } from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Select />
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
}

export default App;
