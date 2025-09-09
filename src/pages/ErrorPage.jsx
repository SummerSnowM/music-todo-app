import { Container } from 'react-bootstrap'

export default function ErrorPage() {
    return (
        <>
            <Container>
                <h1 className='mt-3'>❌ Oh no!</h1>
                <p>Page not found.</p>
            </Container>
        </>
    )
}