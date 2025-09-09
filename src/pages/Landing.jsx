import { Container, Card, Row, Col } from 'react-bootstrap'


export default function Landing() {
    return (
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center mt-5">
                    <h1>Music Todo Application</h1>
                </Col>
            </Row>

            <Row >
                <Col className="d-flex justify-content-center mt-4">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                This application allows you to schedule self practice hours, whether that is instruments, singing, dancing or even choreography skills!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row >
                <Col className="d-flex justify-content-center mt-4">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Reminders could be set to specific task to remind you of your incoming schedules such as music lessons, workshops, meetings, etc.
                            </Card.Text>
                            <Card.Text>
                                Timers are added to let you know the average time needed to complete similar tasks to help you plan your schedule better!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row >
                <Col className="d-flex justify-content-center mt-4">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Track your progress on tasks by marking it complete once your done to organize all your pending tasks,
                            </Card.Text>
                            <Card.Text>
                                making the whole process seamless and manageable!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}