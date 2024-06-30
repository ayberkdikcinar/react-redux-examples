AsyncThunks will have .pending, .fullfilled, .rejected

asyncthunks should be listening by the slice extraReducers...

action.payload will include the data that is returned from asyncThunk function.
action.error will include the error that is automatically catched as error from asyncThunk function.
