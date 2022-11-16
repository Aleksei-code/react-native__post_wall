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
        {
          id: "2",
          img: "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
          text: "Awesome text for post 2",
          date: new Date().toJSON(),
        },
        {
          id: "3",
          img: "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg",
          text: "Awesome text for post 3",
          date: new Date().toJSON(),
        },
        {
          id: "4",
          img: "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
          text: "Awesome text for post 4",
          date: new Date().toJSON(),
        },
        {
          id: "5",
          img: "https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg",
          text: "Awesome text for post 5",
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
  },
});

export const { initialState, addToFavorites } = mainSlice.actions;

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
