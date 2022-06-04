import React from "react"
import "./menu-item.styles.scss"
import { useNavigate } from "react-router-dom"

const WithRouter =  function withLocation(Child) {
    return function WithRoute(props) {
      const navigate = useNavigate();
      // other relevant props
      // ...
      return <Child {...props} navigate={navigate} />;
    };
  }

const MenuItem = ({title,imageUrl,size,navigate}) => {
    return ( 
            <div className = {`${size} menu-item`} onClick={() => {
              navigate("/shop")
            }}>
              <div className="background-image"
              style={{
                backgroundImage: `url(${imageUrl})`
              }}/>
              <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
              </div> 
            </div>
    )
}

export default WithRouter(MenuItem);



// FREECODECAMP
//3