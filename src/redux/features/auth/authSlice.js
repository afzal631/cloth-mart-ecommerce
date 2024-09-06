const { createSlice } = require("@reduxjs/toolkit");

const loadUserFromLocalStore = () => {
  try {
    const serializedUser = localStorage.getItem("user");
    if (serializedUser == null) return { user: null };
    return { user: JSON.parse(serializedUser) };
  } catch (error) {}
};

const initialState = loadUserFromLocalStore();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      (state.user = null), localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
