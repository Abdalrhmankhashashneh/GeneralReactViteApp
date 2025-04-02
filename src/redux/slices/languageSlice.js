// src/slices/languageSlice.js
import {
    createSlice
} from '@reduxjs/toolkit'
import i18n from '../../i18n'

const initialState = {
    currentLang: localStorage.getItem('lang') || 'en',
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.currentLang = action.payload
            i18n.changeLanguage(action.payload)
            localStorage.setItem('lang', action.payload)
            document.documentElement.setAttribute('lang', action.payload);
            if (action.payload === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
            }
        },
    },
})

export const {
    setLanguage
} = languageSlice.actions
export default languageSlice.reducer