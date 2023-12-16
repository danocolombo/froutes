import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    initializeSystem,
    setVersion,
    saveUser,
} from '@features/system/systemThunks';

interface SystemState {
    appName: string;
    isLoading: boolean;
}
export interface TmpUserType {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    id: string;
}
export interface RootState {
    froutes: SystemState;
    tmpUser: TmpUserType;
    version: string;
    isLoading: boolean;
}

const initialState: RootState = {
    froutes: {
        appName: 'Froutes',
        isLoading: true,
    },
    tmpUser: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        id: '',
    },
    version: '1.0.0',
    isLoading: true,
};

export const froutesSlice = createSlice({
    name: 'froutes',
    initialState,
    reducers: {
        getAppName: (state) => {
            return state.froutes.appName;
        },
        logout: (state) => {
            state.froutes = {
                appName: '',
                isLoading: false,
            };
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(initializeSystem.pending, (state) => {
                state.isLoading = true;
                state.froutes.isLoading = true;
            })
            .addCase(initializeSystem.fulfilled, (state, action) => {
                // Assuming action.payload is an object with the structure of froutesState
                state.froutes = action.payload;
                state.isLoading = false;
            })
            .addCase(initializeSystem.rejected, (state) => {
                state.isLoading = false;
                state.froutes.isLoading = false;
            })
            .addCase(saveUser.pending, (state) => {
                state.isLoading = true;
                state.froutes.isLoading = true;
            })
            .addCase(saveUser.fulfilled, (state, action) => {
                // Assuming action.payload is an object with the structure of froutesState
                const froutesUser = state.tmpUser;
                const newUserValues = { ...froutesUser, ...action.payload };
                state.tmpUser = newUserValues;
                state.isLoading = false;
                state.isLoading = false;
            })
            .addCase(saveUser.rejected, (state) => {
                state.isLoading = false;
                state.froutes.isLoading = false;
            })
            .addCase(setVersion.pending, (state) => {
                state.froutes.isLoading = true;
            })
            .addCase(setVersion.fulfilled, (state, action) => {
                // Assuming action.payload is a string
                const newVersion = action.payload;
                state.version = newVersion;
                state.isLoading = false;
            })
            .addCase(setVersion.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

// Action creators are generated for each case reducer function
export const { getAppName, logout } = froutesSlice.actions;

export default froutesSlice.reducer;
