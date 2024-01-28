"use client"
import { createContext, useContext, useReducer } from 'react';

const initialState = {
    bookName:'Genesis',
    chapters:50
};
export const BookContext = createContext();

// Create the reducer function
const bookReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_SELECTED_BOOK':
        return { ...state, bookName: action.payload, chapters: action.chapter};
      // Add other cases as needed
      default:
        return state;
    }
  };
  // Create the provider component
export const BookProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bookReducer, initialState);
  
    return (
      <BookContext.Provider value={{ state, dispatch }}>
        {children}
      </BookContext.Provider>
    );
  };

  export const useBookContext = ()=> useContext(BookContext)