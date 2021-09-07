import './App.css';
import { GetPosts } from './Components/GetPosts';
import {UserDetails} from './Components/UserDetails'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
      </header>
      <main>
        <UserDetails/>
        {/* <GetPosts/> */}
      </main>
    </div>
  );
}

export default App;
