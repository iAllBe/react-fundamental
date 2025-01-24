import React from 'react';
import PostItem from "./PostItem";
import classes from './PostList.module.css'

const PostList = ({posts}) => {
    return (
        <div className={classes.list}>
            {posts.map(post => (
                <PostItem
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    id={post.id}
                />
            ))}
        </div>
    );
};

export default PostList;