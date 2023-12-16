import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@features/system/systemSlice';

interface InputsType {
    // Define the type for your inputs
}

export const initializeSystem = createAsyncThunk<
    void,
    InputsType,
    { state: RootState }
>('froutes/initializeSystem', async (inputs, thunkAPI) => {
    try {
        // Your async logic here
        return inputs;
    } catch (error) {
        // Rethrow the error to let createAsyncThunk handle it
        throw new Error('ST:18-->Failed to initializeSystem thunk');
    }
});
export const saveUser = createAsyncThunk<
    void,
    InputsType,
    { state: RootState }
>('froutes/saveUser', async (inputs, thunkAPI) => {
    try {
        // Your async logic here
        return inputs;
    } catch (error) {
        // Rethrow the error to let createAsyncThunk handle it
        throw new Error('BT:31-->Failed to saveUser thunk');
    }
});

export const setVersion = createAsyncThunk<
    void,
    InputsType,
    { state: RootState }
>('froutes/setVersion', async (inputs, thunkAPI) => {
    try {
        // Your async logic here
        return inputs;
    } catch (error) {
        // Rethrow the error to let createAsyncThunk handle it
        throw new Error('BT:45-->Failed to setVersion thunk');
    }
});
