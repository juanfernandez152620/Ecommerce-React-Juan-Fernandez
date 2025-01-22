import { useContext, useState } from "react"
import { Card, Button } from "react-bootstrap"
import FormCheckout from "./FormCheckOut"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import db from "../db/db.js"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  })
  const [orderId, setOrderId] = useState(null)
  const { cart, totalPrice, cleanCart } = useContext(CartContext)

  //COpiar en la papelera
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(orderId) // Copia el texto al portapapeles
      .then(() => {
        setCopied(true) // Cambia el estado a "copiado"
        setTimeout(() => setCopied(false), 1000) // Vuelve al estado normal después de 1 segundo
      })
      .catch((err) => console.error("Error al copiar al portapapeles: ", err))
  }
  //end copiar en la papelera

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()
    //console.log(dataForm)
    const orden = {
        comprador: { ...dataForm },
        productos: { ...cart },
        total: totalPrice(),
        fecha: Timestamp.fromDate( new Date() )
    }
    //console.log(orden) //Firebase2 51:00

    //Sube la orden
    await upLoadOrden(orden)

    //Limpia el carrito
    cleanCart()
  }

  const upLoadOrden = async(newOrden) => {
    try {
        const orderRef = collection( db, "ordenes" )
        const response = await addDoc(orderRef, newOrden, )
        setOrderId(response.id)
        //console.log("Orden Recibida, guarde su numero de seguimiento: ", response.id)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
        {
            orderId ? (
                <div className="d-flex justify-content-center align-items-center vh-100">
                  <Card className="text-center shadow-lg" style={{ width: "20rem" }}>
                    <Card.Body>
                      <Card.Title>Orden recibida correctamente</Card.Title>
                      <Card.Text>Haga Click para copiar el código y Guarde su código de seguimiento:</Card.Text>
                      <Button
                        variant={copied ? "success" : "primary"}
                        onClick={handleCopy}
                      >
                        {copied ? "Fue copiado" : orderId}
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
            ) : (
                <FormCheckout
                  dataForm={dataForm}
                  handleChangeInput={handleChangeInput}
                  handleSubmitForm={handleSubmitForm}
                />
            )
        }

    </div>
  )
}

export default Checkout


// import { useState } from "react"
// import { Container, Form, Button, Col, Row } from "react-bootstrap"
// import TotalPrice from "../components/TotalPrice"

// const Checkout = () => {
//   const [dataForm, setDataForm] = useState({
//     fullname: "",
//     phone: "",
//     email: "",
//   })



// //   const [confirmEmail, setConfirmEmail] = useState("")
// //   const [emailError, setEmailError] = useState("")
// //   const [validated, setValidated] = useState(false)

// //   const handleChangeInput = (event) => {
// //     const { name, value } = event.target
// //     setDataForm({
// //       ...dataForm,
// //       [name]: value,
// //     })
// //   }

// //   const handleConfirmEmail = (event) => {
// //     const value = event.target.value
// //     setConfirmEmail(value)
// //     if (value !== dataForm.email) {
// //       setEmailError("Los correos no coinciden")
// //     } else {
// //       setEmailError("")
// //     }
// //   }

// //   const handleSubmit = (event) => {
// //     const form = event.currentTarget
// //     if (form.checkValidity() === false || emailError) {
// //       event.preventDefault()
// //       event.stopPropagation()
// //     }
// //     setValidated(true)
// //   }

//   return (
//     <Container className="my-5">
//       <h2 className="mb-3 text-center">Checkout</h2>
//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
//         <h4 className="mb-4">Información Personal</h4>
//         <Row>
//           <Form.Group as={Col} md="6" controlId="fullname">
//             <Form.Label>Nombre Completo</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Juan Pérez"
//               name="fullname"
//               value={dataForm.fullname}
//               onChange={handleChangeInput}
//             />
//             <Form.Control.Feedback type="invalid">
//               Por favor ingresa tu nombre completo.
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="6" controlId="phone">
//             <Form.Label>Teléfono</Form.Label>
//             <Form.Control
//               required
//               type="tel"
//               placeholder="123-456-7890"
//               name="phone"
//               value={dataForm.phone}
//               onChange={handleChangeInput}
//             />
//             <Form.Control.Feedback type="invalid">
//               Ingresa un número de teléfono válido.
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Row>

//         <Row className="mt-3">
//           <Form.Group as={Col} md="6" controlId="email">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               required
//               type="email"
//               placeholder="ejemplo@correo.com"
//               name="email"
//               value={dataForm.email}
//               onChange={handleChangeInput}
//             />
//             <Form.Control.Feedback type="invalid">
//               Ingresa un correo válido.
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="6" controlId="confirmEmail">
//             <Form.Label>Confirmar Email</Form.Label>
//             <Form.Control
//               required
//               type="email"
//               placeholder="Confirma tu correo"
//               value={confirmEmail}
//               onChange={handleConfirmEmail}
//               isInvalid={!!emailError}
//             />
//             <Form.Control.Feedback type="invalid">
//               {emailError}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Row>

//         {/* <div className="mt-4">
//             <TotalPrice items={[10,10,10]} />
//         </div> */}

//         <div className="d-flex gap-3 mt-4">
//             <Button variant="success" className='bg-success mt-2 text-white'>Finalizar</Button>
//             <Button variant="danger" className='bg-transparent border border-danger mt-2 text-secondary fw-medium'>Volver</Button>
//         </div>
//       </Form>
//     </Container>
//   )
// }

// export default Checkout


// // import { useState } from "react"

// // const Checkout = () => {
// //   const [dataForm, setDataForm] = useState({
// //     fullname: "",
// //     phone: "",
// //     email: "",
// //   })

// //   const [confirmEmail, setConfirmEmail] = useState("")
// //   const [emailError, setEmailError] = useState("")

// //   const handleChangeInput = (event) => {
// //     const { name, value } = event.target
// //     setDataForm({
// //       ...dataForm,
// //       [name]: value,
// //     })
// //   }

// //   const handleConfirmEmail = (event) => {
// //     const value = event.target.value
// //     setConfirmEmail(value)

// //     // Validar si el email y el email de confirmación coinciden
// //     if (value !== dataForm.email) {
// //       setEmailError("Los correos no coinciden")
// //     } else {
// //       setEmailError("")
// //     }
// //   }

// //   return (
// //     <div>
// //       <form>
// //         <label>Nombre completo</label>
// //         <input
// //           type="text"
// //           value={dataForm.fullname}
// //           name="fullname"
// //           onChange={handleChangeInput}
// //         />

// //         <label>Teléfono</label>
// //         <input
// //           type="tel"
// //           value={dataForm.phone}
// //           name="phone"
// //           onChange={handleChangeInput}
// //         />

// //         <label>Email</label>
// //         <input
// //           type="email"
// //           value={dataForm.email}
// //           name="email"
// //           onChange={handleChangeInput}
// //         />

// //         <label>Confirmar Email</label>
// //         <input
// //           type="email"
// //           value={confirmEmail}
// //           onChange={handleConfirmEmail}
// //         />
// //         {emailError && <p style={{ color: "red" }}>{emailError}</p>}
// //       </form>

      
// //     </div>
// //   )
// // }

// // export default Checkout
