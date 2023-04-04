import Separate from './Separate';
import './App.css';
function App() {
  return (
    <div className="App">
        <h>List of Books</h>
      <Separate bkname="The Alchemist" author="Paulo Coelho"/>
      <Separate bkname="The Whisper Man" author="Alex North"/>
      <Separate bkname="The Midnight Library" author="Matt Haig"/>
      <Separate bkname="Harry Potter and The Goblet of Fire " author="JK Rowling"/>
      <Separate bkname="Malgudi Days" author="RK Narayan"/>
</div>
  );
}

export default App;
