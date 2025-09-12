import { Alert } from 'react-bootstrap'

export default function Notification({ tomorrow, today, overdue }) {
    return (
        <>
            {tomorrow != 0 && (
                <Alert variant="warning">You have {tomorrow} task(s) due tomorrow!</Alert>
            )}

            {today != 0 && (
                <Alert variant="warning">You have {today} task(s) due today!</Alert>
            )}

            {overdue != 0 && (
                <Alert variant="danger">You have {overdue} task(s) overdue tasks!</Alert>
            )}
        </>

    )
}