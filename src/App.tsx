import { Route, Routes } from 'react-router-dom'
import { Team } from './pages/Team/Team'
import { Rates } from './pages/Rates/Rates'
import { AboutUs } from './pages/AboutUs/AboutUs'
import { News } from './pages/News/News'
import { Contact } from './pages/Contact/Contact'
import { MainLayout } from './layouts/MainLayout/MainLayout'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Team />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default App
