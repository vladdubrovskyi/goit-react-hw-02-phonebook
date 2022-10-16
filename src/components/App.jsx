import React, { Component } from "react"
import { Section } from "components/Section/Section"
import {ContactForm} from "components/ContactForm/ContactForm"

export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

  formSubmitHandler = data => {
    this.state.contacts.push(data)
    console.log(this.state.contacts)
}


  render() {
     const {contacts, name} = this.state
  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={this.formSubmitHandler } />
      </Section>
       <Section title = "Contacts">

      </Section>
    </>
     )
   }
};
