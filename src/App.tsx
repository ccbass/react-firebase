import React from 'react';
import './App.css';
import Controls from './components/Controls';
import UsersList from './components/UsersList';

function App() {
  return (
    <div>
      <header>
        <h1>Github/Firestore User List</h1>
      </header>
      <main>

        <section>
          <Controls />
          
          Notifications
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
