import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import NoMatch from "./pages/NoMatch/NoMatch";
import './styles/_global.scss'
import { Book } from "./pages/Book/Book";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        {/* <Main/> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Book />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
