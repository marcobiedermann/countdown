import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface SettingsState {
  language: string;
}

const initialState: SettingsState = {
  language: 'en',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

const selectLanguage = (state: RootState) => state.settings.language;

const {
  actions: { setLanguage },
  reducer,
} = settingsSlice;

export { selectLanguage, setLanguage };
export default reducer;
