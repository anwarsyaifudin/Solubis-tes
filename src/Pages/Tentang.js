import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '/src/logo.svg'
const Tentang = () => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./foto.png" />
      <Card.Body>
        <Card.Title>Anwar Syaifudin</Card.Title>
        <Card.Text>
        Perkenalkan nama lengkap saya Anwar Syaifudin, nama panggilan saya Anwar. 
        Saya berpengalaman sebagai IT Web Developer dan Graphic Designer. 
        Saya berminat dalam bidang IT dan siap belajar ilmu baru.
        </Card.Text>
        <Button variant="primary">Lihat Lengkap</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Tentang