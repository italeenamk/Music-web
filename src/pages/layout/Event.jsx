import './style/event.css';
import './style/Mobile_screen.css';
import event_first_img from './imges/front-view-man-holding-viny.jpg';
import event_second_img from './imges/music-album.jpg';
import event_third_img from './imges/square-music.jpg';


const Event = () => {
  return(
      <>
          <section className="event-bg-color-content">
              <div className="container-fluid text-white mt-5 pt-5">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="event-heading-content">
                              <h1>Lastest Events</h1>
                          </div>
                      </div>
                  </div>
                  {/*colum-1*/}
                  <div className="row pt-5">
                      <div className="col-md-2 col-sm-12 text-center">
                          <div className="event-img-content">
                              <img src={ event_first_img } alt="" className="img-fluid"/>
                          </div>
                      </div>
                      <div className="col-md-10 col-sm-12">
                          <div className="event-text-content">
                              <h2>Vatos Locos and Friends Friday 5.26</h2>
                              <p>May 19, 2022</p>
                              <button className="btn">MORE</button>
                          </div>
                      </div>
                  </div>
                  {/*colum-2*/}
                  <div className="row pt-5">
                      <div className="col-md-2 col-sm-12 text-center">
                          <div className="event-img-content">
                              <img src={ event_second_img } alt="" className="img-fluid"/>
                          </div>
                      </div>
                      <div className="col-md-10 col-sm-12">
                          <div className="event-text-content">
                              <h2>Jean Pierre's Wynwood Remix</h2>
                              <p>March 15, 2022</p>
                              <button className="btn">MORE</button>
                          </div>
                      </div>
                  </div>
                  {/*colum-3*/}
                  <div className="row pt-5">
                      <div className="col-md-2 col-sm-12 text-center">
                          <div className="event-img-content">
                              <img src={ event_third_img } alt="" className="img-fluid"/>
                          </div>
                      </div>
                      <div className="col-md-10 col-sm-12">
                          <div className="event-text-content">
                              <h2>Vatos Locos and Friends Friday 5.26</h2>
                              <p>Februay 6, 2023</p>
                              <button className="btn">MORE</button>
                          </div>
                      </div>
                  </div>
                  <div className="event-img-link">
                      <p>Image from <span>Freepik</span></p>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Event;