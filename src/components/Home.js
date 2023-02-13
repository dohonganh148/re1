import React from "react";
import "./Home.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Home extends React.Component{
    render() {
        return(
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Home;