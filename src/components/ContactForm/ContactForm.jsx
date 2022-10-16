import React, { Component } from "react"
import { nanoid } from 'nanoid'

export class ContactForm extends Component {
    state = {
        id: "",
        name: ''
    }

    nameInputId = nanoid()

     handleInputChange = event => {
    const {name, value} = event.currentTarget
    this.setState(
        {
            [name]: value,
            id: nanoid()}
    )
    }
    
      handleSubmit = e => {
    e.preventDefault();
          
          this.props.onSubmit(this.state)
          this.reset()
    }
    
    reset = () => {
        this.setState({
             id: "",
            name: ''
        })
    }

    render() {
        const { name } = this.state
        return (
            
            <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInpitId}>Name</label>
          <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          value={name}
          onChange={this.handleInputChange}
          id={this.nameInputId}
          />
          <button type="submit">Add Contact</button>
        </form>
        )
    }
}