import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Item from '../components/Item'
import Notification from '../components/Notification'

export default function Home() {
    const todos = useSelector((state) => state.todo);
    const recentTodos = todos.slice(-4);

    const [showReminder, setShowReminder] = useState(false)
    const [today, setToday] = useState(0);
    const [tomorrow, setTomorrow] = useState(0);
    const [overdue, setOverdue] = useState(0);

    const difference = (date1, date2) => {
        const start = date1 / (1000 * 60 * 60 * 24);
        const end = date2 / (1000 * 60 * 60 * 24);
        const days = Math.ceil(start - end);
        return days;
    }

    useEffect(() => {
        const urgentTodos = todos.filter((todo) => todo.deadline && difference(new Date(todo.deadline).getTime(), Date.now()) <= 1 && !todo.complete);

        //placeholders
        let a = 0, b = 0, c = 0;

        if (urgentTodos.length != 0) {
            for (const todo of urgentTodos) {
                const days = difference(new Date(todo.deadline).getTime(), Date.now());
                days === 1 ? a++ : days === 0 ? b++ : c++;
            }

            //set values
            setTomorrow(a);
            setToday(b)
            setOverdue(c);

            //show and disappear reminder box
            const reminder = setTimeout(() => {
                setShowReminder(true);
            }, 300);

            const closeReminder = setTimeout(() => {
                setShowReminder(false)
            }, 7000)

            return () => {
                clearTimeout(reminder);
                clearTimeout(closeReminder);
            }
        }
    }, [todos]);

    return (
        <Container className="mt-4">
            {showReminder && <Notification tomorrow={tomorrow} today={today} overdue={overdue} />}
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

            <h2 className="mt-4">Pending tasks</h2>
            <Row md={1}>
                {todos.map((todo, index) => {
                    return !todo.complete && (
                        <Col key={index} className="mt-3">
                            <Item todo={todo} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}