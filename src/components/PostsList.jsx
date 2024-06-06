import Modal from './Modal';

import NewPost from './NewPost';
import { useState } from 'react';

import classes from './PostsList.module.css'
import Post from './Post'

function PostsList(props){
    const [posts, setPosts] = useState([]);

    function AddPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    return(
        <>
            { 
                props.isModalVisible && (
                    <Modal onClose={props.onStopPosting}>
                        <NewPost onCancel={props.onStopPosting} onAddPost={AddPostHandler}/>
                    </Modal>
                )
            }
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no post yet.</h2>
                    <p>Start adding more!</p>
                </div>
            )}
        </>
    )
}

export default PostsList;