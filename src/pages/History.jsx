import { Container, Row, Col } from 'react-bootstrap'
import { useContext } from 'react'
import TodoContext from '../contexts/TodoContext'
import Item from '../components/Item'

export default function History() {
    const todos = useContext(TodoContext).todos;

    return (
        <Container className="mt-4">
            <Row md={1}>
                {todos.map((todo, index) => {
                    return (
                        <>
                            <Col key={index} className="mt-3">
                                <Item todo={todo} />
                            </Col>
                        </>
                    )
                })}
            </Row>
        </Container>
    )
}