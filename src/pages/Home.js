import HomeSwiper from "../components/HomeSwiper";
import './HomeStyles.css';
import image1 from '../Resources/shutterstock_696636415.jpg'
import image2 from '../Resources/shutterstock_1302552622.jpg'
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
                    <img src={image1}/>
                </div>
            </div>
            <div className="PictureOfGirl">
                <img src={image2}/>
                <div className="TextBlock">
                    <h1>Yr bitters normcore pug, hammock air plant</h1>
                    <p>Williamsburg raclette distillery, chia literally semiotics echo park intelligentsia hoodie gatekeep 90's ethical biodiesel. Church-key JOMO brunch portland direct trade, grailed copper mug coloring book cold-pressed twee. Lyft jean shorts ascot, mustache health goth mlkshk gorpcore cold-pressed fashion axe salvia chia stumptown. Organic aesthetic live-edge yes plz hell of.</p>
                    <button>Log in</button>
                </div>
            </div>
        </>
    )
}

export default Home;