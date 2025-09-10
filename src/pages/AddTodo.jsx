import 'react-datepicker/dist/react-datepicker.css';
import { Container, Form, Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import { useState, useContext } from 'react'
import TodoContext from '../contexts/TodoContext'

export default function AddTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState(null);
    const [reminder, setReminder] = useState(false);

    const setTodos = useContext(TodoContext).setTodos;
    const todos = useContext(TodoContext).todos;


    const addTodo = () => {
        const newTodo = {
            id: Date.now(),
            title,
            description,
            reminder,
            deadline,
        }

        setTodos(...todos, newTodo);
    }

    return (
        <Container className="mt-3">
            <Form onSubmit={addTodo}>
                <Form.Group controlId="title" className="mt-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Attend violin class"
                        type="text"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="description" className="mt-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={`1. Review previous lessons\n2. Complete workbook\n3. Consult tutor`}
                        as="textarea"
                        rows={4}
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

                <Button variant="primary" bg="light" className="mt-3" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}