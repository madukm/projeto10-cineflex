import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

export default function App() {
   
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
            <Route path="/assentos/:idSessao" element={<SeatsPage /> } />
            <Route path="/sucesso" element={<SuccessPage />} />
        </Routes>
        </BrowserRouter>
    )
}

