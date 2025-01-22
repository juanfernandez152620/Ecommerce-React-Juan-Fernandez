import { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  const [confirmEmail, setConfirmEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [validated, setValidated] = useState(false)

  const handleConfirmEmail = (event) => {
    setConfirmEmail(event.target.value)

    // Validar que el email coincida con confirmEmail
    if (event.target.value !== dataForm.email) {
      setEmailError("Los correos no coinciden.")
    } else {
      setEmailError("")
    }
  }

  const handlePhoneChange = (event) => {
    const value = event.target.value

    // Validar que el valor solo contenga números
    if (/^\d*$/.test(value)) {
      setPhoneError("")
      handleChangeInput(event)
    } else {
      setPhoneError("El número de teléfono solo puede contener números.")
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false || emailError || phoneError) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      handleSubmitForm(event)
    }
    setValidated(true)
  }

  return (
    <Container className="my-5">
      <h2 className="mb-3 text-center">Checkout</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h4 className="mb-4">Información Personal</h4>
        <Row>
          <Form.Group as={Col} md="6" controlId="fullname">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Juan Pérez"
              name="fullname"
              value={dataForm.fullname}
              onChange={handleChangeInput}
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa tu nombre completo.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="phone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="123-456-7890"
              name="phone"
              value={dataForm.phone}
              onChange={handlePhoneChange}
              isInvalid={!!phoneError}
            />
            <Form.Control.Feedback type="invalid">
              {phoneError || "Ingresa un número de teléfono válido."}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mt-3">
          <Form.Group as={Col} md="6" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="ejemplo@correo.com"
              name="email"
              value={dataForm.email}
              onChange={handleChangeInput}
            />
            <Form.Control.Feedback type="invalid">
              Ingresa un correo válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="confirmEmail">
            <Form.Label>Confirmar Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Confirma tu correo"
              value={confirmEmail}
              onChange={handleConfirmEmail}
              isInvalid={!!emailError}
            />
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <div className="d-flex gap-3 mt-4">
          <Button type="submit" variant="success" className="bg-success mt-2 text-white">
            Finalizar
          </Button>
          <Link className='text-decoration-none' to="/cart">
            <Button
              variant="danger"
              className="bg-transparent border border-danger mt-2 text-secondary fw-medium"
            >
              Volver
            </Button>
          </Link>
        </div>
      </Form>
    </Container>
  )
}

export default FormCheckout