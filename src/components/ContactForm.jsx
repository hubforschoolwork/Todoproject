import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', message: '' });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

            if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
            alert('All fields are required!');
            return;
        }

        setSubmissionStatus('Your contact information has been submitted.');

        setFormData({ firstname: '', lastname: '', email: '', message: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-grid'>                
                <label>First Name:
                    <input type="text" id='firstname' name="firstname" value={formData.firstname} onChange={handleChange} />
                </label>
            </div>
            
            <div className='form-grid'>
                <label>Last Name:
                    <input type="text" id='lastname' name="lastname" value={formData.lastname} onChange={handleChange} />
                </label>
            </div>

            <div className='form-grid'>
                <label>Email:
                    <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} />
                </label>
            </div>

            <div className='form-grid'>
                <label>Message:
                    <textarea name="message" id='message' value={formData.message} onChange={handleChange} />
                </label>
            </div>

            <div className='form-grid'>
                <button type="submit" id='button'>Submit</button>
                {submissionStatus && <p>{submissionStatus}</p>}
            </div>
        </form>
    );
}

export default ContactForm;






























// import React, { useState } from 'react';

// function ContactForm() {
//     const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', message: '' });
//     const [submissionStatus, setSubmissionStatus] = useState('');

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
//             alert('All fields are required!');
//             return;
//         }

// //new code

//         // Display a submission status message
//         setSubmissionStatus('Your message has been submitted.');

//         // Clear the form data
//         setFormData({ firstname: '', lastname: '', email: '', message: '' });
//     };


//         // fetch('your-api-endpoint', {
//         //     method: 'POST',
//         //     body: JSON.stringify(formData),
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //     },
//         // })
//         // .then(response => {
//         //     if (response.ok) {
//         //         setSubmissionStatus('Your message has been sent successfully.');
//         //         setFormData({ firstname: '', lastname: '', email: '', message: '' });
//         //     } else {
//         //         setSubmissionStatus('There was an error sending your message.');
//         //     }
//         // })
//         // .catch((error) => {
//         //     console.error('Error:', error);
//         //     setSubmissionStatus('There was an error sending your message.');
//         // });
//     };

//         return (
//         <form onSubmit={handleSubmit}>

//             <div className='form-grid'>            
//                 <label>First Name:
//                     <input type="text" id='firstname' name="firstname" value={formData.firstname} onChange={handleChange} />
//                 </label>
//             </div>
            

//             <div className='form-grid'>
//                 <label>Last Name:
//                     <input type="text" id='lastname' name="lastname" value={formData.lastname} onChange={handleChange} />
//                 </label>
//             </div>


//             <div className='form-grid'>
//                 <label>Email:
//                     <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} />
//                 </label>
//             </div>

//             <div className='form-grid'>
//                 <label>Message:
//                     <textarea name="message" id='message' value={formData.message} onChange={handleChange} />
//                 </label>
//             </div>

//             <div className='form-grid'>
//             <button type="submit" id='button'>Submit</button>
//             {submissionStatus && <p>{submissionStatus}</p>}
//             </div>

//         </form>
//     );


// export default ContactForm;

