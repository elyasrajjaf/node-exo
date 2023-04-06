import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import SingUp from "./pages/SignUp"

export default function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SingUp />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}