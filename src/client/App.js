import React, { Component } from 'react';
import '../../assets/css/style.css'

const posts = [
  {
    id: 1,
    text: 'First post',
    user: {
      avatar: '/uploads/avatar1.png',
      username: 'Test User 1',
    },
  },
  {
    id: 2,
    text: 'Second post',
    user: {
      avatar: '/uploads/avatar2.png',
      username: 'Test User 2',
    },
  },
];
class App extends Component{
  state = {
    posts: posts,
    postContent: ''
  }

  handlePostContentChange = (event) => {
    this.setState({
      postContent: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: this.state.posts.length + 1,
      text: this.state.postContent,
      user: {
        avatar: '/uploads/avatar1.png',
        username: 'Fake User'
      }
    }
    this.setState( (prevState) => ({
      posts: [newPost, ...prevState.posts],
      postContent: ''
    }))
  }

  render(){
    const { posts, postContent } = this.state
    return (
      <div className='container'>
        <div className='postForm'>
          <form onSubmit={this.handleSubmit}>
            <textarea value={postContent} onChange={this.handlePostContentChange} placeholder='Write your custom post!!' />
            <input type='submit' value='Submit' />
          </form>
        </div>
        <div className='feed'>
          {
            posts.map(
              (post, i) => 
              <div className='post' key= {post.id}>
                <div className='header'>
                  <img src= {post.user.avatar} />
                  <h2>{post.user.username}</h2>
                </div>
                <p className='content'>
                  {post.text}
                </p>
              </div>
            )
          }
        </div>

      </div>
    )
  }
}
export default App;
