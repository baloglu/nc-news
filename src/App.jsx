import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from "./components/Nav"
import MainContainer from "./components/MainContainer"
import ArticleId from "./components/ArticleId"

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<MainContainer />} />
        <Route path="/articles/:article_id" element={<ArticleId />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
