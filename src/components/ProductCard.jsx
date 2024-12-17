import { Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { AiFillStar } from 'react-icons/ai';

const ProductCard = ({ producto }) => {
  const { 
    image = 'https://via.placeholder.com/150', 
    title = 'Producto sin título', 
    description = 'Sin descripción', 
    price = 0, 
    category = 'Sin categoría'
  } = producto;

  console.log(image, title, description, price, category);

  return (
    <Card style={{ marginBottom: '2rem', width: '100%', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>

      <Image src={image} alt={title} style={{ height: '150px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} fluid />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>${price}</strong></Card.Text>
        <Card.Text><strong><Link className=' text-decoration-none  text-secondary' to={ "/detail/"+producto.id }>Ver detalles</Link></strong></Card.Text>
      </Card.Body>
    </Card> 
  )
}

export default ProductCard
