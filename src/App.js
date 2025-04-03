import React, {useState} from 'react';
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {

  return (
      <div className="App">
          <PostItem post={{id: 1, title: 'JS', body: 'Desc'}}/>
      </div>
  );
}

export default App;
