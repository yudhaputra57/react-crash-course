import { useLoaderData } from 'react-router-dom';
import classes from './PostsList.module.css'
import Post from './Post'

function PostsList(){
    const posts = useLoaderData();
    return(
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post id={post.id} key={post.id} author={post.author} body={post.body} />)}
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