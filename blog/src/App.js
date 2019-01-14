import React, { Component } from 'react';
import './App.css';
import { Feed } from './feed.js';
const blogPosts = require('./blog_posts.json')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: blogPosts //array
    }
  }
  render() {
    return (
      <div className="App">
        <h1>A Pirate's Blog</h1>
        <Feed allPosts={this.state.allPosts}/>
      </div>
    );
  }
}

export default App;
