import React from "react";
import "./Item.css";
import Button from "react-bootstrap/Button";

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="item-content">
          <Button variant="primary">{this.props.icon}</Button>
          <h2>{this.props.title}</h2>
          <p className="mb-0">
            {this.props.desc}
          </p>
        </div>
      </div>
    );
  }
}

export default Item;
