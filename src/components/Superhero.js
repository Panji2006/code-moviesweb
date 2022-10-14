import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spiderman1Image from "../assets/images/superhero/spiderman1.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"

const Superhero = () => {
    return (
        <div id="superhero">
            <br />
            <h1 className="text-center text-white mt-5 animate__animated animate__heartBeat">SUPERHERO MOVIE</h1>
            <Container>
                <Row>
                    <Col md={4} className="movieWrapper mt-3">         
                        <Card className="movieImage">
                            <Image src={antmanImage} alt="antman movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">ANTMAN</Card.Title>
                                    <Card.Text className="text-left animate__animated animate__backInUp">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper mt-3">         
                        <Card className="movieImage">
                            <Image src={avengerImage} alt="avenger movie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">AVENGER</Card.Title>
                                    <Card.Text className="text-left animate__animated animate__backInUp">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper mt-3">         
                        <Card className="movieImage">
                            <Image src={batmanImage} alt="batman movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">BATMAN</Card.Title>
                                    <Card.Text className="text-left animate__animated animate__backInUp">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper mt-3">         
                        <Card className="movieImage">
                            <Image src={robinhoodImage} alt="robinhood movie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">ROBINHOOD</Card.Title>
                                    <Card.Text className="text-left animate__animated animate__backInUp">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper mt-3">         
                        <Card className="movieImage">
                            <Image src={spiderman1Image} alt="spiderman1 movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">SPIDERMAN</Card.Title>
                                    <Card.Text className="text-left animate__animated animate__backInUp">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper mt-3">         
                        <Card className="movieImage">
                            <Image src={supermanImage} alt="superman movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">SUPERMAN</Card.Title>
                                    <Card.Text className="text-left animate__animated animate__backInUp">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Superhero;