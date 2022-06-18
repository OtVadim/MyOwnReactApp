import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
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

  /*const [posts2, setPosts2] = useState([
    {id: 1, title: 'GoLang', body:'Description'},
    {id: 2, title: 'Ruby', body:'Description'},
    {id: 3, title: 'Kotlin', body:'Description'}
  ])*/



  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="название постов"/>
        <MyInput type="text" placeholder="описание поста"/>
        <MyButton disabled>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title="Список постов 1"/>
      
    </div>
  );
}

export default App;
