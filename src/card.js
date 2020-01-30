import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

class Card extends Component {
  render() {
    return (
      <>
        <h2>{this.props.nume}</h2>

        <h4>Dificultate:{this.props.dificultate}</h4>

        <h6>
          Ingrediente: {this.props.ingrediente}
          <MDBBtn
            gradient="peach"
            className="float-right"
            id={this.props.id}
            onClick={this.props.stergeCard}
          >
            Sterge
          </MDBBtn>
        </h6>
        <p>Preparare: {this.props.preparare}</p>
        <hr />
      </>
    );
  }
}

export default Card;
