import React from "react"
import ShopData from "./shop.data"

import PreviewCollection from "../../component/preview-collection/preview-collection.component"

class ShopPage extends React.Component{
   constructor(prop) {
     super(prop) 
   

   this.state = {
    collections : ShopData
   }
}

    render() {
      const { collections } = this.state.collections
      
      return(
        <div className="shop-page">
          {
            collections.map(({ id, ...otherCollecionProp}) => {
               <PreviewCollection key={id} {...otherCollecionProp}/>
            })
          }
        </div>
      )
    }
}

export default ShopPage