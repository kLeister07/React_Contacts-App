import React from 'react';
import Avatar from './components/Avatar';
import ContactList from './components/ContactList';

function App() {
    return (
        <div>
            <h1 className='heading'>My Contacts</h1>
            <Avatar img='/images/Biscuit2.jpg' />
            <ContactList />
        </div>
    );
}

export default App;
