import { FC, useEffect, useState } from "react"
import ResultItem from "../ResultItem/ResultItem"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Results.scss'
import { IBook } from "../../types/IBook";
import Button from "../../UI/button/Button";

interface ResultsProps {
  data: IBook[] | undefined
  category: string
  getId: (arg: string) => void
  increaseStep: () => void
}

const Results:FC<ResultsProps> = ({data, category, getId, increaseStep}) => {
  const [categodyData, setCategoryData] = useState<IBook[] | undefined>([])

  useEffect(() => {
    if (category === 'All') {
      setCategoryData(data)
    } else {
      setCategoryData(data?.filter(item => item?.volumeInfo?.categories?.at(0) === category))
    }
  }, [category, data])
  
  return (
    <div className="main__results results">
      <div className="results__total">Found {data?.length} results</div>
      <div style={{textAlign: 'center'}} className="results__body">
        <TransitionGroup className="book-list"  component={null} >
          { 
            categodyData?.map(item => 
              <CSSTransition classNames="book-item" timeout={500} key={item.id}>
                  <ResultItem data={item} id={item.id} getId={getId}/>
              </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <div className="results__button">
        <Button onClick={() => increaseStep()} style={{marginTop: '50px', textAlign: 'center'}}>Load more</Button>
      </div>
    </div>
  )
}

export default Results