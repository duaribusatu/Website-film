import {Card, Image, Button} from "react-bootstrap"

const FavoriteMovie = () => {
    return(
        <div>
                        <Card className="movieImage">
                            <Image src="http://localhost:1337/uploads/medium_Birdman_c653420d29.jfif" alt="Birdman Movies" className="favImage" />
                            <div className="bg-dark">
                                <div className="text-white m-1 p-2">
                                    <Card.Title className="text-center">Birdman</Card.Title>
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
        </div>
    )
}

export default FavoriteMovie