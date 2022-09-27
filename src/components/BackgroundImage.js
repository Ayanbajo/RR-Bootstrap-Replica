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
