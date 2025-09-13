import { ToastContainer, Toast } from 'react-bootstrap'

export default function Notification({ tomorrow, today, overdue }) {
    return (
        <>
            <ToastContainer position="bottom-end">
                <Toast>
                    <Toast.Header>
                        <strong className="me-auto">Urgent Reminders</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {tomorrow != 0 && (
                            <p className="text-warning">
                                You have {tomorrow} task(s) due <strong>tomorrow!</strong>
                            </p>

                        )}
                        {today != 0 && (
                            <p className="text-warning">
                                You have {today} task(s) due <strong>today!</strong>
                            </p>
                        )}
                        {overdue != 0 && (
                            <p className="text-danger">
                                You have {overdue} task(s) <strong>overdue</strong> tasks!
                            </p>
                        )}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>

    )
}