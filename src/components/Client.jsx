import React from 'react'
import { Container } from 'react-bootstrap';
import Image from './Image';
import wp1 from '../assets/Logo Wrapper.png'
import wp2 from '../assets/Logo Wrapper (1).png'
import wp3 from '../assets/Logo Wrapper (2).png'
import wp4 from '../assets/Logo Wrapper (3).png'
import wp5 from '../assets/Logo Wrapper (4).png'
import wp6 from '../assets/Logo Wrapper (5).png'

const Client = () => {
  return (
    <section className='clint-part'>
        <Container>
            <div>
                <h2>Clients Section</h2>
            </div>
            <div className='clint-main'>
                <Image src={wp1}/>
                <Image src={wp2}/>
                <Image src={wp3}/>
                <Image src={wp4}/>
                <Image src={wp5}/>
                <Image src={wp6}/>
            </div>

        </Container>
    </section>
  )
}

export default Client