import sidebar_img from './imges/side_img.jpg';
import './style/Sidebar.css';
import './style/Mobile_screen.css';


const Sidebar = () => {
  return(
      <>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-6 col-sm-12">
                      <div className="sidebar-img-content">
                          <img src={ sidebar_img } alt="" className="img-fluid"/>
                      </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                      <div className="sidebar-text-content">
                          <div className="sidebar-heanding-content">
                              <h1>DJ Night</h1>
                              <p>I have everything to make your life bright!</p>
                          </div>
                          <div className="sidebar-information-content">
                              <h4>Manager Don Johnson</h4>
                              <p>hellodon@gmail.com</p>
                              <p>+1 123 456 7890</p>
                          </div>
                          <div className="sidebar-information-content">
                              <h4>Director Rita Smith</h4>
                              <p>hellorita@gmail.com</p>
                              <p>+1 123 456 7890</p>
                          </div>
                          <div className="sidebar-img-link">
                              <p>IMAGE FROM <span>FREEPIK</span></p>
                          </div>
                          <div className="sidebar-circle-boll">
                              <span></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Sidebar;