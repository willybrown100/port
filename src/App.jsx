import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Hompage from "./pages/Hompage"
// import AboutPage from "./pages/AboutPage"
import { ToggleProvider } from "./toggleContext/ToggleContext"
import PageNotFound from "./components/PageNotFound"
import { Suspense, lazy } from "react"
import Loader from "./ui/Loader";
 
const Hompage = lazy(() => import("./pages/Hompage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function App() {
  return (
    <ToggleProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route index path="/" element={<Hompage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ToggleProvider>
  );
}

export default App

