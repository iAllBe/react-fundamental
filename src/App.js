import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'AAA', body: 'CCC'},
        {id: 2, title: 'CCC', body: 'BBB'},
        {id: 3, title: 'BBB', body: 'AAA'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        console.log('done "getSortedPosts"')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        } else {
            return posts
        }
    }, [posts, selectedSort])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts])

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    function sortPosts(sort) {
        setSelectedSort(sort);
    }

  return (
      <div className="App">
          <PostForm create={createPost}/>
          <div>
              <hr style={{margin: '15px 0'}}/>
              <MyInput
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder='Поиск'
              />
              <MySelect
                  value={selectedSort}
                  onChange={sortPosts}
                  defaultOption='Сортировка'
                  options={[
                      {value: 'title', name: 'По загаловку'},
                      {value: 'body', name: 'По описанию'}
                  ]}
              />
          </div>
          {sortedAndSearchedPosts.length
              ? <PostList
                  posts={sortedAndSearchedPosts}
                  title={'Список постов'}
                  remove={removePost}/>
              : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
          }

      </div>
  );
}

export default App;
