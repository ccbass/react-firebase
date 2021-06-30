import React, { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import UsersList from './components/UsersList';
import { createFirestoreUser } from './utilities/firestore-utils';
import { fetchGitHubUser } from './utilities/github-utils';

function App() {
  const [userInput, setUserInput] = useState('');
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

  return (
    <div>
      <header>
        <h1>Github/Firestore User List</h1>
      </header>
      <main>

        <section>
          <Controls 
            setUserInput={setUserInput} 
            handleUserInput={handleUserInput} 
          />
          
          {notification}

        </section>

        <section>
          <h3>Matching Users:</h3>
          <UsersList />
        </section>


      </main>
    </div>
  );
}

export default App;
