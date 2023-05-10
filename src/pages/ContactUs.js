import contactUsImage from "../Resources/Img_Contact.png"

function ContactUs() {
    return (
        <>
            <div className="ContactUsContainer">
                <div>
                    <h1>Contact us</h1>
                    <p>Air plant squid cronut, fingerstache biodiesel pabst mukbang neutral milk hotel meh bruh actually tofu. Lumbersexual four dollar toast sus post-ironic</p>
                </div>
                <div>
                    <img src={contactUsImage}/>
                </div>
            </div>
        </>
    )
}

export default ContactUs;