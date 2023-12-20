import { Routes, Route } from "react-router-dom"

// PAGES
import Landing from "./pages/landing"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}