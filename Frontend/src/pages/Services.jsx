import { Component } from "react";

class Services extends Component{
    render(){
        {/* Important */}
        {/* In one Component we can return only one parent element */}
        return(
            <> {/* Fregment Tag <></> */} 
                <div>
                    <h1>Services</h1>
                    <p>Class Component</p>
                </div>
                <p>Fregment Tag</p>
            </>
        )
    }
}
export default Services