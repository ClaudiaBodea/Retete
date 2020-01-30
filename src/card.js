import React, { Component } from "react";
// import { MDBBtn } from "mdbreact";
import {
  MDBJumbotron,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer
} from "mdbreact";

class Card extends Component {
  render() {
    return (
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="p-0">
              <MDBCardBody>
                <MDBCardTitle className="h3">{this.props.nume}</MDBCardTitle>
                <MDBCardText>
                  <h6>Dificultate:</h6>
                  <p>{this.props.dificultate}</p>
                  <h6>Ingrediente:</h6> <p>{this.props.ingrediente}</p>
                  <h6>Preparare:</h6> <p>{this.props.preparare}</p>
                </MDBCardText>
                <MDBBtn
                  gradient="aqua"
                  id={this.props.id}
                  onClick={this.props.stergeCard}
                >
                  Sterge
                </MDBBtn>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Card;

// class Card extends Component {
//     render() {
//       return (
//         <>
//           <h2>{this.props.nume}</h2>

//           <h4>Dificultate:{this.props.dificultate}</h4>

//           <h6>
//             Ingrediente: {this.props.ingrediente}
//             <MDBBtn
//               gradient="aqua"
//               className="float-right"
//               id={this.props.id}
//               onClick={this.props.stergeCard}
//             >
//               Sterge
//             </MDBBtn>
//           </h6>
//           <p>Preparare: {this.props.preparare}</p>
//           <hr />
//         </>
//       );
//     }
//   }

//   export default Card;
