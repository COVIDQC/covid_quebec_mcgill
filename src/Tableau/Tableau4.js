import React, { Component } from 'react';  
  
  
class Tableau4 extends Component {  
  componentDidMount() {  
    this.initViz()  
  }  
  
  
  initViz() {  
    const vizUrl = 'https://public.tableau.com/views/COVID-19QUEBECDASHBOARD_Automatic/Trends1';  
    const vizContainer = this.vizContainer;
    const options = {
        hideTabs: true,
        device: localStorage.getItem("device"),
        toolbarPosition: "ApiToolbarPosition.Top",
    };
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)  
  }  
  
  render() {  
    return (  
      <div ref={(div) => { this.vizContainer = div }}>  
      </div>  
    )  
  }  
  
}  

export default Tableau4;