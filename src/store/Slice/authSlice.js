import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// //IntialState
// const initialState = {
//     msg: "",
//     user: "",
//     token: "",
//     loading: false,
//     error: ""
// }

// //Sign Up User Api Integration
// export const signUpUser = createAsyncThunk('signUpUser', async (body) => {
//     const res = await fetch("http://localhost:8085/api/u1/user/register", {
//         method: "Post",
//         headers: {
//             'content-Type': "application/json"
//         },

//         body: JSON.stringify(body)

//     })

//     return await res.json();
// })

// //Auth Slice
// const authSlice = createSlice({
//     name: 'user',
//     initialState,

//     reducers: {

//     },
//     extraReducers: {
//         [signUpUser.pending]: (state, action) => {
//             state.loading = true;
//         },
//         [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
//             state.loading = false;
//             if (error) {
//                 state.error = error
//             } else {
//                 state.msg = msg
//             }
//         },
//         [signUpUser.rejected]: (state, action) => {
//             state.loading = true
//         },
//     }
// })


//Action Dispatcher
export const signUpUser = createAsyncThunk("signUpUser", async () => {
    const response = await fetch("http://localhost:8085/api/u1/user/register")
    return response.json();
});


//AuthSlice Creator
const authSlice = createSlice({
    name: "user",
    
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },

    extraReducers: (builder) => {
        builder.addCase(signUpUser.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(signUpUser.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true;
        });
    }
});



export default authSlice.reducer