import { FC } from "react"
import { IBook } from "../../types/IBook"
import { useNavigate } from 'react-router-dom'
import './ResultItem.scss'

interface ResultItemProps {
   data: IBook
   id: string
 }
const ResultItem:FC<ResultItemProps> = ({data, id}) => {
   const navigate = useNavigate()
   const bookLoader = () => {
      navigate(`/${id}`);
   }
  return (
      <div className="results__item item" onClick={bookLoader}>
         <div className="item__thumb">
            <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title} />
         </div>
         <div className="item__description">
            <div className="item__category">
               <p>
                  { Array.isArray(data.volumeInfo.categories) 
                     ?
                        data.volumeInfo.categories[0] 
                     :
                        data.volumeInfo.categories
                  }
               </p>
            </div>
            <div className="item__title">
               <h2>{data.volumeInfo.title}</h2>
            </div>
            <div className="item__author">
               {  Array.isArray(data.volumeInfo.authors) 
                  ?
                     data.volumeInfo.authors.map((item, i) => <p key={i}>{item}</p>)  
                  :
                     <p>{data.volumeInfo.authors}</p>
               }
            </div>
         </div>
      </div>
  )
}

export default ResultItem