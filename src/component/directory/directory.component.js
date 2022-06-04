import React,{Component} from "react"
import MenuItem from "../menuitem/menu-item.component"
import "./directory.styles.css"

class Directory extends Component {
    constructor() {
    super()


        this.state = {
            sections: [{
                title: "HATS",
                imageUrl: "https//i.ibb.co/cvpntL1/hats.png",
                id: 1,
                LinkUrl: "hats"
            },
            {
                title: "JACKETS",
                imageUrl: "https//i.ibb.co/px2tCc3/jackets.png",
                id: 2,
                LinkUrl: "jackets"
            },
            {
                title: "SNEAKERS",
                imageUrl: "https//i.ibb.co/0jqHpnp/sneakers.png",
                id: 3,
                LinkUrl: "sneakers"
            },
            {
                title: "WOMENS",
                imageUrl: "https//i.ibb.co/GCCdy8t/womens.png",
                size: "large",
                id: 4,
                LinkUrl: "womens"
            },
            {
                title: "MENS",
                imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                size: "large",
                id: 5,
                LinkUrl: "mens"
            }]
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {this.state.sections.map(({id,...spreadValues}) => 
                <MenuItem key= {id} {...spreadValues}/>
                )}
            </div>
        )
    }
    
}

export default Directory;