import './App.css';
import contactsFromJSON from "./contacts.json"

function App() {
  const contacts = contactsFromJSON.splice(0, 5);
  console.log(contacts);
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactDetails) => {
            return (
              <tr key={contactDetails.id} className="table">
                <td><img src={contactDetails.pictureUrl} alt="" /></td>
                <td>{contactDetails.name}</td>
                <td>{contactDetails.popularity}</td>
                <td>{contactDetails.wonOscar? "🏆":""}</td>
                <td>{contactDetails.wonEmmy? "🏆":""}</td>
              </tr>
            )
          })}
        </tbody>
      </table>





    </div>
  );
}

export default App;
