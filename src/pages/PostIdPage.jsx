import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const post = await PostService.getPostById(params.id);
        setPost(post.data);
    })

    const [fetchComments, commIsLoading, commError] = useFetching(async () => {
        const comments = await PostService.getCommById(params.id);
        setComments(comments.data);
    })

    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, []);

    return (
        <div>
            <h1>Страница поста №{params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h2>Комментарии:</h2>
            {comments.map((c) =>
                <div
                    key={c.id}
                    style={{margin: '15px 0'}}
                >
                    <div>{c.id}. {c.email}</div>
                    <div>{c.body}</div>
                </div>
            )}
        </div>
    );
};

export default PostIdPage;