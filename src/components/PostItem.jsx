import React from 'react';
import classes from './PostItem.module.css'

const PostItem = ({title, body}) => {

    return (
        <div className={classes.item}>
            <div className={classes.title}>{title}</div>
            <div className={classes.body}>{body}</div>
        </div>
    );
};

export default PostItem;