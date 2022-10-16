export const ContactList = ({ contacts }) => {
    return <ol>
        {contacts.map(contact =>
        {
        return (
        <li key={contact.id}>
                {contact.name}: {contact.number}</li>)
        })}
    </ol>
    
}