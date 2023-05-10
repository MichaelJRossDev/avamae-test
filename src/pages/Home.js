import HomeSwiper from "../components/HomeSwiper";
import './HomeStyles.css';
import image from '../Resources/shutterstock_696636415.jpg'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <HomeSwiper />
            <div className="ContentContainer1">
                <div className="ContainerSplit">
                    <h1>Title</h1>
                    <p>Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content </p>
                    <Link to='/about-us' className="ButtonContainer">
                        <button>Learn more</button>
                    </Link>
                </div>
                <div className="ContainerSplit">
                    <img src={image}/>
                </div>
            </div>
        </>
    )
}

export default Home;