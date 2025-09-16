import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { editTodo } from '../slices/todoSlice'

export default function EditTodo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todo);

    const id = parseInt(useParams().id);
    const todo = todos.find((todo) => todo.id === id);

    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [duration, setDuration] = useState(todo.duration);
    const [reminder, setReminder] = useState(todo.reminder);
    const [deadline, setDeadline] = useState(todo.deadline);
    const [complete, setComplete] = useState(todo.complete);

    const editTodoItem = (e) => {
        e.preventDefault();
        const replacementItem = {
            id,
            title,
            description,
            reminder,
            deadline,
            complete,
            duration,
        }
        dispatch(editTodo({ id: todo.id, item: replacementItem }));
        navigate('/home');
    }

    return (
        <Container>
            <Form onSubmit={editTodoItem}>
                <Form.Group controlId="title" className="mt-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder={todo.title}
                    />
                </Form.Group>

                <Form.Group controlId="description" className="mt-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        as="textarea"
                        rows={4}
                        placeholder={todo.description}
                    />
                </Form.Group>

                <Form.Group controlId="duration" className="mt-3">
                    <Form.Label>Duration (hours)</Form.Label>
                    <Form.Control
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                        min={1}
                        type="number"
                        required
                    />
                </Form.Group>

                <Form.Check
                    className="mt-3"
                    checked={reminder}
                    onChange={e => setReminder(e.target.checked)}
                    label='Set Reminder'
                />
                {reminder && (
                    <Form.Group controlId="deadline" className="mt-3">
                        <Form.Label>Deadline</Form.Label>
                        <br />
                        <DatePicker
                            selected={deadline}
                            onChange={date => setDeadline(date)}
                            className='form-control'
                            dateFormat='MM/dd/yyyy'
                            placeholder='Pick a date'
                            required
                        />
                    </Form.Group>
                )}

                <Form.Check
                    className="mt-3"
                    checked={complete}
                    onChange={e => setComplete(e.target.checked)}
                    label='Mark as Completed'
                />

                <Button variant="primary" bg="light" className="mt-3" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}