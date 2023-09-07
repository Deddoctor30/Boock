import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import NoMatch from "./pages/NoMatch";
import './styles/_global.scss'
import Layout from "./components/Layout";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Main />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
