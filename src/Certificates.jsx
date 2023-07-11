import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import certificate from './images/advance react.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
          <Button variant="success">Verify</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

// export default function Certification() {
//   return (
//     <div className="certificate-container">
//       <h2>Certificates</h2>
//       <div className="card">
//         <CardComp
//           image={certificate}
//           title="Advanced React"
//           description="Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior"
//         />
//         <CardComp
//           image={certificate}
//           title="Advanced React"
//           description="Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior"
//         />
//       </div>
//     </div>
//   );
// }
export default function Certification() {
  return (
    <div className = "certificate-container">
      <div className="headingContainer">
        <h2>Certificates</h2>
        </div>
      <Container>
        <Row>
          <Col>
            <CardComp
              image={certificate}
              title="Advanced React"
              description="Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior"
            />
          </Col>
          <Col>
            <CardComp
              image={certificate}
              title="Advanced React"
              description="Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior"
            />
          </Col>
          <Col>
            <CardComp
              image={certificate}
              title="Advanced React"
              description="Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior"
            />
          </Col>
          <Col>
          <CardComp
              image={certificate}
              title="Advanced React"
              description="Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
