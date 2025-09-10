import { Container, Row, Col } from 'react-bootstrap'
import { useContext } from 'react'
import TodoContext from '../contexts/TodoContext'
import Item from './Item'

export default function RecentItems() {
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
        </Container>
    )
}