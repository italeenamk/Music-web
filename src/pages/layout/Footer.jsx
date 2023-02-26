import './style/footer.css';
import './style/Mobile_screen.css';


const Footer = () => {
  return(
      <>
          <section className="footer-background-color-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12 text-center">
                          <div className="footer-text-content">
                              <h3>Sample text.Click to select the text box. Click again or double<br/>
                              click to start editing the text.
                              </h3>
                              <div className="footer-web-link">
                                  <a href="">Website Templates</a> <span>created with</span><a href=""> Website Builder Software.</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Footer;