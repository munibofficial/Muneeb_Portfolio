import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './images/project2.jpg';
import cardComp2 from './images/cardComp2.jpg';
import cardComp3 from './images/cardComp3.jpg';
import cardComp4 from './images/cardComp4.jpg';

const desc = [
  {
    description:
      'MarisRecruitment.com, my digital symphony,career aspirations and opportunities, where talents find their perfect notes. ',
  },
  {
    description:
      'My digital masterpiece, blooms with boundless inspiration, weaving dreams into vibrant landscapes.',
  },
  {
    description:
      'H6CarStudio.com, a portal of automotive artistry, embraced my touch as I breathed life into their content.',
  },
  {
    description:
      'EcomTruth.com, a realm where visuals transcend boundaries, witnessed my artistic prowess unfold. ',
  },
];

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

function Project() {
  return (
    <div className="projectContainer">
      <div className="headingContainer">
        <h2 style={{ color: 'white', textAlign: 'left', fontSize: '44px' , display: 'flex' ,justifyContent:'start' }}>
          Projects
        </h2>
      </div>
      <div className="cardsContainer">
        <CardComp
          title="H6 Car Studio Content Updation"
          image={Image}
          description={desc[2].description}
        />
        <CardComp
          title="Marisrecruiment Web Developement"
          image={cardComp2}
          description={desc[0].description}
        />
        <CardComp
          title="Indicascapes Web Developement"
          image={cardComp3}
          description={desc[1].description}
        />
        <CardComp
          title="Ecom Trurh Graphics Designing "
          image={cardComp4}
          description={desc[2].description}
        />
      </div>
    </div>
  );
}

export default Project;
