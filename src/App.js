import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/UI/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'AAA', body: 'CCC'},
        {id: 2, title: 'CCC', body: 'BBB'},
        {id: 3, title: 'BBB', body: 'AAA'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {

        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } else {
            return posts
        }
    }, [posts, filter.sort])

    const [modal, setModal] = useState(false)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

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
