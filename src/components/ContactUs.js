import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    const resumeData = this.props.resumeData;
    const emailReceiver = 'athenarose964@gmail.com';
    const emailSubject = 'Regarding Your Portfolio';

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">Contact Me!</p>
          </div>
        </div>
        <div className="row">
          <aside className="eight columns footer-widgets">
            <div className="widget">
              <button
                onClick={() =>
                  window.open(`mailto:${emailReceiver}?subject=${encodeURIComponent(emailSubject)}`)
                }
              >
                Send Me an Email
              </button>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
