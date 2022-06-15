import {Container, Row, Col} from "react-bootstrap"
import BestMovie from "./BestMovies"

const ListBest = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col id="film">
                        <div className="favHeader text-white">Best Movies</div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="movieWrapper mb-2">
                        <BestMovie />
                    </Col>
                    <Col md={4} className="movieWrapper mb-2">
                        <BestMovie />
                    </Col>
                    <Col md={4} className="movieWrapper mb-2">
                        <BestMovie />
                    </Col>
                    <Col md={4} className="movieWrapper mb-2">
                        <BestMovie />
                    </Col>
                    <Col md={4} className="movieWrapper mb-2">
                        <BestMovie />
                    </Col>
                    <Col md={4} className="movieWrapper mb-2">
                        <BestMovie />
                    </Col>
                    <Col md={4} className="movieWrapper mb-5">
                        <BestMovie />
                    </Col>
                    <Col md={4} className="movieWrapper mb-5">
                        <BestMovie />
                    </Col>
                    <Col md={4} className="movieWrapper mb-5">
                        <BestMovie />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ListBest