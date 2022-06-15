import {Container, Row, Col} from "react-bootstrap"
import FavoriteMovie from "./FavoriteMovie"

const ListFavorite = ({ products }) => {
    return (

        <div>
            <Container>
                <Row>
                    <Col id="film">
                        <div className="favHeader text-white">Favorite Movies</div>
                    </Col>
                </Row>
        {products.length === 0 ? 
        (
            <h3>No Products</h3> 
        ) : (
            products.map((product) => {
                return (
                    <Row>
                    <Col md={4} className="movieWrapper mb-2">
                        <FavoriteMovie />
                    </Col>
                    </Row>
                );
            })
        )}
            </Container>
        </div>

        )
    }
export default ListFavorite