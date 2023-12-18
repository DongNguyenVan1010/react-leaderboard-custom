import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import App from './page/App';
import Login from './page/Login';
import Todos from './components/Todos.jsx'
import Album from './components/Album.jsx'
import Posts from './components/Posts.jsx'
import TodoDetail from './components/TodoDetail.jsx'

// routes
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PrivateRoute><App /></PrivateRoute>}>
                <Route path="todo" element={<Todos />} />
                <Route path="album" element={<Album />} />
                <Route path="post" element={<Posts />} />
            </Route>
            <Route path="todo/:id" element={<PrivateRoute><TodoDetail /></PrivateRoute>} />
            <Route path="login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="about" element={<div>about</div>} />
        </Routes>
    </BrowserRouter>
)
