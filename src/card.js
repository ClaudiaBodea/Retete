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
  MDBContainer,
  MDBCardImage
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

                <MDBCardImage
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                  className="img-fluid"
                />

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
//   render() {
//     return (
//       <MDBContainer>
//         <MDBRow className="mb-4">
//           <MDBCol sm="6">
//             <MDBCard>
//               <MDBCardBody>
//                 <MDBCardTitle>{this.props.nume}</MDBCardTitle>
//                 <MDBCardText>
//                   <h6>Dificultate:</h6>
//                   <p>{this.props.dificultate}</p>
//                   <h6>Ingrediente:</h6> <p>{this.props.ingrediente}</p>
//                   <h6>Preparare:</h6> <p>{this.props.preparare}</p>
//                 </MDBCardText>

//                 <MDBBtn
//                   gradient="aqua"
//                   className="float-right"
//                   id={this.props.id}
//                   onClick={this.props.stergeCard}
//                 >
//                   Sterge
//                 </MDBBtn>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     );
//   }
// }

// export default Card;
