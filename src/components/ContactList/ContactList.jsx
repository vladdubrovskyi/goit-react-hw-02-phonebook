export const ContactList = ({ contacts, removeContact  }) => {
    return <ol>
        {contacts.map(contact =>
        {
        return (
        <li key={contact.id}>
                {contact.name}: {contact.number}
                <button type="button" onClick={() => removeContact(contact.id)}>Remove</button>
            </li>)
        })}
    </ol>
    
}