import React from 'react';
import classes from './PostItem.module.css'

const PostItem = ({id, title, body}) => {

    return (
        <div className={classes.item}>
            <strong className={classes.title}>{id}</strong>
            <div className={classes.title}>{title}</div>
            <div className={classes.body}>{body}</div>
        </div>
    );
};

export default PostItem;