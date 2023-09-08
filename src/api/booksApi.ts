import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBooks } from '../types/IBooks'
import { IBook } from '../types/IBook'
export const booksApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `https://www.googleapis.com/books/v1` }),
  tagTypes: ['books', 'book'],
  endpoints: builder => ({
    getBooks: builder.query<IBooks, object>({
      query: ({request, sort, step}: {request: string, sort: string, step: number}) => `/volumes?q=${request}&download=epub&maxResults=${step}&orderBy=${sort}&key=${process.env.REACT_APP_API_KEY}`,
      providesTags: ['books']
    }),
    getBook: builder.query<IBook, string | undefined>({
      query: bookId => `/volumes/${bookId}?key=${process.env.REACT_APP_API_KEY}`,
      providesTags: ['book']
    })
  })
})

export const {useLazyGetBookQuery, useLazyGetBooksQuery, useGetBookQuery} = booksApi