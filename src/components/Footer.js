import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer mt-auto py-4 bg-light">
        <div class="container">
          <img src="logo.png" alt="logo" className="logo"></img>
          <br />
          <span class="text-muted footer-text">
            Made By <a href="https://github.com/fikridzkr">Fikri Dzakir</a>
          </span>
        </div>
      </footer>
    );
  }
}
