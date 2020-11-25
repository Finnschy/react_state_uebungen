import React, { Component } from 'react';

class Faq extends Component {
    state = { 
        isVisible: false,
        isVisible2: false,
     }
    handleIsVisible = () => {
        this.setState({isVisible: !this.state.isVisible})
    }
    handleIsVisible2 = () => {
        this.setState({isVisible2: !this.state.isVisible2})
    }
    
    render(props) { 
        
        return ( 
            <section className="faqSection">
                
                <div className="flex">
                    <h2>{this.props.question}</h2>
                    <button onClick={this.handleIsVisible}>+</button>
                </div>
                <div style={{display: this.state.isVisible ? "block" : "none"}}>
                        <hr/>   
                    <div className="flex">
                        <p>{this.props.answer}</p>
                        <button onClick={this.handleIsVisible2}>+</button>
                    </div>
                </div>
                <div style={{display: this.state.isVisible2 ? "block" : "none"}}>
                    <hr/>
                    <div className="flex">
                        <p>{this.props.answerLong}
                        </p>
                    </div>

                </div>
                
                
            </section>
         );
    }
}
 
export default Faq;