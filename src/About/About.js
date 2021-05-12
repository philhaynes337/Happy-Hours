import React, { Component } from 'react';
import './About.css';



class About extends Component {
    render() {

        return(
            <div>
                <section>
                    <h2>How does this work?</h2>
                    <p>
                        <li className='ali'>Determine your overtime policy? (Most cases over 40 hours)</li>
                        <li className='ali'>Create an account.</li>
                        <li className='ali'>Track your hours daily with Happy Hours.</li>
                        <li className='ali'>Watch your Happy Hours grow!</li>
                    </p>
                </section>
            </div>
        )
    }
}

export default About