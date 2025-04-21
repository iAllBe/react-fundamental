import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/UI/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'AAA', body: 'CCC'},
        {id: 2, title: 'CCC', body: 'BBB'},
        {id: 3, title: 'BBB', body: 'AAA'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
      <div className="App">
          <MyButton
              style={{marginTop: '15px'}}
              onClick={() => setModal(true)}
          >
              Создать пост
          </MyButton>
          <MyModal
              visible={modal}
              setVisible={setModal}
          >
              <PostForm create={createPost}/>
          </MyModal>
          <hr style={{margin: '15px 0'}}/>
          <PostFilter
              filter={filter}
              setFilter={setFilter}
          />
          <PostList
              posts={sortedAndSearchedPosts}
              title={'Список постов'}
              remove={removePost}
          />
      </div>
  );
}

export default App;
