import React, { Component,PropTypes } from 'react';
import User from './User';
import Title from './Title';
import users from './users';
import Modal from 'react-modal';

import './Table.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    textAlign             : 'center'
  }
};

class Table extends Component {

  constructor(props){
    super(props)

    this.state = {
      modalIsOpen: false,
      user: {
        picture:"",
        name:{first:"", last:""},
        dob:"",
        location:"",
      }
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    const id = e.attributes.getNamedItem('data-id').value
    this.setState({modalIsOpen: true, user:this.props.users[id]});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#1976D2';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  firstLetter(user){
    return user.name[this.props.filter].charAt(0)
  }

  render() {
    var title ='A'
    //render title first
    //render all the users in state sorted by title
    return (

      <div className="table">
        {this.props.users.map((user,k)=>{
          var firstletter = this.firstLetter(user)
          if (firstletter !== title) {
            title = firstletter
            return <Title key={k} title={title}>
                <User
                  userkey={String(k)}
                  thumbnail={user.picture.large}
                  firstname={user.name.first}
                  lastname={user.name.last}
                  dob={user.dob}
                  city={user.location.city}
                  onClick={(e)=>this.openModal(e.target)}
                  />
              </Title>
          }
          return  <User key={k}
                  userkey={String(k)}
                  thumbnail={user.picture.large}
                  firstname={user.name.first}
                  lastname={user.name.last}
                  dob={user.dob}
                  city={user.location.city}
                  onClick={(e)=>this.openModal(e.target)}
                  />
        })}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel= "Name"
        >
        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
        <User
                thumbnail={this.state.user.picture.large}
                firstname={this.state.user.name.first}
                lastname={this.state.user.name.last}
                dob={this.state.user.dob}
                city={this.state.user.location.city}

                />
        </Modal>
      </div>
    );
  }
}

Table.propTypes = {
  filter: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object),
}

export default Table;
