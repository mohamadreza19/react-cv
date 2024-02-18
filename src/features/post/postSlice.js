import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [
//   { id: 1, title: "learining redux", content: "i've learning redux" },
//   { id: 2, title: "didnt learining redux", content: "i've recoil" },
// ];
const POSTS_URL = "https//jsonplaceholder.typicode.com/posts";
const initialState = {
  posts: [],
  status: "idle",
  error: null,
};
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return [...response.data];
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
      reducer(state, action) {
        state.posts.push(action.payload);
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeded";
        let main = 1;
        const loadedPosts = action.payload.map((post) => {
          return post;
        });
        state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { addPost } = postSlice.actions;
export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export default postSlice.reducer;
