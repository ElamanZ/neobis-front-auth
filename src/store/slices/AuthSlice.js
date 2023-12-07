import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requester } from '../../configs/axiosConfig'
import axios from 'axios'

const initialState = {
  form: {
    "email": "",
    "username": "",
    "password": ""
  },
  authPost: {
    success: false,
    loading: false,
    error: null,
    data: null,
  },
  posts: {
    data: null,
    success: false,
    loading: false, 
    error: null
  }
}

export const postAuthSignIn = createAsyncThunk(
  'postAuthSignIn',
  async (form) => {      
    const response = await requester.post('/api/v1/auth/registration/',form)
    console.log('res',response)
  }
)

export const getPosts = createAsyncThunk(
  'getPosts',
  async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/pos')
    return response.data
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFormAuthAction: (state,action) => {
      state.form = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postAuthSignIn.pending,(state) => {
      state.authPost.loading = true
    })

    builder.addCase(postAuthSignIn.fulfilled,(state) => {
      state.authPost.success = true
      state.authPost.loading = false
    })

    builder.addCase(postAuthSignIn.rejected, (state, action) => {
      state.authPost.error = action.error
    })

    builder.addCase(getPosts.fulfilled, (state,action) => {
      console.log('posts', action)
      state.posts.data  = action.payload
    })

    builder.addCase(getPosts.pending, (state,action) => {
      console.log('posts', action)
      state.posts.loading  = true
    })

    builder.addCase(getPosts.rejected, (state,action) => {
      console.log('posts', action)
      state.posts.error  = action.error
    })
    
  }
})

// Action creators are generated for each case reducer function
export const { setFormAuthAction } = authSlice.actions

export default authSlice.reducer

export const authSelect = state => state.authReducer