import { useEffect, useRef, FormEvent } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Button } from "../ui/button";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      const data = { name, email, message };

      fetch("https://tamim-portfolio-server.vercel.app/email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    window.location.reload();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="max-w-6xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="300"
      id="contact"
    >
      <SectionTitle
        heading={"Contact with me"}
        subheading={"Contact"}
      ></SectionTitle>
      <div className="flex gap-10 md:gap-0 flex-col-reverse md:flex-row justify-center items-center">
        <div data-aos="fade-up-right" data-aos-delay="300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583844867!2d91.81983602365993!3d24.900058346849924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1705317955454!5m2!1sen!2sbd"
            width="100%"
            height="430"
            className="w-full md:w-[500px]"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div data-aos="fade-up-left" data-aos-delay="300" className="w-full">
          <div className="contact-container mx-auto">
            <form ref={form} onSubmit={sendEmail} className="form">
              <div className="descr">Contact Form</div>
              <div className="input-for-contact">
                <input required autoComplete="off" type="text" name="name" />
                <label htmlFor="name">Name</label>
              </div>

              <div className="input-for-contact">
                <input required autoComplete="off" name="email" type="email" />
                <label htmlFor="email">E-mail</label>
              </div>

              <div className="input-for-contact">
                <textarea
                  required
                  cols={30}
                  rows={1}
                  id="message"
                  name="message"
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
