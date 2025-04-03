// src/slices/languageSlice.js

import {
    createSlice
} from '@reduxjs/toolkit'
import i18n from '../../i18n'

const initialState = {
    currentLang: localStorage.getItem('lang') || 'en',
    pendingLang: null, // store the lang we're transitioning to
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        // Step 1: store the lang to switch to
        setPendingLanguage: (state, action) => {
            state.pendingLang = action.payload
        },

        // Step 2: apply the real language switch after animation
        setLanguage: (state, action) => {
            state.currentLang = action.payload
            state.pendingLang = null

            i18n.changeLanguage(action.payload)
            localStorage.setItem('lang', action.payload)
            document.documentElement.setAttribute('lang', action.payload)

            document.documentElement.setAttribute('dir', action.payload === 'ar' ? 'rtl' : 'ltr')
        },
    },
})

export const {
    setLanguage,
    setPendingLanguage
} = languageSlice.actions
export default languageSlice.reducer