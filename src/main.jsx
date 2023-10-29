import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Todos from './components/Todos.jsx'
import Album from './components/Album.jsx'
import Posts from './components/Posts.jsx'
import TodoDetail from './components/TodoDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="todo" element={<Todos />} />
                <Route path="album" element={<Album />} />
                <Route path="post" element={<Posts />} />
            </Route>
            <Route path="todo/:id" element={<TodoDetail />} />
        </Routes>
    </BrowserRouter>
)
