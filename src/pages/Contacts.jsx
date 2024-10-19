import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contacts.css'

function Contacts() {
    return (
        <div className="form-container">
            <h3>Contact Form</h3>
            
            <ContactForm />
        </div>
    );
}

export default Contacts;
