import { FC, forwardRef, memo } from "react";
import './Button.scss';

interface ButtonProps {
   children: React.ReactNode
   style?: {}
   onClick: () => void
}

const Button:FC<ButtonProps> = ({children, style, onClick}) => {
  return (
    <button onClick={onClick} style={style} className="ibutton">
      {children}
    </button>
  )
};

export default Button