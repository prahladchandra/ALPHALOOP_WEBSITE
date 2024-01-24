import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const messageRef = React.useRef(null);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // Send form data to the server
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      // Handle the server response
      if (response.ok) {
        // Display success message
        messageRef.current.innerHTML =
          "<div class='alert alert-success'>Message sent successfully</div>";
        // Reset form values
        resetForm();
      } else {
        // Display error message
        messageRef.current.innerHTML =
          "<div class='alert alert-danger'>Failed to send message. Please try again later.</div>";
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    } finally {
      // Reset submitting state
      setSubmitting(false);
    }
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form id="contact-form">
                  <div className="messages" ref={messageRef}></div>
                  <div className="controls">
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <button type="submit" className="butn bord">
                    <span>Send Message</span>
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                <h5>{ContactFromDate.phone}</h5>
              </div>
              <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>
              <div className="social mt-50">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
