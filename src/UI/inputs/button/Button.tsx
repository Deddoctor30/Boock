import { FC } from "react";
import './Button.scss';

interface ButtonProps {
   children: React.ReactNode
}

const Button:FC<ButtonProps> = ({children}) => {
  return (
    <button className="ibutton">
      {children}
    </button>
  )
}

export default Button