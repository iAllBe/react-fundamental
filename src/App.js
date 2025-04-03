import React, {useState} from 'react';
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    const [posts, usePosts] = useState([
        {id: 1, title: 'JS 1', body: 'Desc 1'},
        {id: 2, title: 'JS 2', body: 'Desc 2'},
        {id: 3, title: 'JS 3', body: 'Desc 3'},
    ])

  return (
      <div className="App">
          <PostList
              posts={posts}
              title={'Список постов'}/>
      </div>
  );
}

export default App;
