import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function PrimaryCard({cardTitle,cardText,cardImage}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardImage} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>
        {cardText}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default PrimaryCard;