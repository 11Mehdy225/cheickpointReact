import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';
import card from './images/card.png'

const Cards = () => {
    return (
        <div className='cardContainer'>
      <Card className='Cardss'>
        <Card.Img variant="top" src={card} />
        <Card.Body>
          <Card.Text>
            Nous vous presentons la carte connectée à l'esprit et qui effectue les paiements par confirmation telephatique
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className='Cardss'>
        <Card.Img variant="top" src={card} />
        <Card.Body>
          <Card.Text>
          Nous vous presentons la carte connectée à l'esprit et qui effectue les paiements par confirmation telephatique
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className='Cardss'>
        <Card.Img variant="top" src={card} />
        <Card.Body>
          <Card.Text>
          Nous vous presentons la carte connectée à l'esprit et qui effectue les paiements par confirmation telephatique
          </Card.Text>
        </Card.Body>
      </Card>
     
        </div>
    );
};

export default Cards;