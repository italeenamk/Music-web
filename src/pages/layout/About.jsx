import './style/about.css';
import './style/Mobile_screen.css';
import about_img from "./imges/about-img.jpg";


const About = () => {
  return(
      <>
          <section className="about-background-content">
              <div className="container-fluid ">
                  <div className="row pt-5">
                      <div className="col-md-3 col-sm-12"></div>
                      <div className="col-md-6 col-sm-12">
                          <div className="about-img-content">
                              <img src={ about_img } alt="" className="img-fluid"/>
                          </div>
                          <div className="about-text-link-content text-right">
                              <div className="about-img-link">
                                  <p>Image from <span>Freepik</span></p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                          <div className="about-card-content-div">
                              <div className="card">
                                  <div className="about-card-text-content">
                                      <h1>About Me</h1>
                                      <p className="about-card-paragraph-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae distinctio
                                         olores quas quod suscipit tenetur totam unde vel voluptatum? Beatae ea
                                          eaque facere fugit minima perspiciatis quisquam sint suscipit!</p>
                                        <button className="btn">LEARN MORE</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/*<div className="col-md-4 col-sm-12 pt-5">*/}
                      {/*    <div className="about-card-content pt-5 pb-5">*/}
                      {/*        <div className="card">*/}
                      {/*            <div className="bio-card-text-content">*/}
                      {/*                <h1>Biography</h1>*/}
                      {/*                <p className="bio-card-paragraph-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae distinctio*/}
                      {/*                    dolores quas quod suscipit tenetur totam unde vel voluptatum? Beatae ea*/}
                      {/*                    eaque facere fugit minima perspiciatis quisquam sint suscipit!</p>*/}
                      {/*                <div className="bio-img-link">*/}
                      {/*                    <p>Image from <span>Freepik</span></p>*/}
                      {/*                </div>*/}
                      {/*                <button className="btn">LEARN MORE</button>*/}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*</div>*/}
                      {/*<div className="col-md-7 col-sm-12 p-5">*/}
                      {/*    <div className="bio-img-content">*/}
                      {/*        <img src={ bio_img } alt="" className="img-fluid"/>*/}
                      {/*    </div>*/}
                      {/*</div>*/}
                  </div>
              </div>
          </section>
      </>
  )
}

export default About;