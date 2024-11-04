import React, { useState } from "react";
import styles from './ContactUsForm.module.css';
import swal from "sweetalert";

const ContactUsForm = () => {
    const [formContent, setFormContent] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormContent((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();


    const { name, email, mobile, message } = formContent;
        if (!name || !email || !mobile || !message) {
            swal("Error!", "Please fill in all fields.", "error");
            return; // Exit the function if validation fails
        }

        // Use SMTP.js to send email
        window.Email.send({
            Host: "smtp.elasticemail.com", // Replace with your SMTP host
            Username: "connect.innovatorunited@gmail.com", // Your email address
            Password: "0A1EBDB66701DEF5217471A19C311D5A13CA",    // Your email password
            To: 'connect.innovatorunited@gmail.com',  // Your email address where you want to receive the messages
            From: 'connect.innovatorunited@gmail.com',
            Subject: "New Contact Form Message from INNOVATOR UNITED",
            Body: `
                <p>Name: ${formContent.name}</p>
                <p>Email: ${formContent.email}</p>
                <p>Mobile: ${formContent.mobile}</p>
                <p>Message: ${formContent.message}</p>
            `,
        }).then((message) => {
            if (message === "OK") {
                swal("Success!", "Your email has been sent successfully!", "success"); // Fix 'Swal' to 'swal'
                setFormContent({
                    name: "",
                    email: "",
                    mobile: "",
                    message: ""
                });
            } else {
                swal("Error!", "Failed to send the email. ", "error"); 
            }
        });
    };

    return (
        <div className={`container ${styles.contain} overflow-hidden`}>
            <p data-aos='fade-up' className={`${styles.heading} mx-auto`}>We'd Love to Hear From You</p>
            <p className={styles.email} data-aos='fade-up'>You can email us</p>
            <div className="row">
                <div className="col-md-6" data-aos='fade-right' style={{ textAlign: 'left' }}>
                    <label className={styles.label}>Name</label><br />
                    <input
                        name="name"
                        value={formContent.name}
                        onChange={handleChange}
                        className={styles.input}
                        type="text"
                        pattern="[A-Za-z ]+"
                        placeholder="Enter your name"
                        required
                    />
                    <label className={styles.label}>Email</label><br />
                    <input
                        name="email"
                        value={formContent.email}
                        onChange={handleChange}
                        className={styles.input}
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <label className={styles.label}>Mobile Number</label><br />
                    <input
                        name="mobile"
                        value={formContent.mobile}
                        onChange={handleChange}
                        className={styles.input}
                        type="tel"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        placeholder="Enter your mobile number"
                        required
                    />
                </div>
                <div className="col-md-6" data-aos='fade-left' style={{ textAlign: 'left' }}>
                    <label className={styles.label}>Message</label><br />
                    <textarea
                        name="message"
                        value={formContent.message}
                        onChange={handleChange}
                        className={`${styles.input} ${styles.msg}`}
                        placeholder="Enter your message here..."
                        minLength="10"
                        required
                    />
                    <div style={{ textAlign: 'right' }}>
                        <button
                            className={`btn custom_btn ${styles.btn}`}
                            type="submit"
                            onClick={handleSubmit}
                        >
                            SEND
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsForm;
