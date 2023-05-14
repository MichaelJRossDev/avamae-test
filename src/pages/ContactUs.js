import contactUsImage from "../Resources/Img_Contact.png"
import "./ContactUsStyles.css"
import { useState } from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    fullName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    phoneNumber: Yup.string()
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Invalid Phone Number'),
    message: Yup.string()
        .required('Required'),
    address1: Yup.string(),
    address2: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    postcode: Yup.string(),
    country: Yup.string()
})

const onSubmit = values => {
    console.log(values)
}

function ContactUs() {
    const [showAddress, setShowAddress] = useState(false);

    function toggleAddress() {
        setShowAddress(!showAddress);
    }

    return (
        <>
            <div className="ContactUsContainer">
                    <h1>Contact us</h1>
                    <p>Air plant squid cronut, fingerstache biodiesel pabst mukbang neutral milk hotel meh bruh actually tofu. Lumbersexual four dollar toast sus post-ironic</p>
                    <Formik
                    initialValues={{fullName: '', email: '', phoneNumber: '', message: '', address1: '', address2: '', city: '', postcode: '', country: ''}}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                        <Form>
                            <div className="NameAndEmail">
                                <div>
                                    <label>Full Name </label>
                                    <br/>
                                    <Field name='fullName'/>
                                    <ErrorMessage name='fullName' />
                                    <br/>
                                </div>
                                <div>
                                    <label>Email address </label>
                                    <br/>
                                    <Field name='email'/>
                                    <ErrorMessage name='email' />
                                    <br/>
                                </div>
                            </div>
                            <label>Phone Number (optional)</label>
                            <br/>
                            <Field name='phoneNumber'/>
                            <ErrorMessage name='phoneNumber' />
                            <br/>
                            <label>Message </label>
                            <br/>
                            <Field name='message'/>
                            <ErrorMessage name='message' />
                            <br/>
                            <input type="checkbox" onChange={toggleAddress} />
                            <label>Add address details</label>
                            <div className={showAddress ? "" : "hidden"}>
                                <p>Address stuff</p>
                                <label>Address line 1 </label>
                                <br/>
                                <Field name='address1'/>
                                <ErrorMessage name='address1'/>
                                <br/>
                                <label>Address line 2 </label>
                                <br/>
                                <Field name='address2'/>
                                <ErrorMessage name='address2'/>
                                <br/>
                                <label>City/Town </label>
                                <br/>
                                <Field name='city'/>
                                <ErrorMessage name='city'/>
                                <br/>
                                <label>State/County </label>
                                <br/>
                                <Field name='state'/>
                                <ErrorMessage name='state'/>
                                <br/>
                                <label>Postcode </label>
                                <br/>
                                <Field name='postcode'/>
                                <ErrorMessage name='postcode'/>
                                <br/>
                                <label>Country </label>
                                <br/>
                                <Field name='country'/>
                                <ErrorMessage name='country'/>
                            </div>
                            <br/>
                            <button type="submit">Submit</button>
                            
                        </Form>

                    </Formik>
            </div>
            <img className="ContactUsImage" src={contactUsImage}/>
        </>
    )
}

export default ContactUs;