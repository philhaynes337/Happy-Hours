import React, { Component } from 'react';
import Hnav from './files/Hnav';


class HappyHours extends Component {

    render() {

        return(
            <div>
                <nav>
                    <Hnav />
                </nav>
                <section>
                    <h2>Welcome User!</h2>
                </section>
            </div>
        )
    }
}

export default HappyHours