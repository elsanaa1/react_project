import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './img1.jpeg';
const buynw='Buy Now'
function CardCom() {
  return (
    <>
      {/* card 1 */}
    <Card style={{ width: '18rem'  ,display:'inline-block' ,margin:'10px 50px 50px'}}>
      <Card.Img style={{width:'200px',height: '230px'}}  variant="top" src={img1}  />
      <Card.Body>
        <Card.Title>Iphone 15 </Card.Title>
        <Card.Text>
        The iPhone 15 is a high-end smartphone from Apple released on September 12, 2023.
         It features a 6.1-inch Super Retina XDR OLED display, an A16 Bionic processor.
        </Card.Text>
        <Button variant="primary">{buynw}</Button>
      </Card.Body>
    </Card>
      {/* card 2 */}
    <Card style={{ width: '18rem' ,display:'inline-block',margin:'10px 50px' }}>
      <Card.Img style={{width:'200px',height: '230px'}}   variant="top" src="https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-s928-sm-s928bztcmea-thumb-539425978?$528_528_PNG$" />
      <Card.Body>
        <Card.Title>Samsung Galaxy S24 Ultra</Card.Title>
        <Card.Text>
        Samsung s24 ultra 2024 year’s model has a titanium frame just
         like the Apple iPhone 15 Pro which Samsung mobiles allow for better durability.
        </Card.Text>
        <Button variant="primary">{buynw}</Button>
      </Card.Body>
    </Card>
    {/* card 3 */}
    <Card style={{ width: '18rem' ,display:'inline-block',margin:'10px 50px' }}>
      <Card.Img style={{width:'190px',height: '200px'}}  variant="top" src="https://www.apple.com/newsroom/images/2024/09/get-ready-to-upgrade-to-the-new-iphone-16-apple-watch-and-airpods-lineups/article/Apple-iPhone-16-Pro_inline.jpg.large.jpg" />
      <Card.Body>
        <Card.Title>IPhone 16</Card.Title>
        <Card.Text>
        Apple today introduced iPhone 16 and iPhone 16 Plus , featuring the new custom-designed A18 chip and unprecedented photo and video
         capabilities that push the boundaries of what an iPhone can do.
        </Card.Text>
        <Button variant="primary">{buynw}</Button>
      </Card.Body>
    </Card>
    </>
    
  );
}

export default CardCom;
