import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import './App.css'

const Home = React.lazy(() => import("./pages/Home"));
const ScrollAnimation = React.lazy(() => import("./pages/scroll-animation"));
const CarouselAnimation = React.lazy(() => import("./pages/carousel-animation"));
const HorizontalVerticalCarousel = React.lazy(() => import("./pages/horizontal-vertical-carousel"));

export default function App() {
  return (
    <Suspense>
    {/* <Suspense fallback={<Loader />}> */}
      <BrowserRouter>
      <Routing/>
      </BrowserRouter>
    </Suspense>
  );
}
const Routing =() => {

  const location = useLocation();
  return <Routes location={location} key={location.pathname}>
  <Route path="/" element={<Home />} />
  <Route path="/scroll-animation" element={<ScrollAnimation />} />
  <Route path="/carousel-animation" element={<CarouselAnimation />} />
  <Route path="/horizontal-vertical-carousel" element={<HorizontalVerticalCarousel />} />
  <Route path="*" element={<Navigate to="/" />} />
</Routes>
}