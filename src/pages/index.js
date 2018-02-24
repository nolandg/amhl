import React from 'react'
import Link from 'gatsby-link'

const chatLink = () => (
  <a href="#" onClick={event => {

    }}>chat</a>
)

const IndexPage = () => (
  <div>
    <header id="site-header">
      <div className="overlay" />
      <h1>
        <div className="sub">Ana's</div>
        Advanced Math&nbsp;Help
        <div className="sub">Live 7 days/week</div>
      </h1>
      <p>
        Get live help with your college/university assignments and courses 7 days a week.
        <br /><br />
        Chat with me now for an instant quote!
      </p>
    </header>

    <div id="site-content">
      <h3>Hello and welcome!</h3>

      <p>
        My name is Ana and I love solving math problems and helping students with their assignments and understanding math concepts.
      </p>

      <p>
        I hold a Masters Degree in Mathematics from the University of Alberta, Canada.
        Chat with me about your math challenge today. I look forward to helping you out!
      </p>

      <h3>Rates</h3>
      <p>
        Rates vary from $40-60/hour depending on the type of math instruction.
        We will first discuss your problem together and I will provide a quote.
        Assignment help is custom quoted instantly&mdash;<strong>just {chatLink} with me or call 604-618-7227 to discuss</strong>.
      </p>
    </div>

    <footer id="site-footer">
      <div>
        &copy; Copyright 2018 Anastasiya Lukyanova, all rights reserved
      </div>
      <div>
        <a href="mailto:Ana@AdvancedMathHelp.live">Ana@AdvancedMathHelp.live</a>
      </div>
    </footer>

  </div>
)

export default IndexPage
