import './calender.css';

function Calender(date: { date: string }) {
  return (
    <div className="container">
      <h1>Calendar Component {date.date}</h1>
      <div className="calendar">
        <h6 className='month-year'>June 2024</h6>
        <div className="weekdays">

        </div>
      </div>
    </div>
  );
}

export default Calender;
