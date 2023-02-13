import React from "react";
import Button from 'react-bootstrap/Button';
import "./Banner.css";

class Banner extends React.Component{
    render() {
        return(
            <div className="banner">
                <div className="container">
                    <div className="banner-content">
                        <h1>A warm welcome!</h1>
                        <p >Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <Button variant="primary">Call to action</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;