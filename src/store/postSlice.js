import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk(
    'posts/getPosts', async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get('https://62f4be75535c0c50e7615631.mockapi.io/post')
        console.log(res)
        dispatch(setPosts(res.data));
    }
)
export const deletePost = createAsyncThunk(
    'posts/deletePost', async (id, { rejectWithValue, dispatch }) => {
        await axios.delete(`https://62f4be75535c0c50e7615631.mockapi.io/post/${id}`)
        dispatch(removePost(id))
    }
)
export const editPost = createAsyncThunk(
    'posts/editPost', async ({id, title, body}, { rejectWithValue, dispatch }) => {
        await axios.put(`https://62f4be75535c0c50e7615631.mockapi.io/post/${id}`, {id, title, body})
        .then(resp => {
            console.log(resp)
            dispatch(changePost({id, title, body}))
        })
    }
)


const postSlice = createSlice({
    name: 'posts',
    initialState: { posts: [] },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        changePost: (state, action) => {
            const { id, title, body } = action.payload;
            console.log(id, title, body);
            const existingPost = state.posts.find(post => post.id === id);
            if (existingPost) {
                existingPost.id = id;
                existingPost.title = title;
                existingPost.body = body;
            }
        },
    },

    extraReducers: {
        [getPosts.fulfilled]: () => console.log('fulfilled'),
        [getPosts.pending]: () => console.log('pending'),
        [getPosts.rejected]: () => console.log('rejected'),
        [deletePost.fulfilled]: () => console.log('fulfilled'),
        [deletePost.pending]: () => console.log('pending'),
        [deletePost.rejected]: () => console.log('rejected'),
        [editPost.fulfilled]: () => console.log('fulfilled'),
        [editPost.pending]: () => console.log('pending'),
        [editPost.rejected]: () => console.log('rejected'),
    }
})

export const { setPosts, removePost, changePost} = postSlice.actions;
export default postSlice.reducer;

