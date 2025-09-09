import { Container, Form, Button } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // const token = useContext(AuthContext).token;
    const setToken = useContext(AuthContext).setToken;

    const login = () => {
        const correctUsername = username === 'SummerSnow'
        const correctPassword = password === '123456'
        if (correctUsername && correctPassword) {
            setToken("1234");
            navigate('/home');
        }
    }

    return (
        <>
            <Container className="mt-3">
                <Form onSubmit={login}>
                    <Form.Group controlId="username" className="mt-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            value={username}
                            type="text"
                            placeholder="Enter name"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="password" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            value={password}
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button className="mt-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}