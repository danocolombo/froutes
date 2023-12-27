import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '@/store';
import { fetchCount, getDefaultValue } from './cakesAPI';

export interface CakesState {
    inventory: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CakesState = {
    inventory: 10,
    status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementCakesAsync = createAsyncThunk(
    'cakes/fetchCount',
    async (amount: number) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);
export const resetCakesInventory = createAsyncThunk(
    'cakes/getDefaultValue',
    async (amount: number) => {
        const response = await getDefaultValue();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const cakesSlice = createSlice({
    name: 'cakes',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        incrementCakes: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.inventory += 1;
        },
        decrementCakes: (state) => {
            state.inventory -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementCakesByAmount: (state, action: PayloadAction<number>) => {
            state.inventory += action.payload;
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(incrementCakesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementCakesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.inventory += action.payload;
            })
            .addCase(incrementCakesAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(resetCakesInventory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(resetCakesInventory.fulfilled, (state, action) => {
                state.status = 'idle';
                state.inventory = action.payload;
            })
            .addCase(resetCakesInventory.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { incrementCakes, decrementCakes, incrementCakesByAmount } =
    cakesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getCakeInventory = (state: RootState) => state.cakes.inventory;
export const getCakesState = (state: RootState) => state.cakes;
export const getCakesStatus = (state: RootState) => state.cakes.status;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementCakesIfOdd =
    (amount: number): AppThunk =>
    (dispatch, getState) => {
        const currentValue = getCakesState(getState());
        if (currentValue.inventory % 2 === 1) {
            dispatch(incrementCakesByAmount(amount));
        }
    };

export default cakesSlice.reducer;