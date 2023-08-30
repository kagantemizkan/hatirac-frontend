import { Route, Routes } from "react-router-dom";
import ShowFiles from './pages/ShowFiles';
import ShowFilesWithId from "./pages/ShowFilesWithId";
import FileUploader from "./pages/FileUploader";
import '../styles/app.css'
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<FileUploader />} />
        <Route path='/show' element={<ShowFiles />} />
        <Route path='/show/:id' element={<ShowFilesWithId />} />
      </Routes>
    </>
  );
}

export default App;
