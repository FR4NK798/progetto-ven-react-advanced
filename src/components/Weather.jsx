import Card from "react-bootstrap/Card";
import { Component } from "react";
import { useState, useEffect } from "react";

class Weather extends Component {
  state = {
    // weatherAdv : '',
    locationID: "Senise",
    weatherData: "",
    weatherDataFiveDays: "",
  };

  render() {
    const gradi = Math.ceil(this.props.data.main.temp - 273);
    return (
      <>
        {/* <Card className="position-relative weather-position"> */}
        <Card>
          {/* <Card.Img
              variant="top"
            //   src={this.state.movieData.Poster}
              alt="movie poster"
            /> */}
          <Card.Body>
            {console.log("dati da ricerca", this.props.data)}
            {/* PAESE */}
            {/* <Card.Title>{this.state.dati.name}</Card.Title> */}
            <Card.Title>{this.props.data.name}</Card.Title>
            {/* TEMPERATURA */}
            <Card.Text>
              {/* <Card.Title>{this.state.dati.main.temp}</Card.Title> */}
              <Card.Title>{gradi} &#176;</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default Weather;
