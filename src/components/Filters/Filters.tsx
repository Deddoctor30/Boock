import { Dispatch, FC, memo } from "react"
import Select from "../../UI/inputs/select/Select"
import { categoryOptions, sortOptions } from "./selectOptions"
import './Filters.scss'
interface FilrersProps {
  setCategory: Dispatch<React.SetStateAction<string>>
  setSort: Dispatch<React.SetStateAction<string>>
}
const Filters:FC<FilrersProps> = memo(({setCategory, setSort}) => {
  return (
    <div className="main__filters filters">
      <Select setData={setCategory} label="Categories" width="170" height="30" options={categoryOptions}/>
      <Select setData={setSort} label="Sorting by" width="170" height="30" options={sortOptions}/>
    </div>
  )
})

export default Filters