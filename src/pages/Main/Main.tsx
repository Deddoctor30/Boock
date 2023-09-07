import Results from "../../components/Results/Results";
import { booksApi } from "../../api/booksApi";
import { useState } from "react";
import Search from "../../components/Search/Search";
import "./Main.scss";

const Main = () => {
  const [ trigger, { data: books, error, isLoading } ] = booksApi.useLazyGetBooksQuery()
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('relevance')
  
  const fetchData = (value: string) => {
    trigger({
      request: value, 
      sort
    })
  };

  return (
    <div className="main">
      <Search fetchData={fetchData} setCategory={setCategory} setSort={setSort}/>
      { isLoading && <h1>Идет загрузка...</h1> }
      { error && <h1>Произошла ошибка</h1> }
      <Results data={books?.items} category={category}/>
    </div>
  );
};

export default Main;
