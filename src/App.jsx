import { BrowserRouter, Routes, Route, Outlet, useNavigate, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useContext } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import useLocalStorage from 'use-local-storage'

import AuthContext from './contexts/AuthContext'
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
            <Nav.Link as={Link} to='/landing'>
              Music Todo
            </Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/history'>History</Nav.Link>
            <Nav.Link as={Link} to='/addTodo'>+ New Todo</Nav.Link>
            {/* if user want to log out, sets token to null and navigate the user to the login page */}
            {authContext.token === "1234" ?
              <Nav.Link onClick={(e) => {
                e.preventDefault();
                authContext.setToken(null);
                navigate('/landing');
              }}>Logout</Nav.Link> :
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
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
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function App() {

  return (
    <Providers>
      <Provider store={store}>
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
      </Provider>
    </Providers>
  )
}