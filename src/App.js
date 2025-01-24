import {useState} from "react";
import PostList from "./components/PostList";
import classes from "./styles/App.module.css";

function App() {
    const [posts, usePosts] = useState([
        {id:1, title: 'Заголовок 1', body: 'Описание 1'},
        {id:2, title: 'Заголовок 2', body: 'Описание 2'},
        {id:3, title: 'Заголовок 3', body: 'Описание 3'}
    ]);

  return (
    <div className={classes.App}>
      <PostList
        posts={posts}
      />
    </div>
  );
}

export default App;
