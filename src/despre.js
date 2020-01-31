import React, { Component } from "react";
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

class Despre extends Component {
  render() {
    return (
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="p-0">
              <MDBCardBody>
                <MDBCardTitle className="h3">Despre...</MDBCardTitle>
                <MDBCardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
                />
                <MDBCardText>
                  "~ ACEST BLOG LE ESTE DEDICAT DOAMNELOR DIN FAMILIA MEA: MAMA
                  AMI, STRABUNICA BUIA SI BUNICA MARLENE ~ Da, inca un blog de
                  cooking. Stiu, sunt sute in spatiul internautic romanesc si
                  zeci de mii in cel international. De ce l-am creat? Din
                  pasiune. E un hobby care imbina aromele, gusturile si efectele
                  vizuale. Compozitiile in general. Pentru ca ma simt bine in
                  bucatarie punand in practica retetele vechi, consacrate si
                  testandu-le pe cele noi, insolite. Pentru ca e un domeniu fara
                  limite care permite cam orice. De aceea nu vreau sa ma
                  definesc temporo-spatial in niciun fel. Gatesc de toate, noi
                  si vechi, romanesti si straine. Improvizez enorm. Asta pentru
                  ca-mi place jazz-ul :). Si rock-ul." Fragment din Savori
                  Urbane.
                </MDBCardText>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Despre;
