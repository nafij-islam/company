import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import Image from './Image';
import awsome from '../assets/awsome.jpg'


const Awsome = () => {
  return (
    <section className='awmain'>
        <Container>
            <Row>
                <Col lg={6}>
                   <div>
                    <h1>Title Copy Goes Here Be Awesome</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <button className='awbtn'>GET STARTED</button>
                   </div>
                </Col>

                <Col lg={6}>
                      <Image className="className" src={awsome} alt="picture"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Awsome