import React, { Component } from "react"
import { Section } from "components/Section/Section"
import { ContactForm } from "components/ContactForm/ContactForm"
import {ContactList} from "components/ContactList/ContactList"

export class App extends Component {
  state = {
  contacts: [],
  // name: '',
  // number: ""
  }

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
    }))


    
}


  render() {
     const {contacts} = this.state
  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={this.formSubmitHandler } />
      </Section>
      <Section title="Contacts">
        <ContactList contacts={ contacts} />
      </Section>
    </>
     )
   }
};
