import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import froutesReducer from '@features/system/systemSlice';

export const store = configureStore({
    reducer: {
        froutes: froutesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
