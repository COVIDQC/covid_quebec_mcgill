import React, { Component } from 'react'; 
// eslint-disable-next-line no-unused-vars 
import tableau from 'tableau-api';  
  
var viz;  
class TableauProvinceAgeDist extends Component { 
  shouldComponentUpdate(){
    return viz === null;
  } 
  componentDidMount() {  
    this.initViz()  
  }  
  
  
  initViz() {  
    const vizUrl = 'https://public.tableau.com/views/COVID-19QUEBECDASHBOARD_Automatic/QCAgegroup?:display_count=y&publish=yes&:origin=viz_share_link';  
    const vizContainer = this.vizContainer;
    const options = {
        hideTabs: true,
        device: localStorage.getItem("device"),
        toolbarPosition: "ApiToolbarPosition.Top",
    };
    viz = new window.tableau.Viz(vizContainer, vizUrl, options)  
  }  
  
  render() {  
    return (  
      <div ref={(div) => { this.vizContainer = div }}>  
      </div>  
    )  
  }  
  
}  

export default TableauProvinceAgeDist 