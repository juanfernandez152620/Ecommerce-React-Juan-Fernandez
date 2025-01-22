import { useState } from "react"
import { Button, ButtonGroup } from "react-bootstrap"

const ItemCount = ({ addProduct }) => {
  const [count, setCount] = useState(1)

  const handleClickRemove = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleClickAdd = () => {
    setCount(count + 1)
  }

  return (
    <div className="d-flex flex-md-column justify-content-between align-items-center mt-3">
      <ButtonGroup className="shadow-sm">
        <Button
          variant="danger"
          onClick={handleClickRemove}
          className="rounded-start"
        >
          -
        </Button>
        <Button variant="light" disabled className="fw-bold text-dark px-4">
          {count}
        </Button>
        <Button
          variant="success"
          onClick={handleClickAdd}
          className="rounded-end"
        >
          +
        </Button>

      </ButtonGroup>

      <Button
        onClick={() => addProduct(count)}
        variant="dark"
        className="px-2 shadow-sm mt-md-2"
      >
        Añadir al carrito
      </Button>

    </div>
  )
}

export default ItemCount
