import React, {useEffect, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostingLoading, setIsPostingLoading] = useState(false)

    useEffect(() => {
        fetchPosts()
    }, []);

    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    async function fetchPosts() {
        setIsPostingLoading(true)
        setTimeout(async () => {
            const posts = await PostService.getAll()
            setPosts(posts)
            setIsPostingLoading(false)
        }, 1000)
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
          {isPostingLoading
              ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
              : <PostList
                  posts={sortedAndSearchedPosts}
                  title={'Список постов'}
                  remove={removePost}
              />
          }
      </div>
  );
}

export default App;
