import { FC, useState } from 'react'
import './Input.scss'
interface InputProps {
   getData: (arg0: string) => void
   type?: string
   width?: string
   height?: string
   sx?: object
}
const Input:FC<InputProps> = ({getData, type = 'text', width, height, sx}) => {
   const [value, setValue] = useState('')
   const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
   }
   const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getData(value.replaceAll(/\s+/g, '+'))
   }
  return (
   <form className='iform' onSubmit={onFormSubmit}>
      <input 
         style={{width: `${width}px`, height: `${height}px`, ...sx}} 
         type={type} 
         id="searchInput" 
         className="iinput" 
         onChange={inputHandler}
         />
      <button 
         style={{width: `${height}px`, height: `${height}px`}} 
         className='isearch-button'
      ></button>
   </form>
  )
}

export default Input