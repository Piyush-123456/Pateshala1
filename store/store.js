import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './reducers/studentReducer'
import employeReducer from './reducers/employeReducer'

export const store = configureStore({
  reducer: {studentReducer,employeReducer},
})