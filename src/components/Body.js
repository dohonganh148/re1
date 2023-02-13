import React from "react";
import "./Body.css";
import Banner from "./Banner";
import Item from "./Item";
import {
  Collection,
  CloudDownload,
  CardHeading,
  Bootstrap,
  Code,
  PatchCheck,
} from "react-bootstrap-icons";

let itemList = [
  {
    icon: <Collection size={32} />,
    title: "Fresh new layout",
    desc: "With Bootstrap 5, we've created a fresh new layout for this template!",
  },
  {
    icon: <CloudDownload size={32} />,
    title: "Free to download",
    desc: "As always, Start Bootstrap has a powerful collectin of free templates.",
  },
  {
    icon: <CardHeading size={32} />,
    title: "Jumbotron hero header",
    desc: "The heroic part of this template is the jumbotron hero header!",
  },
  {
    icon: <Bootstrap size={32} />,
    title: "Feature boxes",
    desc: "We've created some custom feature boxes using Bootstrap icons!",
  },
  {
    icon: <Code size={32} />,
    title: "Simple clean code",
    desc: "We keep our dependencies up to date and squash bugs as they come!",
  },
  {
    icon: <PatchCheck size={32} />,
    title: "A name you trust",
    desc: "Start Bootstrap has been the leader in free Bootstrap templates 2013!",
  },
];

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <Banner />
        <div className="container">
          <div className="item-row">
            {itemList.map((item, index) => (
              <div key={index}>
                <Item {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
