import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { Container, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todoSlice'

export default function AddTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [deadline, setDeadline] = useState(null);
    const [reminder, setReminder] = useState(false);
    const [complete, setComplete] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addNewTodo = (e) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            title,
            description,
            reminder,
            deadline,
            complete,
            duration,
        }
        dispatch(addTodo(newItem));
        navigate('/home');
    }
    
    return (
        <Container className="mt-3">
            <Form onSubmit={addNewTodo}>
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

                <Form.Group controlId="duration" className="mt-3">
                    <Form.Label>Duration</Form.Label>
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