import './App.css';
import Calender from './components/Calender';

function App() {
  const calenderDate = '2025-12-30';
  return (
    <div className="App">
      <h1>Calendar Component {calenderDate}</h1>
      <Calender date={calenderDate} />
    </div>
  );
}

export default App;
