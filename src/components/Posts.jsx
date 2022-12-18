import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../store/postSlice';

const Posts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);

    useEffect(() => {
        dispatch(getPosts())
    },[])

    return (
        <div className='posts'>
            <h2><i>React - Redux Toolkit - AsyncThunk</i></h2>
            <div className='getPosts'>

                {/* <button 
                    onClick={() => dispatch(getPosts())}
                    type='submit'>Get posts
                </button> */}
            </div>
            {posts.map(post => 
                    <PostItem key={post.id} post={post}/>
                )}
        </div>
    )
}

export default Posts