import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {},
  bookedPosts: {},
  reducers: {
    initialState: (state) => {
      state.data = [
        {
          id: "1",
          img: "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg",
          text: "Awesome text for post 1",
          date: new Date().toJSON(),
        },
      ];
    },
    addToFavorites: (state, payload) => {
      const allPosts = state.data;
      allPosts.map((post) => {
        if (post.id === payload.payload) {
          post.booked = !post.booked;
        }
        return post;
      });
    },
    deletePost: (state, payload) => {
      let data;
      data = state.data.filter((post) => post.id !== payload.payload);
      state.data = data;
    },
    createPost: (state, payload) => {
      let data;
      data = state.data;
      data.push(payload.payload);
    },
  },
});

export const { initialState, addToFavorites, deletePost, createPost } =
  mainSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default mainSlice.reducer;
