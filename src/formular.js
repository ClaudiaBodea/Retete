import React, { Component } from "react";
import { MDBBtn, MDBInput } from "mdbreact";

class Formular extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      dificultate: "",
      nume: "",
      ingrediente: "",
      preparare: "",
      id: 0
    };

    this.state = this.initialState; // aici in state am pus initial date pt a fi expus ca si formular gol

    //  Functii de tratare a evenimentelor "change" si "submit"
    this.handleChange = this.handleChange.bind(this);
    this.adaugaCard = this.adaugaCard.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;

    this.setState({
      [name]: value
    });
  }

  adaugaCard() {
    this.props.adaugCard(this.state);
    this.setState(this.initialState); // Golesc formularul
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Introduceti reteta</h2>
        <form className="mx-3 grey-text">
          <MDBInput
            name="dificultate"
            label="Dificultate"
            icon="clock"
            hint="usor"
            group
            type="text"
            value={this.state.dificultate}
            onChange={this.handleChange}
          />
          <MDBInput
            name="nume"
            label="Nume"
            icon="edit"
            hint="Pancakes"
            group
            type="text"
            value={this.state.nume}
            onChange={this.handleChange}
          />
          <MDBInput
            name="ingrediente"
            label="Ingrediente"
            icon="map"
            group
            type="text"
            value={this.state.ingrediente}
            onChange={this.handleChange}
          />
          <MDBInput
            name="preparare"
            label="Preparare"
            icon="sticky-note"
            group
            type="textarea"
            value={this.state.preparare}
            onChange={this.handleChange}
          />
          <div className="text-center">
            <MDBBtn color="indigo" onClick={this.adaugaCard}>
              Adaugă reteta
            </MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default Formular;
