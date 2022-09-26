import React, { Component } from 'react'

export default class MyForm extends Component {

    constructor(props){
        super(props);

        // Inisialisasi data
        this.state = {
            name : "",
            email : "",
            gender : "Male",
        };

        // this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        // this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        // this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
        // this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onHandleInputChange = this.onHandleInputChange.bind(this);

    }

    onHandleInputChange(event){
        const target = event.target
        const value = target.value;
        const name = target.name;   

        this.setState({
            [name] : value
        })

        console.log(this.state)
    }

    // onNameChangeEventHandler(event){
    //     this.setState(() => {
    //         return {
    //             name : event.target.value
    //         }
    //     });
    // }

    // onEmailChangeEventHandler(event){
    //     console.log(event.target.value)
    //     this.setState(() => {
    //         return {
    //             email : event.target.value
    //         }
    //     });
    // }

    // onGenderChangeEventHandler(event){
    //     this.setState(() => {
    //         return {
    //             gender : event.target.value
    //         }
    //     });
    // }

    onSubmitEventHandler(event){
        event.preventDefault();

        const message = `
            Name: ${this.state.name}
            Email: ${this.state.email}
            Gender: ${this.state.gender}
        `

        alert(message)
    }

  render() {
    return (
      <div className='form-wrapper'>
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
            <div className='form-group'>
                <label>Name: </label>
                <input type="text" id="name" name='name' value={this.state.name} onChange={this.onHandleInputChange} />
            </div>
            <div className='form-group'>
                <label>Email: </label>
                <input type="email" id="email" name='email' value={this.state.email} onChange={this.onHandleInputChange} />
            </div>
            <div className='form-group' value={this.state.gender} onChange={this.onHandleInputChange}>
                <label>Gender: </label>
                <select id='gender' name='gender'>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
