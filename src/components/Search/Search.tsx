import { Dispatch, FC } from "react";
import Input from "../../UI/inputs/searchInput/Input";
import Filters from "../../components/Filters/Filters";
import './Search.scss';

interface SearchProps {
   fetchData: (arg0: string) => void
   setCategory: Dispatch<React.SetStateAction<string>>
   setSort: Dispatch<React.SetStateAction<string>>
}

const Search:FC<SearchProps> = ({fetchData, setCategory, setSort}) => {
  return (
   <div className="main__search search">
      <h1 className="search__title">Search for books</h1>
      <div className="search__searches">
         <Input
            getData={fetchData}
            type="text"
            width="450"
            height="40"
         />
      </div>
      <Filters setCategory={setCategory} setSort={setSort}/>
      <div className="search__background"></div>
   </div>
  )
}

export default Search