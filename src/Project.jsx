import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComp({title,image}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function Project() {
  return (
    <div className="projectContainer">
      <div className="headingContainer">
        <h2>Projects</h2>
      </div>
      <div className="cardsContainer">
        <CardComp title="H6 Car Studio Content Updation" image=""/>
        <CardComp title = "Marisrecruiment Web Developement"/>
        <CardComp />
        <CardComp />
      </div>
    </div>
  );
}

export default Project;
