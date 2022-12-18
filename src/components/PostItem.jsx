import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../store/postSlice';

const PostItem = ({post}) => {

  const [edit, setEdit] = useState(false);
  const [changeTitle, setChangeTitle] = useState('');  
  const [changeBody, setChangeBody] = useState('');  
  const dispatch = useDispatch();

  const savePost = (id, title, body) => {
    const post = {
      id,
      title,
      body
    }
    dispatch(editPost(post));
    setChangeTitle('');
    setChangeBody('');
    setEdit(false);
  }


const onEdit = (id, title, body) => {
  if (id) {
    setEdit(true);
    setChangeTitle(title);
    setChangeBody(body);
  }
}

  return (
    <>
      { edit ? ( 
      <div className='changeForm'>
        <input value={changeTitle} onChange={e => setChangeTitle(e.target.value)}/>
        <textarea value={changeBody} onChange={e => setChangeBody(e.target.value)}/>
        <button type="submit" onClick={() => savePost(post.id, changeTitle, changeBody)}>Save</button> 
      </div>) :
        (<div className='post'>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <div className='buttons'>
            <button 
              style={{background: 'yellow', color: 'black'}} 
              onClick={() => onEdit(post.id, post.title, post.body)
              }
            >Edit post
            </button>
            <button 
              style={{background: 'red', color: 'white'}} 
              onClick={() => dispatch(deletePost(post.id))}
            >Delete post
            </button>
          </div>
        </div>)
      }
    </>


  )
}

export default PostItem