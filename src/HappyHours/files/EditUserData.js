import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { UserContext } from '../../UserContext';
import './css/EditUserData.css'

class EditUserData extends Component {
    constructor(props) {
        super(props)
        this.state= {
            //data: props.data,
            show: 'noShow',
        }
    }

    handleCloseButton = e => {
        e.preventDefault();
        const {setEditButton} = this.context;

        this.setState({
            show: 'noShow',
        })
        
        setEditButton(this.state.show)
       
    }
    clickButton = () => {
        console.log(this.props.id)
    }
    
    handleEditButton = (e) => {
        e.preventDefault();
       
        const {setEditButton} = this.context;

        setEditButton('EditUser');
     }

    
    render() {
        const { id } = this.props;
        const { show } = this.context;
        console.log(this.props.id)

        return ReactDom.createPortal(
            <div>
                <div>

                            </div>
            <div className={show}>
                {id}
                <br />

                <button onClick={this.clickButton} name='click'>Click Me</button>
                <button onClick={this.handleCloseButton} name='Exit Edit'>
                    Exit
                </button>

            </div>
            </div>,
  document.getElementById('portal')
        )

    }
}
EditUserData.contextType = UserContext

export default EditUserData