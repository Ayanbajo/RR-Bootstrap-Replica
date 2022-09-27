import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

function BackgroundImage() {
  return (
    <div>
        <Card style={{ width: "100%", minHeight: "500px" }} className="bg-dark text-black">
            <Card.Img style={{ height: "500px", width: "auto", position: "absolute" }} src="./img/img.jpg" alt="backgroundimage" />
                <Card.ImgOverlay style={{ top: "500px", width: "auto", marginLeft: "auto", marginBottom: "auto"}}>
                    <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                        Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1em" }}>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="   Enter your address                                                          ->" />
                        </Form.Group>
                    </Form>
                </Card.ImgOverlay> 
         </Card> 
    </div>
  );
}

export default BackgroundImage;

// import Card from 'react-bootstrap/Card';

// function BackgroundImage() {
//   return (
//     <Card className="bg-dark text-white">
//       <Card.Img src="./img/img.jpg" alt="Card image" />
//       <Card.ImgOverlay>
//         <Card.Title>Card title</Card.Title>
//         <Card.Text>
//           This is a wider card with supporting text below as a natural lead-in
//           to additional content. This content is a little bit longer.
//         </Card.Text>
//         <Card.Text>Last updated 3 mins ago</Card.Text>
//       </Card.ImgOverlay>
//     </Card>
//   );
// }

// export default BackgroundImage;


 {/* <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
      <img style={{ height: "428px", width: "100%", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="./img/img.jpg" alt="Card image" />
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card> */}