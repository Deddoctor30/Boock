// import Input from "../../UI/inputs/searchInput/Input";
// import Filters from "../../components/Filters/Filters";
import Results from "../../components/Results/Results";
// import { booksApi } from "../../api/booksApi";
// import { useState } from "react";
import "./Main.scss";
const Main = () => {
  // const [ trigger, { data: books, error, isLoading } ] = booksApi.useLazyGetBooksQuery()
  // const [category, setCategory] = useState('All')
  // const [sort, setSort] = useState('relevance')
  // const fetchData = (value: string) => {
  //   trigger({
  //     request: value, 
  //     sort
  //   })
  // };

  return (
    <div className="main">
      {/* <div className="main__controls">
        <h1 className="main__title">Search for books</h1>
        <div className="main__search">
          <Input
            getData={fetchData}
            type="text"
            width="450"
            height="40"
          ></Input>
        </div>
        <Filters setCategory={setCategory} setSort={setSort}/>
        <div className="main__background"></div>
      </div> */}

      {/* { isLoading && <h1>Идет загрузка...</h1> }
      { error && <h1>Произошла ошибка</h1> } */}
      <Results data={books?.items} category={category}/>
    </div>
  );
};

export default Main;
