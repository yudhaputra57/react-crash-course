import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props)
{
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function onBodyChangedHandler(event)
    {
        setEnteredBody(event.target.value);
    }

    function onAuthorChangedHandler(event)
    {
        setEnteredAuthor(event.target.value);
    }

    function SubmitHandler(event)
    {
        event.preventDefault();
        const postData={
            body: enteredBody,
            author: enteredAuthor
        }
        props.onAddPost(postData);
        props.onCancel();
    }

    return (
        <form className={classes.form} onSubmit={SubmitHandler}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={onBodyChangedHandler}/>
            </p>
            <p>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' required onChange={onAuthorChangedHandler}/>
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}

export default NewPost;