import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "learining redux", content: "i've learning redux" },
  { id: 2, title: "didnt learining redux", content: "i've recoil" },
];

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
        state.push(action.payload);
      },
    },
  },
});
export const { addPost } = postSlice.actions;
export const selectAllPosts = (state) => state.posts;
export default postSlice.reducer;
