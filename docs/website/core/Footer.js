/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render () {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href="#">
              API Reference
            </a>
            <a href="https://blog.zeppelin.solutions/guides/home">
              Guides
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https:/monetarycoin.org/" target="_blank">
              Chat on Slack
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://monetarycoin.org">Blog</a>
            <a href={this.props.config.repoUrl}>GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://monetarycoin.org"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/logo-monetarycoin.png'}
            alt="MonetaryCoin"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">
          Copyright &copy; {currentYear} Monetary foundation
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
