import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </main>
    </div>
  );
};

// const INITIAL_STATE = {
//   token: null,
//   user: {
//     email: null,
//     name: null,
//   },
//   authenticated: false,
//   isLoading: false,
//   error: null,
// };
// const authSlice = createSlice({
//   name: 'auth',
//   initialState: INITIAL_STATE,
//   extraReducers: builder =>
//     builder
//       // ---------- REGISTER USER ----------------
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.authenticated = true;
//         state.token = action.payload.token;
//         state.user = action.payload.user;
//       })
//       // ---------- LOGIN USER ----------------
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.authenticated = true;
//         state.token = action.payload.token;
//         state.user = action.payload.user;
//       })
//       // ---------- REFRESH USER ----------------
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.authenticated = true;
//         state.user = action.payload;
//       })
//       // ---------- LOGOUT USER ----------------
//       .addCase(logOut.fulfilled, () => {
//         return INITIAL_STATE;
//       })

//       .addMatcher(
//         isAnyOf(
//           logOut.pending,
//           register.pending,
//           logIn.pending,
//           refreshUser.pending
//         ),
//         state => {
//           state.isLoading = true;
//           state.error = null;
//         }
//       )
//       .addMatcher(
//         isAnyOf(
//           logOut.rejected,
//           register.rejected,
//           logIn.rejected,
//           refreshUser.rejected
//         ),
//         (state, action) => {
//           state.isLoading = false;
//           state.error = action.payload;
//         }
//       ),
// });

// export const authReducer = authSlice.reducer;
