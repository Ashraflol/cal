import { useState } from 'react';
import './calender.css';

function Calender(date: { date: string }) {

  const EpocDate = new Date(date.date);
  const monthNumber = EpocDate.getMonth() + 1;
  const yearNumber = EpocDate.getFullYear();
  const firstDay = new Date(yearNumber, monthNumber - 1, 1);
  const daysInMonth = new Date(yearNumber, monthNumber, 0).getDate();
  const day = EpocDate.getDate();
  const monthname = EpocDate.toLocaleString('default', { month: 'short' });

  const listItems = [];
  for (let i = 0; i < firstDay.getDay(); i++) {
    listItems.push('');
  }
  for (let i = 1; i <= daysInMonth; i++) {
    listItems.push(i);
  }

  if (monthNumber < 1 || monthNumber > 12 || day < 1 || day > daysInMonth) {
    return (
      <div className="calendar">
        <h6 className='month-year'>Invalid Date</h6>
      </div>
    );
  }

  return (
    <div className="calendar">
      <h6 className='month-year'>{monthname} {yearNumber}</h6>
      <div className="weekdays-row">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        {listItems.map((item, index) =>
        (
          <span key={index} className={item === day ? "date-cell current-day" : "date-cell"}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Calender;
