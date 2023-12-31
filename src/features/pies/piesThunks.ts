import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount, getDefaultValue } from './piesAPI';
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementPiesAsync = createAsyncThunk(
    'pies/fetchCount',
    async (amount: number) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);
export const resetPiesInventory = createAsyncThunk(
    'pies/getDefaultValue',
    async (amount: number) => {
        const response = await getDefaultValue();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);
