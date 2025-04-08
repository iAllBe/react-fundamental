import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS 1', body: 'Desc 1'},
        {id: 2, title: 'JS 2', body: 'Desc 2'},
        {id: 3, title: 'JS 3', body: 'Desc 3'},
    ])

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

  return (
      <div className="App">
          <PostForm create={createPost}/>
          <PostList
              posts={posts}
              title={'Список постов'}/>
      </div>
  );
}

export default App;
