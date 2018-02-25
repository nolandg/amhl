import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './reset.scss'
import './main.scss'

class TemplateWrapper extends Component {
  componentDidMount = () => {
    window.Tawk_API = window.Tawk_API||{}
    window.Tawk_LoadStart = new Date();

    const s1=document.createElement("script")
    const s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5a91eb9bd7591465c707fc25/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  }

  render(){
    return(
      <div>
        <Helmet
          title="Advanced Live Math Help"
          meta={[
            { name: 'description', content: 'Advanced university and college live math help chat' },
            { name: 'keywords', content: 'math, live, chat, university, college, advanced' },
          ]}
        />
        <Helmet>
          {/* <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" /> */}
          {/* <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet" /> */}
        </Helmet>
          {this.props.children()}
          <style>
            @import "//fonts.googleapis.com/css?family=Karla:400,700"
          </style>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
