import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../src/components/Loader/Loader";
import Home from "../src/pages/Home";
import Kids from "../src/pages/Kids";
import Mens from "../src/pages/Mens";
import Sale from "../src/pages/Sale";
import Login from "./components/loginPage/Login";
import ProductCart from "./components/products/ProductCart";
import About from "./pages/About";
import CartBasket from "./pages/CartBasket";
import CartFavourite from "./pages/CartFavoutite";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import New from "./pages/New";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/new"
          element={
            <Suspense fallback={<Loader />}>
              <New />
            </Suspense>
          }
        />
        <Route
          path="/kids"
          element={
            <Suspense fallback={<Loader />}>
              <Kids />
            </Suspense>
          }
        />
        <Route
          path="/sale"
          element={
            <Suspense fallback={<Loader />}>
              <Sale />
            </Suspense>
          }
        />
        <Route
          path="/men"
          element={
            <Suspense fallback={<Loader />}>
              <Mens />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/help"
          element={
            <Suspense fallback={<Loader />}>
              <Help />
            </Suspense>
          }
        />
        <Route
          path="/basket"
          element={
            <Suspense fallback={<Loader />}>
              <CartBasket />
            </Suspense>
          }
        />
        <Route
          path="/favourite"
          element={
            <Suspense fallback={<Loader />}>
              <CartFavourite />
            </Suspense>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ProductCart />
            </Suspense>
          }
        />
          <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
