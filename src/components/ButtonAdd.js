import React, { Component } from 'react';

export default class ButtonAdd extends Component {
  state = {
    contacts: this.props.contacts,
  };
  handleAdd = () => {
    let randomInx = this.props.contacts[
      Math.floor(Math.random() * this.props.contacts.length)
    ];
    this.setState({
      contacts: [...this.state.contacts, randomInx],
    });
  };
  render() {
    return <button onClick={this.handleAdd}>Add Random Contact</button>;
  }
}
