import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBooks } from '../types/IBooks'
import { IBook } from '../types/IBook'
export const booksApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `https://www.googleapis.com/books/v1` }),
  endpoints: builder => ({
    getBooks: builder.query<IBooks, object>({
      query: ({request, sort}: {request: string, sort: string}) => `/volumes?q=${request}&download=epub&orderBy=${sort}&key=${process.env.REACT_APP_API_KEY}`
    }),
    getBook: builder.query<IBook, string | undefined>({
      query: bookId => `/volumes/${bookId}?key=${process.env.REACT_APP_API_KEY}`
    })
  })
})