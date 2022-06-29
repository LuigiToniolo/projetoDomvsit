import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import {carregarVaga} from './carreirasApi';
const initialState = {
  vaga:{},
  loading: false
};
export const carregarVagaDaAPI = createAsyncThunk(
  'vaga/carregarVaga',
  async (id) => {//Recebe id e manda o id na função
    if (window.localStorage.getItem('vaga')["descricao"]) {
      const vaga = await JSON.parse(window.localStorage.getItem('vaga'));
      window.localStorage.clear();
      return vaga;
    }
    const response = await carregarVaga(id);
    return response.data;
  }
);
export const vagaSlice = createSlice({
  name: 'vaga',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(carregarVagaDaAPI.pending, (state) => {
        state.loading = true;
      })
      .addCase(carregarVagaDaAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.vaga = action.payload;
      });
  },
});
export const { } = vagaSlice.actions;
export const vagasState = (state) => state;
export const selectVagaReducer=createSelector(vagasState, (state)=>state.vaga)
export default vagaSlice.reducer;