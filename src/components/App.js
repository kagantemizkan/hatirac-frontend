import { Route, Routes } from "react-router-dom";
import ShowFiles from './pages/ShowFiles';
import ShowFilesWithId from "./pages/ShowFilesWithId";
import FileUploader from "./pages/FileUploader";
import '../styles/app.css'
import Home from "./pages/Home";
import { Helmet } from 'react-helmet';
import Logo from '../images/logo.png'
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href={Logo} />
      </Helmet>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<FileUploader />} />
        <Route path='/show' element={<ShowFiles />} />
        <Route path='/show/:id' element={<ShowFilesWithId />} />
        <Route path='/monte' element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
