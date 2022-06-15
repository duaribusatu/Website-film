import {Card, Container, Row, Col, Image, Button} from "react-bootstrap"
import DeadpoolImage from "../assets/Images/Favorite/Deadpool.jfif"
import GOTGImage from "../assets/Images/Favorite/GOTG.jfif"
import MoonlightImage from "../assets/Images/Favorite/Moonlight.jpg"
import PredestinationImage from "../assets/Images/Favorite/Predestination.jfif"
import SplitImage from "../assets/Images/Favorite/Split.jfif"
import ThorImage from "../assets/Images/Favorite/Thor.jfif"
import JokerImage from "../assets/Images/Favorite/Joker.jfif"
import AngryBirdImage from "../assets/Images/Favorite/AngryBird.jpg"

const Favorite = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col id="favorite">
                        <div className="favHeader text-white">Favorite Movies</div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="movieWrapper mb-2">
                        <Card className="movieImage">
                            <Image src="http://localhost:1337/uploads/large_John_Wick3_c56a7d1ad4.jpg" alt="John Wick Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">John Wick</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <div className="text-center d-flex justify-content-center align-item-center">
                                        <Button type="button" className="btn btn-danger">Only $49,00</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mb-2">
                        <Card className="movieImage">
                            <Image src={DeadpoolImage} alt="Deadpool Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Deadpool</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mb-2">
                        <Card className="movieImage">
                            <Image src={AngryBirdImage} alt="Angry Bird Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Angry Bird</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mb-2">
                        <Card className="movieImage">
                            <Image src={GOTGImage} alt="Guardians Of The Galaxy Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Guardians Of The Galaxy</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mb-2">
                        <Card className="movieImage">
                            <Image src={SplitImage} alt="Split Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Split</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mb-2">
                        <Card className="movieImage">
                            <Image src={MoonlightImage} alt="Moonlight Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Moonlight</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mb-2">
                        <Card className="movieImage">
                            <Image src={PredestinationImage} alt="Predestination Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Predestination</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mb-2">
                        <Card className="movieImage">
                            <Image src={ThorImage} alt="Thor Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Thor</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper mb-5">
                        <Card className="movieImage">
                            <Image src={JokerImage} alt="Joker Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Joker</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Container>
            
        </div>
    )
}

export default Favorite