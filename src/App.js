import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import Drawer from "./Drawer";
import SEO from "./components/SEO";
import NavBarMobile from './NavBarMobile';
import DrawerMobile from './DrawerMobile';

if (isMobile) {
  localStorage.setItem("device", "mobile");
} else {
  localStorage.setItem("device", "desktop");
}

const styles = {
  appBar: {
    top: "auto",
    bottom: 0,
    position: "absolute",
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#334B63',
    color: '#fff',
    position: 'relative',
}
  
};


class App extends Component{
  constructor(props){
    super(props);
  }


  render(){

    const renderDrawer = () => {
            if (isMobile) {
              return  <DrawerMobile/>;
            } else {
              return <Drawer/>;
            }
    }
      
    
      return (
        <div className="page-container">
          <div className="content-wrap">
            
            <Router basename={process.env.PUBLIC_URL}>
              <Route component={App} path="/">
                <Redirect from="*" to="/" />
              </Route>
            </Router>
          {renderDrawer()}
          <footer style={styles.footer}>
            <div className={isMobile ? "mobileFooter_" : "footer_" }>
              <span style={{ display: "inline-block", textAlign: "Center" }}>
                <br></br>
                <br></br>
                <img
                  src="./mcgillfooter_transparent.png"
                  alt=""
                  align="center"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "30%",
                  }}
                />
                <b>
                  <font
                    textAlign="center"
                    face="Nunito Sans"
                    color="white"
                    size="2"
                  >
                    <br></br>
                    Developed by McGill University, Desautels Faculty of
                    Management students
                  </font>
                  <br /> <br />
                </b>
                <br></br>
                <font
                  textAlign="center"
                  face="Nunito Sans"
                  color="white"
                  size="2"
                >
                  This website and its contents herein, including all data,
                  mapping, and analysis is provided to the public strictly for
                  educational purposes. This data relies upon publicly available
                  from Quebec's government (and foreign governments), which has
                  been authorized for common usage. Reliance on the Website for
                  medical guidance or use of the Website for commercial purposes
                  is strictly prohibited. Managers of this website are not
                  responsible for source data or for any use of these data that
                  goes beyond purely educational purposes.
                  <br></br>
                  <br></br>
                </font>
                <hr className="rounded"></hr>
                <br />
                <font face="Nunito Sans" color="white" size="2">
                  <b>Faculty advisor: &nbsp;</b>
                </font>
                <a
                  href="https://www.mcgill.ca/desautels/juan-camilo-serpa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  style={{ color: "white", fontFamily: "Nunito Sans" }}
                >
                  Juan Camilo Serpa
                </a>{" "}
                <font face="Nunito Sans" color="white" size="2">
                  • <b>Website developed by:</b> Bradley McBain, Brendan Marks
                  (McGill Engineering Students), Janna Agustin, Bogdan Tanasie,
                  Loreina Chew
                  <br></br>
                  <b> Content designed by:</b> Ruben Alba, Venkatesh Chandra,
                  Jonathan Guzzo, Ramy Hammam, Jessica Zhang, Jasmine Jiang,
                  Omar Lafif, Hana Galal, Guillaume Lapierre-Berger, Demi Wei,
                  Katianicia Nafissatou & Jean Parenty
                  <br></br>
                  <br></br>
                  Hosted with{" "}
                  <a
                    href="https://zeit.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                    style={{ color: "white", fontFamily: "Nunito Sans" }}
                  >
                    Zeit Now
                  </a>
                  . Special thanks to Design is Yummy for its advice on web page
                  design.
                  <br></br>
                  <br></br>
                </font>
                {/*<font face="Nunito Sans" size='2'>Other links from McGill University:&emsp;</font>
                    <a href="http://moitessier-group.mcgill.ca/covid19/covid.php" target="_blank" className="link" style={{"color": "white", 'fontFamily': 'Nunito Sans', 'font-size': '13px'}}>
                    Moitessier Research Group
                    </a>&emsp;&emsp;&emsp;
                    <a href="https://gic.geog.mcgill.ca/covid-19/" target="_blank" className="link" style={{"color": "white", 'fontFamily': 'Nunito Sans', 'font-size': '13px'}}>
                    McGill's GIC
                     </a>&emsp;&emsp;&emsp;
                    <a href="https://platial.science" target="_blank" className="link" style={{"color": "white", 'fontFamily': 'Nunito Sans', 'font-size': '13px'}}>
                    Platial Analysis Lab 
                  </a>  */}
                <br></br>
              </span>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
