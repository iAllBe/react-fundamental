import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, usePosts] = useState([
        {id: 1, title: 'JS 1', body: 'Desc 1'},
        {id: 2, title: 'JS 2', body: 'Desc 2'},
        {id: 3, title: 'JS 3', body: 'Desc 3'},
    ])

  return (
      <div className="App">
          <form action="">
              <MyInput
                  type="text"
                  value='Наименование поста'/>
              <MyInput
                  type="text"
                  value='Описание поста'/>
              <MyButton disabled>Создать пост</MyButton>
          </form>
          <PostList
              posts={posts}
              title={'Список постов'}/>
      </div>
  );
}

export default App;
