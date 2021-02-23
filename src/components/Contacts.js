import React, { Component } from 'react';

export default class Contacts extends Component {
  state = {
    contacts: this.props.contacts.slice(0, 5),
  };
  handleAdd = () => {
    let randomInx = this.props.contacts[
      Math.floor(Math.random() * this.props.contacts.length)
    ];
    this.setState({
      contacts: [...this.state.contacts, randomInx],
    });
  };
  handleSortName = () => {
    let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts));
    clonedContacts.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      } else if (first.name < second.name) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ contacts: clonedContacts });
  };
  handleSortPopularity = () => {
    let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts));
    clonedContacts.sort((first, second) => {
      if (first.popularity > second.popularity) {
        return -1;
      } else if (first.popularity < second.popularity) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({ contacts: clonedContacts });
  };
  handleDelete = contactName => {
    let filterContacts = this.state.contacts.filter(singleContact => {
      return singleContact.name !== contactName;
    });
    this.setState({ contacts: filterContacts });
  };
  render() {
    return (
      <React.Fragment>
        <h1>IronContacts</h1>
        <button onClick={this.handleAdd}>Add Random Contact</button>
        <button onClick={this.handleSortName}>Sort by name</button>
        <button onClick={this.handleSortPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((singleContact, index) => {
              let myStyle = {
                width: '70px',
              };
              return (
                <tr key={index}>
                  <td>
                    <img
                      style={myStyle}
                      src={singleContact.pictureUrl}
                      alt="img"
                    ></img>
                  </td>
                  <td>{singleContact.name}</td>
                  <td>{singleContact.popularity}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(singleContact.name);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
