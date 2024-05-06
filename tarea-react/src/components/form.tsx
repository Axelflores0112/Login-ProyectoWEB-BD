import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Data from './Data'
import '../styles/form.css'
const data = {
    email: 'axel.floresb@hotmail.com',
    password: '1234'
}

function form() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showdata, setshowdata] = useState<boolean>(false)

    const handleInputChange = (stateUpdate: any) => {
        return (e: any) => {
            stateUpdate(e.target.value)
        }
    }
    const handleOnClick = (e: any) => {
        if (data.email === email && data.password === password) {
            setshowdata(true)
        } else {
            alert("Datos incorrectos")
        }
        e.preventDefault()
    }
    return (
        <div className="container mt-3">
            <div className="form mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleInputChange(setEmail)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={handleInputChange(setPassword)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleOnClick}>
                        Submit
                    </Button>
                </Form>
            </div>
                <Data email={email} password={password} showdata={showdata} />
        </div>
    )
}
export default form;