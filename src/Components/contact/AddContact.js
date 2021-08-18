import React, { Component } from 'react';
import { Consumer } from '../../context';
// import { v4 as uuidv4 } from 'uuid';
import InputTextGroup from '../layout/InputTextGroup';
import axios from 'axios';
class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === '') {
      this.setState({ errors: { name: 'Name is requied' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is requied' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Mobile is requied' } });

      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );
    dispatch({ type: 'ADD_CONTACT', payload: res.data });
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: '',
    });
    this.props.history.push('/');
  };
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <InputTextGroup
                    label="Name"
                    name="name"
                    placeholder="Enter The Name..."
                    value={name}
                    onChange={this.onChange}
                    errors={errors.name}
                  ></InputTextGroup>

                  <InputTextGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter The Email..."
                    value={email}
                    onChange={this.onChange}
                    errors={errors.email}
                  ></InputTextGroup>

                  <InputTextGroup
                    label="Mobile"
                    name="phone"
                    placeholder="Enter the Mobile No..."
                    value={phone}
                    onChange={this.onChange}
                    errors={errors.phone}
                  ></InputTextGroup>

                  <div className="d-grid gap-2">
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn  btn-light"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
