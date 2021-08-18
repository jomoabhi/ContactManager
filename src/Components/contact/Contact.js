import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Contact extends Component {
  state = {
    showcontactInfo: false,
  };

  onClickDelete = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showcontactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {' '}
                {name}{' '}
                <i
                  onClick={() => {
                    this.setState({
                      showcontactInfo: !this.state.showcontactInfo,
                    });
                  }}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                ></i>{' '}
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onClickDelete.bind(this, id, dispatch)}
                ></i>
                <Link to={`Contact/Edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'seagreen',
                      marginRight: '1rem',
                    }}
                  ></i>
                </Link>
              </h4>
              {showcontactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item"> Email: {email} </li>
                  <li className="list-group-item"> Mobile: {phone} </li>{' '}
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object,
};

export default Contact;
