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
                    <h1>Shaman DIY craft beer blackbird spyplane keytar live-edge listicle four loko.</h1>
                    <p>Yuccie pinterest yr meditation, kale chips live-edge wayfarers art party. Gatekeep next level knausgaard, put a bird on it vegan vice trust fund truffaut. Helvetica keffiyeh health goth, echo park adaptogen vibecession humblebrag knausgaard hammock iceland enamel pin</p>
                    <ul>
                        <strong>
                            <li>Cold-pressed air plant waistcoat gastropub sartorial</li>
                            <li>Hella tumblr shabby chic pug church-key williamsburg jianbing</li>
                            <li>VHS gentrify cardigan truffaut drinking vinegar normcore pork belly lyft</li>
                        </strong>
                    </ul>
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