import { createSlice } from "@reduxjs/toolkit";

export type Themes = 'light' | 'dark';
interface ThemesState {
  theme: Themes
}

const initialState: ThemesState = {
  theme: "dark"
}

export const planningAppSlice = createSlice( {
  name: "planningApp",
  initialState,
  reducers: {
    themeChanger: ( state ) =>
      {
        if ( state.theme === 'light' ) state.theme = 'dark';
        state.theme = 'light';
      }
    }
  }
)

export const { themeChanger } = planningAppSlice.actions;
export const planningApp = planningAppSlice.reducer;