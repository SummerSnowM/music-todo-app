import { Container, Card, Badge, Button } from 'react-bootstrap'
import { deleteTodo, changeStatus } from '../slices/todoSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';


export default function Item({ todo }) {
    const color = todo.complete ? 'success' : 'danger';
    const deadline = new Date(todo.deadline);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //complete -> incomplete, incomplete -> complete
    const changeCompletionStatus = (id) => {
        dispatch(changeStatus(id))
    }

    //delete todo item
    const deleteTodoItem = (id) => {
        dispatch(deleteTodo(id));

    }

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    {todo.reminder && (
                        <Card.Text><strong>Deadline: </strong>{deadline.toLocaleDateString()}</Card.Text>
                    )}
                    <Badge pill bg={color} style={{ width: '100px' }}>{!todo.complete && 'Not'} Completed</Badge>

                    {!todo.complete ? (
                        <>
                            <Button className="btn-sm m-1" onClick={() => changeCompletionStatus(todo.id)}>
                                <i className='bi bi-check-lg'></i>
                            </Button>
                            <Button className="btn-sm m-1" onClick={() => navigate(`/editTodo/${todo.id}`)}>
                                <i className='bi bi-pencil-fill'></i>
                            </Button>
                        </>
                    ) : (
                        <Button className="btn-sm m-1" onClick={() => changeCompletionStatus(todo.id)}>
                            <i className='bi bi-arrow-clockwise'></i>
                        </Button>
                    )}
                    <Button variant="danger" className="btn-sm m-1" onClick={() => deleteTodoItem(todo.id)}>
                        <i className='bi bi-trash-fill'></i>
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    )
}