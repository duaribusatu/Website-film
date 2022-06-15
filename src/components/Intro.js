import {Col, Container, Row, Button} from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center align-item-center">
            <Row>
              <Col>
                <div className="title">PLAY THE MOVIE</div> 
                <div className="title">ENJOY UR MOVIE TIME</div> 
                <div className="introButton mt-4 text-center">
                    <Button variant="dark" href="#favorite">Watch Movies</Button>
                </div>
              </Col>
            </Row>

          </Container>

        </div>
    )
}

export default Intro