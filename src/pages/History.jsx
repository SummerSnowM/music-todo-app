import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Item from '../components/Item'

export default function History() {
    const todos = useSelector((state) => state.todo);

    return (
        <Container className="mt-4">
            <h2 className="mt-4">Todo History</h2>
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