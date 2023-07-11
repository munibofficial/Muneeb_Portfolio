import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import certificate from './images/advance react.pdf';
import Image from './images/project2.jpg';
import cardComp2 from './images/cardComp2.jpg';
import cardComp3 from './images/cardComp3.jpg';
import cardComp4 from './images/cardComp4.jpg';

function CardComp({ title, image, description }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default function Ceertification() {
  return (
    <CardComp
      image={certificate}
      title="Advanced React
  "
      description="i am developer"
    />
  );
}
