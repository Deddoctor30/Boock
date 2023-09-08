import { FC } from "react"
import { IBook } from "../../types/IBook"
import './Book.scss';

interface BookProps {
   book: IBook | undefined
}

export const Book:FC<BookProps> = ({book}) => {
   
  return (
    <div className="book">
      <div className="book__body">
         <div className="book__image">
            <div className="book__wrapper"><img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={book?.volumeInfo.title} /></div>
         </div>
         <div className="book__description">
            <div className="book__categories">{book?.volumeInfo?.categories?.map(item => 
               <p key={item} className="book__category">{item}</p>   
            )}</div>
            <div className="book__name">{book?.volumeInfo?.title}</div>
            <div className="book__authors">{book?.volumeInfo?.authors?.map(item =>
               <p key={item} className="book__author">{item}</p>
            )}</div>
            <div className="book__text">{book?.volumeInfo?.description}</div>
         </div>
      </div>
    </div>
  )
}
