import React from 'react';
import {PostData} from "../../Data/PostData";
import Post from "../Post/Post";
import './Posts.css';

function Posts(props) {
    return (
        <div className="Posts">
            {PostData.map((post, id) => {
                return <Post post={post} key={id}/>
            })}
        </div>
    );
}

export default Posts;