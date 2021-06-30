import React, { useState, useEffect } from 'react';
import './App.css';
import Controls from './Controls';
import UsersList from './UsersList';
import { createFirestoreUser, streamFirestoreUsers } from '../utilities/firestore-utils';
import { fetchGitHubUser } from '../utilities/github-utils';

function App() {
  const [userInput, setUserInput] = useState('');
  const [users, setUsers] = useState([]);
  const [notification, setNotification] = useState('')


  const handleUserInput = async (key: string) => {
    if(key === 'Enter'){
      const newUser = await fetchGitHubUser(userInput)
      if(newUser){
        const firestoreUser = await createFirestoreUser(newUser)
        if(firestoreUser.id){
          setNotification('User found/added to Firestore.')
        }
      }
      if(!newUser){
        setNotification('No GitHub user with that username.')
      }
    }
  }

  useEffect(() => {
    const unsubscribe = streamFirestoreUsers({
        next: (updatedSnapshot: any) => {
          const updatedUsers = updatedSnapshot.docs
            .map((updatedDocument: any) => updatedDocument.data());
          setUsers(updatedUsers);
        },
        error: () => setNotification('Error streaming updated users from Firestore.')
    });

    return () => unsubscribe();

  }, []);


  return (
    <div>
      <header>
        <h1>Github/Firestore User List</h1>
      </header>

      <main>
        <section className='input-container'>
          <Controls 
            setUserInput={setUserInput} 
            handleUserInput={handleUserInput} 
          />
          <p>{notification}</p>
        </section>

        <section>
          <h3>User List:</h3>
          <UsersList users={users}/>
        </section>
      </main>

    </div>
  );
}

export default App;
