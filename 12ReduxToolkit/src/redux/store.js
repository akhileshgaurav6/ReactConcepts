import { configureStore } from  '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})


// steps
// 1) create store
// 2) Wrap App component under Provider
// 3) create slie
// 4) regidter reducee in store                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  