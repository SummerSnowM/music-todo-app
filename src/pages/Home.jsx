import { Container, Row, Col } from 'react-bootstrap'
import TodoContext from '../contexts/TodoContext'
import { useContext } from 'react'
import Item from '../components/Item'

export default function Home() {
    const todos = useContext(TodoContext).todos;
    const recentTodos = todos.slice(-4);

    return (
        <Container className="mt-4">
            <h2>Recently Added</h2>
            <Row md={12} className="mt-3">
                {recentTodos.map((todo, index) => {
                    return (
                        <Col key={index} md={3}>
                            <Item todo={todo} />
                        </Col>
                    )
                })}
            </Row>

            <h2>Pending tasks</h2>
            <Row md={1}>
                {todos.map((todo) => {
                    return !todo.complete && (
                        <Col className="mt-3">
                            <Item todo={todo} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}