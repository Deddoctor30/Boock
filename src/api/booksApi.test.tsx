import { renderHook, waitFor } from '@testing-library/react';
import {useGetBookQuery} from './booksApi'
import { store } from '../store/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';

function Wrapper(props: { children: ReactNode }) {
   return <Provider store={store}>{props.children}</Provider>;
 }

 beforeEach(() => {
   fetchMock.resetMocks();
 });

describe('useGetBookQuery', () => {
   const endpointName = 'getBook';
   const pass = process.env.REACT_APP_API_KEY;
   const bookId = "6_-eDwAAQBAJ";
   const data = {};
   beforeEach(() => {
      fetchMock.mockOnceIf(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${pass}`, () => 
         Promise.resolve({
            status: 200,
            body: JSON.stringify({ data }),
          })
      )
   })

   it('render book', async () => {
      const { result } = renderHook(() => useGetBookQuery(bookId), {
         wrapper: Wrapper,
       });

       expect(result.current).toMatchObject({
         status: 'pending',
         endpointName,
         isLoading: true,
         isSuccess: false,
         isError: false,
         isFetching: true,
       });
       
      await waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(fetchMock).toBeCalledTimes(1);

      expect(result.current).toMatchObject({
         status: 'fulfilled',
         endpointName,
         data,
         isLoading: false,
         isSuccess: true,
         isError: false,
         currentData: data,
         isFetching: false,
       });
   });

})
