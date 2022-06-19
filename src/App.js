import React, {useRef, useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import "./styles/App.css";


function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'JavaScript', body:'Description'},
      {id: 2, title: 'Java', body:'Description'},
      {id: 3, title: 'Python', body:'Description'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title="Список постов 1"/>
      
    </div>
  );
}

export default App;
