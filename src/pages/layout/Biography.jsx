import './style/biography.css';
import './style/Mobile_screen.css';
import bio_img from './imges/bio-img.jpg';


const Biography = () => {
  return(
      <>
          <section className="biography-background-content">
              <div className="container-fluid">
                  <div className="row pt-5">
                      <div className="col-md-4 col-sm-12 pt-5">
                          <div className="bio-card-content pt-5 pb-5">
                              <div className="card">
                                 <div className="bio-card-text-content">
                                     <h1>Biography</h1>
                                     <p className="bio-card-paragraph-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae distinctio
                                         dolores quas quod suscipit tenetur totam unde vel voluptatum? Beatae ea
                                         eaque facere fugit minima perspiciatis quisquam sint suscipit!</p>
                                     <div className="bio-img-link">
                                         <p>Image from <span>Freepik</span></p>
                                     </div>
                                     <button className="btn">LEARN MORE</button>
                                 </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-7 col-sm-12 p-5">
                          <div className="bio-img-content">
                              <img src={ bio_img } alt="" className="img-fluid"/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Biography;