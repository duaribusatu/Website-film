import {Card, Container, Row, Col, Image} from "react-bootstrap"
import BirdmanImage from "../assets/Images/Film/Birdman.jfif"
import BlackPantherImage from "../assets/Images/Film/BlackPanther.jfif"
import CaptainMarvelImage from "../assets/Images/Film/CaptainMarvel.jfif"
import DoctorStrangeImage from "../assets/Images/Film/DoctorStrange.jfif"
import GetOutImage from "../assets/Images/Film/GetOut.jfif"
import ICareImage from "../assets/Images/Film/ICare.png"
import InceptionImage from "../assets/Images/Film/Inception.jfif"
import MrRobotImage from "../assets/Images/Film/MrRobot.jfif"
import SpidermanImage from "../assets/Images/Film/Spiderman.png"


const Film = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col id="film">
                        <div className="favHeader text-white">Best Movies</div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="movieWrapper mb-2">
                        <Card className="movieImage">
                            <Image src={BirdmanImage} alt="Birdman Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Birdman</Card.Title>
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
                            <Image src={BlackPantherImage} alt="BlackPanther Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Black Panther</Card.Title>
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
                            <Image src={InceptionImage} alt="Inception Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Inception</Card.Title>
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
                            <Image src={CaptainMarvelImage} alt="Captain Marvel Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Captain Marvel</Card.Title>
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
                            <Image src={DoctorStrangeImage} alt="Doctor Strange Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Doctor Strange</Card.Title>
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
                            <Image src={GetOutImage} alt="Get Out Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Get Out</Card.Title>
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
                            <Image src={ICareImage} alt="I Care a Lot Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">I Care a Lot</Card.Title>
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
                            <Image src={MrRobotImage} alt="Mr Robot Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Mr Robot</Card.Title>
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
                            <Image src={SpidermanImage} alt="Spiderman Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Spiderman Far From Home</Card.Title>
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

export default Film