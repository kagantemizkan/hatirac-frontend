import { Route, Routes } from "react-router-dom";
import ShowFiles from './pages/ShowFiles';
import ShowFilesWithId from "./pages/ShowFilesWithId";
import FileUploader from "./pages/FileUploader";
import '../styles/app.css'
import Home from "./pages/Home";
import { Helmet } from 'react-helmet';
import Logo from '../images/logo.png'
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import Products from "./pages/Products";
import FreeVersion from "./pages/FreeVersion";
import FileUploaderPaid from "./pages/FileUploaderPaid";
import FizikselPayment from "./pages/FizikselPayment";
import Paraiade from "./Sozlesmeler/Paraiade";
import GizlilikPolitikasi from "./Sozlesmeler/GizlilikPolitikasi";
import HizmetSartlari from "./Sozlesmeler/HizmetSartlari";
import KvkkPolitikasi from "./Sozlesmeler/KvkkPolitikasi";
import KargoPolitikasi from "./Sozlesmeler/KargoPolitikasi";
import SatınAlmaBasarili from "./pages/SatınAlmaBasarili";

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href={Logo} />
      </Helmet>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<FileUploader />} />
        <Route path='/upload-paid' element={<FileUploaderPaid />} />
        <Route path='/show' element={<ShowFiles />} />
        <Route path='/show/:id' element={<ShowFilesWithId />} />
        <Route path='/monte' element={<Admin />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/free' element={<FreeVersion />} />
        <Route path='/fiziksel-payment' element={<FizikselPayment />} />
        <Route path='/para-iade' element={<Paraiade />} />
        <Route path='/gizlilik-politikasi' element={<GizlilikPolitikasi />} />
        <Route path='/hizmet-sartlari' element={<HizmetSartlari />} />
        <Route path='/kvkk-politikasi' element={<KvkkPolitikasi />} />
        <Route path='/kargo-politikasi' element={<KargoPolitikasi />} />
        <Route path='/satinalma-basarili' element={<SatınAlmaBasarili />} />
      </Routes>
    </>
  );
}

export default App;
