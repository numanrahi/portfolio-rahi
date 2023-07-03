import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { FaUserAlt, FaLinkedin,FaFacebook, FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { BiSolidMessageAlt } from "react-icons/bi";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pk6af4p",
        "template_7fi0kdk",
        form.current,
        "vi9k8DJZjPtcYQPJ8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          toast("Message sent");
          const form = e.target;
          form.user_email.value = "";
          form.from_name.value = "";
          form.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div style={{ maxWidth: "1200px" }} className="mt-5 mx-auto">
      <div className="fs-2 text-center ">Contact Me</div>
      <div className="row pt-5 ">
        <section className="col-6">
          <div className="fs-5 text-center mb-5">Get In Touch</div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
              Email:{" "}
              <a
                className="text-decoration-none"
                href="mailto:arahi2994@gmail.com"
              >
                arahi2994@gmail.com
              </a>
            </div>
            <div>
              Phone:{" "}
              <a className="text-decoration-none" href="tel:+880 1712-707479">
                {" "}
                +880 1712-707479
              </a>
              <div>Location: Sylhet, Bangladesh</div>
            </div>
          </div>
          <div>
            <div className="fs-5 text-center mt-5">I'm also available in</div>
            <div className="text-center">
              <Link className="fs-2 p-3" to="https://www.linkedin.com/in/abdullah-al-numan-rahi-610611249/">
                <FaLinkedin />
              </Link>
              <Link className="fs-2 p-3" to="https://web.facebook.com/RahiX2020/">
                <FaFacebook />
              </Link>
              <Link className="fs-2 p-3" to="https://github.com/numanrahi">
              <FaGithub/>
              </Link>
            </div>
          </div>
        </section>
        <section className="col-6">
          <div className="fs-5 text-center mb-5">Drop your message</div>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <FaUserAlt /> Your Name
              </Form.Label>
              <Form.Control type="text" name="from_name" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <AiTwotoneMail /> Email address
              </Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <BiSolidMessageAlt /> Your Message Please
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                placeholder="Message"
              />
            </Form.Group>
            <input
              className="btn btn-primary w-100"
              type="submit"
              value="Send"
            />
          </Form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
