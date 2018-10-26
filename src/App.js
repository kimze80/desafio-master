import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://desafio-mastertech.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Carregando...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <img src={item.picture} />
              </li>
            ))}
          </ul>
          <header>
            <div class="logo">
              <img src="arquivos/netflix.png" alt="Logo" />
            </div>
            <nav>
              <ul>
                <li>Home</li>
                <li>Desafio</li>
                <li>Missão</li>
              </ul>
            </nav>
          </header>
          <div id="banner">
            <button>
              <p>Teste por 30 Dias</p>
            </button>
          </div>
          <div class="seriesbox">
            <div id="series">
              <div class="imagem" />
              <h4 />
              <p />
            </div>

            <div id="series">
              <div class="imagem" />
              <h4 />
              <p />
            </div>

            <div id="series">
              <div class="imagem" />
              <h4 />
              <p />
            </div>
          </div>

          <div class="info">
            <div>
              <h5 />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
