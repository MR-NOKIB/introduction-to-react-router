/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const navigate = useNavigate();
    const { id, title, body } = post;
    const postStyle = {
        border: '1px solid gray',
        borderRadius: '10px',
        padding: '20px'
    };
    const handleShowDetail = () => {
            navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>ID of the post: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <button onClick={handleShowDetail}>Click To See Details</button>
        </div>
    );
};

export default Post;