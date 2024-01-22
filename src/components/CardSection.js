import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const CardSection = () => {
  return (
    <div className='card_flex'>

      {/* card one */}
    <Link to='/easyLevel'>
    <Card className='cards' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/easy.gif" />
  <Card.Body>
    <Card.Title>Easy level</Card.Title>
    <Card.Text>
    <ul>
      <li>Nail the Basics: Easy Level!</li>
      <li>win 1 marks per question!</li>
      <li>Ideal for Newbies!</li>
      </ul>
    </Card.Text>
    <Button className='card_button'>Take Quiz</Button>

  </Card.Body>
</Card>
</Link>


      {/* card two */}
<Link to='/mediumLevel'>
<Card className='cards' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/normal.gif" />
  <Card.Body>
    <Card.Title>Medium Level</Card.Title>
    <Card.Text>
    <ul>
      <li>Master the Middle Ground</li>
      <li>Easy questions, 3 marks each!</li>
      <li>Perfect for Beginners!</li>
      </ul>
    </Card.Text>

    <Button className='card_button'>Take Quiz</Button>

  </Card.Body>
</Card>
</Link>


      {/* card third */}
<Link to='/hardLevel'>
<Card className='cards' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/hard.gif" style={{ height: '10rem' }} />
  <Card.Body>
    <Card.Title>Hard level</Card.Title>
    <Card.Text>
      <ul>
      <li>The Ultimate Hard Level!</li>
      <li>Discover 5 marks per question!</li>
      <li>For Experts Only!</li>
      </ul>
    </Card.Text>
    <Button className='card_button'>Take Quiz</Button>
  </Card.Body>
</Card>
</Link>

</div>
  )
}
