import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formData: {
    name: string;
    email: string;
  };
}

const initialState: FormState = {
  formData: {
    name: '',
    email: '',
  },
};


const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      updateFormData: (state, action: PayloadAction<{ field: string; value: string }>) => {
        // Utilizando immer para garantir a atualização do estado de forma imutável
        state.formData = { ...state.formData, [action.payload.field]: action.payload.value };
      },
      resetFormData: (state) => {
        state.formData = initialState.formData;
      },
    },
  });

export const { updateFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
