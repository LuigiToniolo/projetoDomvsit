import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import carregarVagas  from './carreirasApi';

const initialState = {
  vagas: [],
  numeroDeVagas: 0,
  opcoesDeFiltro: {},
  loading: false
};

export const carregarVagasDaAPI = createAsyncThunk(
  'vagas/carregarVagas',
  async () => {
    const response = await carregarVagas();
    return response.data;
  }
);

export const vagasSlice = createSlice({
  name: 'vagas',
  initialState,
  reducers: {
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(carregarVagasDaAPI.pending, (state) => {
        state.loading = true;
        state.opcoesDeFiltro = {};
      })
      .addCase(carregarVagasDaAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload;
        state.vagas = action.payload.results;
        state.numeroDeVagas= action.payload.count;
        state.opcoesDeFiltro = action.payload.filters
        state.currentPage = action.payload.currentPage;
      });
  },
});
export const { } = vagasSlice.actions;
export const vagasState = (state) => state;
export default vagasSlice.reducer;
