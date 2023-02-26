import './style/contact.css';
import './style/Mobile_screen.css';


const Contact = () => {
  return(
      <>
          <section className="contact-background-content mt-5">
              <div className="container-fluid">
                  <div className="row text-center">
                      <div className="col-md-12 col-sm-12 text-center">
                          <div className="contact-heading-content">
                              <h1>Contact Us</h1>
                              <div className="contact-link-content">
                                  <a href="">Soundcloud</a>
                                  <a href="">Instagram</a>
                                  <a href="">Twitter</a>
                              </div>
                              <div className="contact-input-btn-content">
                                  <input type="text" placeholder="Enter a valid email address"/>
                                  <button className="btn">SEND</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Contact;