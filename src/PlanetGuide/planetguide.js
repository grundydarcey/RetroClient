import React from 'react';
import './planetguide.css';
// import Mercury from '../Images/mercury.png';
// import Jupiter from '../Images/jupiter.png';
// import Mars from '../Images/mars.png';
// import Neptune from '../Images/neptune.png';
// import Pluto from '../Images/pluto.png';
// import Saturn from '../Images/saturn.png';
// import Uranus from '../Images/uranus.png';
// import Venus from '../Images/venus.png';
import PlanetContext from '../PlanetContext';

class AccordionItem extends React.Component {
    constructor() {
      super();
      this.state = {
        active: false
      };
      this.toggle = this.toggle.bind(this);
    }
    toggle() {
      this.setState({
        active: !this.state.active,
        className: "active"
      });
    }
    render() {
      const activeClass = this.state.active ? "active" : "inactive";
      const question = this.props.details;
      return (
              <div className={activeClass} onClick={this.toggle}>
                <span className="summary">{question.summary}</span>
                <span className="folding-pannel answer">{question.answer}</span>
              </div>
      );
    }
  }
  
  export default class PlanetGuide extends React.Component {
    constructor() {
      super();
      this.state = {
        questions: sampleQuestions,
      };
      this.renderQuestion = this.renderQuestion.bind(this);
    }
    renderQuestion(key) {
      return <AccordionItem key={key} index={key} details={this.state.questions[key]} />
    }
    render() {
      return(
        <div>
          <p className='guide'>Interact with the individual planets below to see their upcoming periods of retrograde. This website has dates for all of the retrogrades occurring in the next five years.</p><br /><br />
          <div className="accordion-container">{Object.keys(this.state.questions).map(this.renderQuestion)} </div>
        </div>    
      )
    }
  }
  const sampleQuestions = {
    question1: {summary:'Mercury', answer:'Ottawa baby!!'},
    question2: {summary:'Venus', answer:'Over 200 years!!'},
    question3: {summary:'Mars', answer:'London, groovy baby!!'},
    question4: {summary:'Jupiter', answer:'Indian Ocean, it\'s a hottie!'},
    question5: {summary:'Saturn', answer:'Skim milk, which is water that\'s lying about being milk'},
    question6: {summary:'Uranus', answer:'In retrograde'},
    question7: {summary:'Neptune', answer:'In retrograde'},
    question8: {summary:'Pluto', answer:'In retrograde'}
  };
  

// export default class PlanetGuide extends Component {
//   render() {
//     return (
//       <section className='planetguide'>
//         <p>View all of the retrograde dates for each planet in the next five years.</p>
        
//       </section>
//     )
//   }
// }