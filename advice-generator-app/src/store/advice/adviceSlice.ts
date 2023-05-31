import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { AdviceType, InitialStateType } from '../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAdvice = createAsyncThunk<
  AdviceType,
  undefined,
  { rejectValue: string }
>('advice/getAdvice', async function (_, { rejectWithValue }) {
  try {
    const responce = await fetch('https://api.adviceslip.com/advice');
    const data = await responce.json();
    return data.slip;
  } catch {
    rejectWithValue('Error fetching advice!!!');
  }
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

const initialState: InitialStateType = {
  id: null,
  advice: '',
};

const adviceSlice = createSlice({
  name: 'advice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdvice.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.advice = action.payload.advice;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.advice = action.payload;
        state.id = 0;
      });
  },
});

export const adviceReducer = adviceSlice.reducer;
