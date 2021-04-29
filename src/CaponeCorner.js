import React from "react";
import "./CaponeCorner.css"

import p1 from "./Images/Capone1.jpg";
import p2 from "./Images/Capone2.jpg";
import p4 from "./Images/Capone4.jpg";
import p5 from "./Images/Capone5.jpg";
import p6 from "./Images/Capone6.jpg";
import p7 from "./Images/Capone7.jpg";



class CaponesCorner extends React.Component {
    render(){
        return(
          <div>
              <h2>Is there anything better than a Happy Pug?</h2>
                  <img class="photo" src={p1} alt="" />
                  <img class="photo" src={p2} alt="" />
                  <img class="photo" src={p4} alt="" />
                  <img class="photo" src={p5} alt="" />
                  <img class="photo" src={p6} alt="" />
                  <img class="photo" src={p7} alt="" />
              
          </div>
        )
    }


}

export default CaponesCorner