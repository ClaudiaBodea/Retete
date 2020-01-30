import React, { Component } from "react";
import Card from "./card";

class Retete extends Component {
  render() {
    const lista = this.props.carduri.map(item => (
      <Card
        key={item.id}
        id={item.id}
        dificultate={item.dificultate}
        ingrediente={item.ingrediente}
        nume={item.nume}
        preparare={item.preparare}
        stergeCard={this.props.stergeCard}
      />
    ));

    return (
      <div>
        <h2 className="text-center">Retete alese</h2>
        <hr />
        {lista}
      </div>
    );
  }
}

export default Retete;
