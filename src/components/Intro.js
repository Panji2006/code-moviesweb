import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title animate__animated animate__backInUp">Nonton Gratis</div>
                        <div className="title animate__animated animate__backInDown">Gak Pake Karcis</div>
                        <div className="introButton mt-3 text-center">
                            <Button variant="primary">See All</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Intro;