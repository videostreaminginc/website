import React from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">VideoStreaming</a>
          </div>
          <div className="social">
            <a href="https://twitter.com/voodfy" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/Voodfy" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Powerful web3 video platform</h1>
            <p>We are building a solution to give back control for video content creators.</p>
          </div>
          <a href="mailto:leandro@videostreaming.technology">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made at Brazil with {"<3"}</span>
        </div>
      </div>
    );
  }
}

export default App;
