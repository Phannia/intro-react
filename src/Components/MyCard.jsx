import Card from 'react-bootstrap/Card';
import Tags from './Tags';

// props declarativas
const MyCard = ({img, message, title, color, text}) => {
return (
<>
    <Card  style={{ width: '20rem' }}>
        <div className='img-container'>
            <Card.Img variant="top" src={img} className='img-card rounded mx-auto d-block'/>
        </div>
        <Card.Body>
                <Card.Title>{title}</Card.Title>
            <Card.Text className='card-text'>
                {message}
            </Card.Text>
        <div className='span-container'>
            <Tags 
            color={color}
            text={text}/>
        </div>

        </Card.Body>
    </Card>

</>
);
};
export default MyCard;