import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState('')
    const [fetchPost, isLoading, error] = useFetching(async () => {
        const post = await PostService.getPostId(params.id);
        setPost(post.data);
    })

    useEffect(() => {
        fetchPost()
    }, []);

    console.log(post)

    return (
        <div>
            <h1>Страница поста №{params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
        </div>
    );
};

export default PostIdPage;