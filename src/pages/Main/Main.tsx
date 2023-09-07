import Results from "../../components/Results/Results";
import { booksApi } from "../../api/booksApi";
import { useCallback, useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import { Book } from "../Book/Book";
import "./Main.scss";
import Spinner from "../../UI/spinner/Spinner";

const Main = () => {
  // В book api ограничение на запрос - 40 элементов, при шаге в 30, дозагрузка уходит в ошибку
  const stepValue = 30;
  const [ booksTrigger, { data: books, error: booksError, isFetching: booksIsFetching } ] = booksApi.useLazyGetBooksQuery()
  const [ bookTrigger, { data: book, error, isFetching } ] = booksApi.useLazyGetBookQuery()
  const [indicator, setIndicator] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('relevance')
  const [step, setStep] = useState(stepValue)
  const [fetchInputData, setFetchInputData] = useState('')

  useEffect(() => {
    if (booksIsFetching) {
      setIndicator('books')
    }
    if (isFetching) {
      setIndicator('book')
    }
  }, [booksIsFetching, isFetching])
  useEffect(() => {
    if (fetchInputData.length > 0) {
      booksTrigger({
        request: fetchInputData,
        sort,
        step
      })
    }
  }, [step])
  const fetchData = useCallback((value: string) => {
    setFetchInputData(value)
    booksTrigger({
      request: value,
      sort,
      step
    })
  }, [booksTrigger, sort, step]);
  const increaceStep = () => {
    setStep(step => step + stepValue)
  }
  const getId = (id: string) => {
    bookTrigger(id)
  }
  if (booksError !== undefined) {
    console.log('Books loading error', booksError)
  }
  if (error !== undefined) {
    console.log('Book loading error', error);
  }

  return (
    <div className="main">
      <Search fetchData={fetchData} setCategory={setCategory} setSort={setSort}/>
      { (booksIsFetching || isFetching) && <Spinner style={{marginTop: '150px'}}/> }
      { (booksError || error) && <h2 className="main__error">Error. Please try again</h2> }
      { (indicator === 'books' && !booksIsFetching && booksError === undefined) && <Results data={books?.items} category={category} getId={getId} increaseStep={increaceStep}/>}
      { (indicator === 'book' && !isFetching && error === undefined) && <Book book={book}/>}
    </div>
  );
};

export default Main;
