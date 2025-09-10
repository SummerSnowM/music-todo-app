import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useContext } from 'react'
import useLocalStorage from 'use-local-storage'

import AuthContext from './contexts/AuthContext'
import TodoContext from './contexts/TodoContext'
import RequireAuth from './components/RequireAuth'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Landing from './pages/Landing'
import AddTodo from './pages/AddTodo'
import EditTodo from './pages/EditTodo'
import History from './pages/History'

function Layout() {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Nav.Link href='/landing'>
              Music Todo
            </Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/history'>History</Nav.Link>
            <Nav.Link href='/addTodo'>+ New Todo</Nav.Link>
            {/* if user want to log out, sets token to null and navigate the user to the login page */}
            {authContext.token === "1234" ?
              <Nav.Link onClick={(e) => {
                e.preventDefault();
                authContext.setToken(null);
                navigate('/landing');
              }}>Logout</Nav.Link> :
              <Nav.Link href='login'>Login</Nav.Link>
            }
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>

  )
}

function Providers({ children }) {
  const [token, setToken] = useLocalStorage("token", null);
  const [todos, setTodos] = useLocalStorage('todos', []);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <TodoContext.Provider value={{ todos, setTodos }}>
        {children}
      </TodoContext.Provider>
    </AuthContext.Provider>
  )
}

export default function App() {

  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='landing' element={<Landing />} />
            <Route path='login' element={<Login />} />
            <Route path='addTodo' element={<RequireAuth><AddTodo /></RequireAuth>} />
            <Route path='editTodo/:id' element={<RequireAuth><EditTodo /></RequireAuth>} />
            <Route path='history' element={<RequireAuth><History /></RequireAuth>} />
            <Route path='home' element={<RequireAuth><Home /></RequireAuth>} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  )
}