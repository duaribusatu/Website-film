import './App.css';
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Favorite from "./components/Favorite";
import Film from "./components/Film";
import ListFavorite from './components/ListFavorite';
import ListBest from "./components/ListBest";
import "./style/landingPage.css"
import { useEffect, useState } from 'react';
import MoviesAPI from './config/MoviesAPI';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    MoviesAPI.find().then((res) => {
      console.log(res);
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="Favorite">
        <Favorite />
      </div>

      <div className="Film">
        <Film />
      </div>

      <div className="ListFavorite">
        <ListFavorite products={products} />
      </div>

      <div className="ListBest">
        <ListBest products={products} />
      </div>

    </div>
  )
}

export default App
