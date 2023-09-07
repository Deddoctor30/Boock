import { FC } from 'react';
import './Spinner.scss';

interface SpinnerProps {
   style: {}
}

const Spinner:FC<SpinnerProps> = ({style}) => {
  return (
   <div style={style} className="spinner-container">
      <div className="loading-spinner"></div>
 </div>
  )
}

export default Spinner