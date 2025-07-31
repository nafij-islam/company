import React from 'react'
import { Container,Card} from 'react-bootstrap';
import faruk from '../assets/faruk.jpg'
import tabib from '../assets/tabib.jpg'
import nafis from '../assets/nafis.jpg'
import jkroy from '../assets/jkroy.jpg'
import rudro from '../assets/rudro.jpg'
import polas from '../assets/polas.png'
import Image from './Image';

const Team = () => {
  return (
    <section className='team-part'>
        <Container>
            <div className='team-heading'>
                <h2>Team section</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.</p>
            </div>
{/* heading part */}
            <div className='card-flex'>
               <Card className='main-card'>
                  <Image className="className" src={faruk}/>
                    <Card.Body>
                          <Card.Title>Faruk Mulla</Card.Title>
                          <Card.Title>Fiverr</Card.Title>
                        <Card.Text>
                            MarkatePlace Hunting
                        </Card.Text>
                        
                    </Card.Body>
                </Card>

                 <Card className='main-card'>
                  <Image className="className" src={nafis}/>
                    <Card.Body>
                          <Card.Title>Nafij Islam</Card.Title>
                          <Card.Title>Python</Card.Title>
                        <Card.Text>
                            Python Developer
                        </Card.Text>
                        
                    </Card.Body>
                </Card>

                <Card className='main-card'>
                  <Image className="className" src={tabib}/>
                    <Card.Body>
                          <Card.Title>Tahsin Al Tabib</Card.Title>
                          <Card.Title>Java Script</Card.Title>
                        <Card.Text>
                            Java Script Developer
                        </Card.Text>
                        
                    </Card.Body>
                </Card>

               


                <Card className='main-card'>
                  <Image className="className" src={jkroy}/>
                    <Card.Body>
                          <Card.Title>Jk Roy</Card.Title>
                          <Card.Title>React</Card.Title>
                        <Card.Text>
                            React Developer
                        </Card.Text>
                        
                    </Card.Body>
                </Card>

                 <Card className='main-card'>
                  <Image className="className" src={rudro}/>
                    <Card.Body>
                          <Card.Title>Mostofa Jaman</Card.Title>
                          <Card.Title>Laravel</Card.Title>
                        <Card.Text>
                            Laravel Developer
                        </Card.Text>
                        
                    </Card.Body>
                </Card>


                <Card className='main-card'>
                  <Image className="className" src={polas}/>
                    <Card.Body>
                          <Card.Title>Polas Dash</Card.Title>
                          <Card.Title>Tailwind</Card.Title>
                        <Card.Text>
                            Tailwind Developer
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>

        </Container>
        
    </section>
  )
}

export default Team