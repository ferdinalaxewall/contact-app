import React, { Component } from 'react'

export default class ContactInput extends Component {

    constructor(props){
        super(props)

        this.state = {
            name : "",
            tag : ""
        }

        this.onHandleInputChangeEventHandler = this.onHandleInputChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    
    onHandleInputChangeEventHandler(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    onSubmitEventHandler(event){

        const inputElement = document.querySelectorAll("form input");

        event.preventDefault();
        this.props.addContact(this.state);

        
        for (let i = 0; i < inputElement.length; i++) {
            const input = inputElement[i];

            input.value = "";
        }
    }

  render() {
    return (
        <form onSubmit={this.onSubmitEventHandler} className='contact-form'>
            <input type="text" name="name" placeholder='Masukkan Nama...' onChange={this.onHandleInputChangeEventHandler} required />
            <input type="text" name="tag" placeholder='Masukkan Tag/Username...' onChange={this.onHandleInputChangeEventHandler} required />
            <button type='submit'><i className='bx bx-plus'></i> Tambah Kontak</button>
        </form>
    )
  }
}
