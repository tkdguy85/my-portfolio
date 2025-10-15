import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home"
import { NotFound } from "@/pages/NotFound"

// Use Vite's BASE_URL so the router respects the configured base (useful for GitHub Pages)
const basename = import.meta.env.BASE_URL || "/"

function App() {
  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route index element={<Home />} />
          {/* Default not found route for all unknown paths */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
