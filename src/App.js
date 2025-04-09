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

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
      <div className="App">
          <PostForm create={createPost}/>
          {posts.length
              ? <PostList
                  posts={posts}
                  title={'Список постов'}
                  remove={removePost}/>
              : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
          }

      </div>
  );
}

export default App;
