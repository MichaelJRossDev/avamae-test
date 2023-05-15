import contactUsImage from "../Resources/Img_Contact.png"
import "./ContactUsStyles.css"
import { useState } from "react";
import {Formik, Form, Field, FieldArray, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const validationSchema = Yup.object({
    fullName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    phoneNumbers: Yup.array().of(Yup.string()
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Invalid Phone Number')),
    message: Yup.string()
        .required('Required'),
    address1: Yup.string(),
    address2: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    postcode: Yup.string(),
    country: Yup.string()
})

function ContactUs() {
    const [showAddress, setShowAddress] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [postError, setPostError] = useState(false);

    const onSubmit = values => {
        axios.post('https://interview-assessment.api.avamae.co.uk/index.html/api/v1/contact-us/submit', {
            FullName: values.fullName,
            EmailAddress: values.email,
            PhoneNumbers: values.phoneNumbers,
            Message: values.message,
            bIncludeAddressDetails: showAddress,
            AddressDetails: {
                AddressLine1: values.address1,
                AddressLine2: values.address2,
                CityTown: values.city,
                StateCounty: values.state,
                Postcode: values.postcode,
                Country: values.country
            }
        })
            .then(() => {
                setSubmitted(true)
                setPostError(false)})
            .catch(() => setPostError(true))
    }

    function toggleAddress() {
        setShowAddress(!showAddress);
    }

    return (
        <>
            <div className="ContactUsContainer">
                    <h1>Contact us</h1>
                    <p><strong>Air plant squid cronut, fingerstache biodiesel pabst mukbang neutral milk hotel meh bruh actually tofu. Lumbersexual four dollar toast sus post-ironic</strong></p>
                    <div className={submitted ? 'hidden' : 'ContactUsContainer2'}>
                        <Formik
                        initialValues={{fullName: '', email: '', phoneNumbers: [''], message: '', address1: '', address2: '', city: '', postcode: '', country: ''}}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                            <Form>
                                <div className="NameAndEmail">
                                    <div>
                                        <label>Full Name </label>
                                        <br/>
                                        <Field type='text' name='fullName'/>
                                        <ErrorMessage name='fullName' />
                                        <br/>
                                    </div>
                                    <div>
                                        <label>Email address </label>
                                        <br/>
                                        <Field type='text' name='email'/>
                                        <ErrorMessage name='email' />
                                    </div>
                                </div>
                                <br/>
                                <FieldArray name='phoneNumbers'>
                                    {
                                        (fieldArrayProps) => {
                                            const { push, form } = fieldArrayProps;
                                            const { values } = form;
                                            const { phoneNumbers } = values;
                                            return (
                                                <>
                                                    {
                                                    phoneNumbers.map((phoneNumber, index) => (
                                                        <>
                                                            <label>{`Phone number ${'0' + (index + 1)} - optional`}</label>
                                                            <br/>
                                                            <Field type='text' className="PhoneField" name={`phoneNumbers[${index}]`}/>
                                                            <ErrorMessage name={`phoneNumbers[${index}]`} />
                                                            <br/>
                                                        </>
                                                    ))
                                                    }
                                                    <button className="NewNumberButton" type="button" onClick={() => push('')}><strong>Add new phone number</strong></button>
                                                    <br/>
                                                </>
                                            )
                                        }
                                    }
                                </FieldArray>
                                <br/>
                                <label>Message </label>
                                <br/>
                                <Field className='MessageField' type='text' name='message'/>
                                <ErrorMessage name='message' />
                                <br/>
                                <input type="checkbox" onChange={toggleAddress} />
                                <label>Add address details</label>
                                <div className={showAddress ? "AddressInfo" : "hidden"}>
                                    <label>Address line 1 </label>
                                    <br/>
                                    <div className="Address1And2">
                                        <Field type='text' name='address1'/>
                                        <ErrorMessage name='address1'/>
                                        <br/>
                                        <label>Address line 2 </label>
                                        <br/>
                                        <Field type='text' name='address2'/>
                                        <ErrorMessage name='address2'/>
                                    </div>
                                    <br/>
                                    <label>City/Town </label>
                                    <br/>
                                    <Field type='text' name='city'/>
                                    <ErrorMessage name='city'/>
                                    <br/>
                                    <label>State/County </label>
                                    <br/>
                                    <Field type='text' name='state'/>
                                    <ErrorMessage name='state'/>
                                    <br/>
                                    <label>Postcode </label>
                                    <br/>
                                    <Field type='text' name='postcode'/>
                                    <ErrorMessage name='postcode'/>
                                    <br/>
                                    <label>Country </label>
                                    <br/>
                                    <Field type='text' name='country'/>
                                    <ErrorMessage name='country'/>
                                </div>
                                <br/>
                                <button type="submit">Submit</button>
                                <br/>
                                {postError ? <p>There has been an error with our servers. Please try again later.</p> : null}
                            </Form>
                        </Formik>
                    </div>
                    <div className={submitted ? 'SubmittedMessage' : 'hidden'}>
                        <p>✅</p>
                        <h1>Your message has been sent</h1>
                        <p>We will be in contact with you within 24 hours</p>
                    </div>
            </div>
            <img className="ContactUsImage" src={contactUsImage}/>
        </>
    )
}

export default ContactUs;