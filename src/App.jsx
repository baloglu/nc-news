import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from "./components/Nav"
import MainContainer from "./components/MainContainer"
import SingleArticle from "./components/SingleArticle"

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<MainContainer />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
