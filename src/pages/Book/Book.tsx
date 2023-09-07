import { FC, useState } from "react"
import { IBook } from "../../types/IBook"
import { booksApi } from "../../api/booksApi"
import Search from "../../components/Search/Search"
import { Link, useParams } from "react-router-dom";
import './Book.scss';

interface BookProps {
   // data: IBook
}

export const Book:FC<BookProps> = () => {
   const params = useParams();
   // const [ trigger, { data: books, error, isLoading } ] = booksApi.useLazyGetBooksQuery()
   const { data: book, error, isLoading } = booksApi.useGetBookQuery(params.id)
   const [category, setCategory] = useState('All')
   const [sort, setSort] = useState('relevance')
   console.log(book);
   
   const fetchData = (value: string) => {
   //   trigger({
   //     request: value, 
   //     sort
   //   })
   };
  return (
    <div className="book">
      <Link to='/'>Back to list</Link>
      <Search fetchData={fetchData} setCategory={setCategory} setSort={setSort}/>
      { isLoading && <h1>Идет загрузка...</h1> }
      { error && <h1>Произошла ошибка</h1> }
      <div className="book__body">
         <div className="book__image">
            <div className="book__wrapper"><img src={book?.volumeInfo.imageLinks.thumbnail} alt={book?.volumeInfo.title} /></div>
         </div>
         <div className="book__description">
            <div className="book__categories">{book?.volumeInfo.categories.map(item => 
               <p className="book__category">{item}</p>   
            )}</div>
            <div className="book__name">{book?.volumeInfo.title}</div>
            <div className="book__authors">{book?.volumeInfo.authors.map(item =>
               <p className="book__author">{item}</p>
            )}</div>
            <div className="book__text">{book?.volumeInfo.description}</div>
         </div>
      </div>
    </div>
  )
}
