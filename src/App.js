import './App.css';
import contacts from './contacts.json';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;
