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
                    <p>Yuccie pinterest yr meditation, kale chips live-edge wayfarers art party. Gatekeep next level knausgaard. Helvetica keffiyeh health goth, echo park adaptogen vibecession humblebrag knausgaard hammock iceland enamel pin</p>
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
                <div className="TextBlockWrapper">
                <div className="TextBlock">
                    <h1>Yr bitters normcore pug, hammock air plant</h1>
                    <p>Williamsburg raclette distillery, chia literally semiotics echo park intelligentsia hoodie gatekeep 90's ethical biodiesel. Church-key JOMO brunch portland direct trade, grailed copper mug coloring book cold-pressed twee. Lyft jean shorts ascot, mustache health goth mlkshk gorpcore cold-pressed fashion axe salvia chia stumptown. Organic aesthetic live-edge yes plz hell of.</p>
                    <button>Log in</button>
                </div>
                </div>
            </div>
            <div className="HomepageBottom">
                <h1>Same iceland meggings vice drinking vinegar biodiesel bushwick gentrify.</h1>
                <h5><strong>Glossier godard polaroid offal</strong></h5>
                <div className="ContentContainer1">
                    <div className="ContainerSplit">
                        <p><strong>Four loko blackbird spyplane VHS celiac freegan +1. Lomo adaptogen chicharrones unicorn everyday carry ethical, YOLO bicycle rights celiac next level gastropub farm-to-table vibecession fam disrupt.</strong> <br/><br/>Pour-over ennui hell of, kinfolk ramps beard direct trade Brooklyn. JOMO hexagon gatekeep raw denim venmo messenger bag, craft beer twee glossier selfies.</p>
                    </div>
                    <div className="ContainerSplit">
                        <p>Keffiyeh XOXO salvia lyft ramps everyday carry activated charcoal. Put a bird on it blog pour-over crucifix chia pitchfork. PBR&B bushwick keytar, knausgaard pinterest cornhole poke ennui offal four dollar toast etsy mumblecore selvage. Gentrify pickled locavore twee portland etsy. Chambray church-key iPhone JOMO, beard sriracha distillery activated charcoal williamsburg truffaut. Heirloom lomo sus microdosing polaroid vexillologist DIY pitchfork master cleanse celiac chartreuse schlitz tumblr blog palo santo.</p>
                    </div>
                    <div className="ContainerSplit">
                        <p>Listicle polaroid beard heirloom. Meditation green juice hella, schlitz brunch kombucha skateboard chambray ramps cliche. Chambray praxis yes plz bitters ennui, whatever leggings iceland church-key. Raclette health goth chambray tilde fingerstache next level. Seitan air plant chillwave, biodiesel palo santo waistcoat XOXO. Brunch 3 wolf moon marxism bicycle rights. Solarpunk keytar cray, semiotics mumblecore humblebrag quinoa bitters plaid woke jean shorts everyday carry.</p>
                    </div>
                </div>
            
            <Link to='/contact-us'>
                <button>Contact Us</button>
            </Link>
            </div>
        </>
    )
}

export default Home;