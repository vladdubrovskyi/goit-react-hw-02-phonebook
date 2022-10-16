import React, { Component } from "react"
import {Section} from "components/Section/Section"
export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  render() {
     const {contacts, name} = this.state
  return (
    <>
      <Section title = "Phonebook">
      </Section>
       <Section title = "Contacts">

      </Section>
    </>
     )
   }
};
