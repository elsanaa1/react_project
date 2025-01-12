import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const FormContact=()=>{
    return (
       
        <Form  style={{width:'80%',margin: 'auto'}}>
        {/* heading */}
         <h3 style={{margin:20}}>Contact Form: </h3>
         {/* first input */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="Email"  />
          </Col>
        </Form.Group>
        {/* second input */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
       
        {/* third input */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Telephone
          </Form.Label>
          <Col sm="10">
            <Form.Control type="tel" placeholder="Telephone" />
          </Col>
        </Form.Group>

  {/* fourth input */}
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Message
          </Form.Label>
          <Col sm="10"  >
            <Form.Control type="text" placeholder="message" style={{height:80 }}/>
          </Col>
    </Form.Group>
    {/* button */}
        <div style={{  display: 'flex',justifyContent: 'center'}}>
        <button type="button" class="btn btn-primary"  >Contact US</button>
        </div>
     
      </Form>
    );
};
export default FormContact;