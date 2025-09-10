import { Container, Card, Badge, Button } from 'react-bootstrap'
import { useContext } from 'react'
import TodoContext from '../contexts/TodoContext'

export default function Item({ todo }) {
    const color = todo.complete ? 'success' : 'danger';
    const deadline = new Date(todo.deadline);

    const todos = useContext(TodoContext).todos;
    const setTodos = useContext(TodoContext).setTodos;

    //complete -> incomplete, incomplete -> complete
    const changeStatus = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, complete: !todo.complete } : todo;
        }))
    }

    //delete todo item
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
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
                            <Button className="btn-sm m-1" onClick={() => changeStatus(todo.id)}>
                                <i className='bi bi-check-lg'></i>
                            </Button>
                            <Button className="btn-sm m-1">
                                <i className='bi bi-pencil-fill'></i>
                            </Button>
                        </>
                    ) : (
                        <Button className="btn-sm m-1" onClick={() => changeStatus(todo.id)}>
                            <i className='bi bi-arrow-clockwise'></i>
                        </Button>
                    )}
                    <Button variant="danger" className="btn-sm m-1" onClick={() => deleteTodo(todo.id)}>
                        <i className='bi bi-trash-fill'></i>
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    )
}