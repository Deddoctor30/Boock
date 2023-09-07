import { Link } from "react-router-dom"
import './NoMatch.scss';
import Button from "../../UI/inputs/button/Button";

const NoMatch = () => {
  return (
    <div className="nomatch">
      <h1 className="nomatch__title">Oops... This page doesn't exist</h1>
      <Link to={`/`}><Button>Back to Main page</Button></Link>
    </div>
  )
}

export default NoMatch