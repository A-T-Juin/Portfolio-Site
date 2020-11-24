import React, { Component } from 'react';

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(network => {
        return (
          <li key={network.name}>
          <a href={network.url}>
            <i className={network.className} />
          </a>
        </li>
      )}
    )};
    return (
      <section id="social">
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                {networks}
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#header"><i className="icon-up-open"></i></a></div>
          </div>
       </footer>
      </section>
    );
  }
}

export default Footer;
