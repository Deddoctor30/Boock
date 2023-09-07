import { Dispatch, FC, memo } from "react"
import './Select.scss'
interface SelectProps {
   setData: Dispatch<React.SetStateAction<string>>
   label: string
   options: {
      value: string
      label: string
   }[]
   width?: string
   height?: string
   sx?: object
}
const Select:FC<SelectProps> = memo(({setData, label, options, width, height, sx}) => {
   const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setData(e.target.value)
   }
   return (
      <div className="iselect-wrapper">
         <label className="select-label">{label}</label>
         <select style={{width: `${width}px`, height: `${height}px`, ...sx}} className="iselect" onChange={changeHandler}>
            {options.map(item =>
               <option style={{width: `${width}px`, height: `${height}px`, ...sx}} key={item.value} value={item.value}>{item.label}</option>
            )}
         </select>
      </div>
   )
 })
 
 export default Select