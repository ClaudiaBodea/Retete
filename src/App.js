import React, { Component } from "react";
import Retete from "./retete";
import Formular from "./formular";
import Despre from "./despre";
import { Route } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import "./App.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer
} from "mdbreact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carduri: [
        {
          id: 1,
          dificultate: "usor",
          nume: "Cheesecake cu ciocolata",
          ingrediente:
            "250g biscuiti digestivi Sondey, 100g unt Pilos, 600g crema de branza natur Goldessa, 400g ciocolata amaruie FinCarre, 160g zahar pudra vanilat Castello, 200ml frisca lichida Pilos (smantana dulce pentru frisca)",
          preparare:
            "Toate ingredientele se aseaza in tava si se dau o jumatate de ora la congelator"
        },
        {
          id: 2,
          dificultate: "mediu",
          nume: "Cheesecake cu mascarpone si capsune",
          ingrediente:
            "250g biscuiti digestivi Sondey, 100g unt Milbona topit, 400g (2 cutii) crema de branza Goldessa natur, 250g mascarpone Lovilio",
          preparare:
            "Dam prin blender biscuitii si untul topit. Punem compozitia obtinuta in tava, o tasam si nivelam cu o spatula. Dam blatul la frigider pana ne ocupam de umplutura."
        },
        {
          id: 3,
          dificultate: "greu",
          nume: "Cheesecake fara coacere ",
          ingrediente:
            "150g biscuiti digestivi Sondey, 50g unt Pilos topit, 1/2 lingurita scortisoara, 2 linguri zahar brun Belbake",
          preparare:
            "Dam biscuitii prin blender si ii macinam impeuna cu zaharul brun. Adaugam unt topit si scortisoara, amestecam. Lasam amestecul sa se odineasca pana pregatim crema. Pentru crema amestecam crema de branza, piureul de dovleac, zaharul pudra, vanilie, condimente. Le amestecam cu mixerul pana avem o crema omogena."
        }
      ]
    };

    this.adaugCard = this.adaugCard.bind(this);
    this.stergeCard = this.stergeCard.bind(this);
  }

  adaugCard(act) {
    const { carduri } = this.state;
    var sirAct = carduri;
    sirAct.push({
      id: sirAct.length ? sirAct[sirAct.length - 1].id + 1 : 1,
      dificultate: act.dificultate,
      nume: act.nume,
      ingrediente: act.ingrediente,
      preparare: act.preparare
    });
    this.setState({ carduri: sirAct });
    localStorage.setItem("bucate", JSON.stringify(sirAct));
  }

  stergeCard(ev) {
    const idSup = parseInt(ev.target.id); //  id e convertit in intreg
    const { carduri } = this.state;
    const sirNou = carduri.filter(item => {
      return item.id !== idSup;
    });
    this.setState({ carduri: sirNou });
    localStorage.setItem("bucate", JSON.stringify(sirNou));
  }

  componentDidMount() {
    if (localStorage.getItem("bucate")) {
      this.setState({ carduri: JSON.parse(localStorage.getItem("bucate")) });
    } else {
      this.setState({ carduri: [] });
    }
  }

  render() {
    return (
      <div className="container">
        <MDBNavbar color="default-color" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Bucate</strong>
          </MDBNavbarBrand>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Retete</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/adaug">Adauga</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/despre">Despre</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>

        <Route
          exact
          path="/"
          render={props => (
            <Retete
              {...props}
              carduri={this.state.carduri}
              stergeCard={this.stergeCard}
            />
          )}
        />
        <Route
          path="/adaug"
          render={props => <Formular {...props} adaugCard={this.adaugCard} />}
        />
        <Route path="/despre" component={Despre} />
      </div>
    );
  }
}

export default App;
