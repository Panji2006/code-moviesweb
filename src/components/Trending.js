import { Card, Container, Row, Col, Image } from "react-bootstrap";
import jokerImage from "../assets/images/trending/joker.jpg"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
    return (
        <div id='trending'>
            <Container>
                <br />
                <h1 className="text-center text-white mt-5 animate__animated animate__heartBeat">TRENDING MOVIE</h1>
                <Row>
                    <Col md={4} className="movieWrapper mt-3">         
                        <Card className="movieImage">
                            <Image src={jokerImage} alt="joker movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">JOKER</Card.Title>
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
                            <Image src={duneImage} alt="joker movie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">DUNE</Card.Title>
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
                            <Image src={everythingImage} alt="joker movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">EVERYTHING</Card.Title>
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
                            <Image src={infiniteImage} alt="joker movie" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">INFINITE</Card.Title>
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
                            <Image src={lightyearImage} alt="joker movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">LIGHTYEAR</Card.Title>
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
                            <Image src={morbiusImage} alt="joker movie" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center animate__animated animate__rubberBand">MORBIUS</Card.Title>
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

export default Trending;
//         <div id="trending" className="trendingWrapper">
//            <br />
//            <br />
//         {/* <h1 className="text-center text-white mt-5 animate__animated animate__heartBeat">TRENDING MOVIE</h1> */}
//             <div className="img-thumb mt-5">
//                 <img src={props.image} alt="card movie" />
//                 <p className="time">{props.time}</p>
//             </div>
//             <p className="imgTitle text-center animate__animated animate__heartBeat">{props.title}</p>
//             <p className="imgDesc">descriptions here</p>
//         </div>