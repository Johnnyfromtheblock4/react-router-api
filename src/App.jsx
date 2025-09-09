import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/Products";
import Defaultlayout from "./layouts/DefaultLayout";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Defaultlayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products">
              <Route index element={<Products />}></Route>
              <Route path=":id" element={<ProductDetail />}></Route> 
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;