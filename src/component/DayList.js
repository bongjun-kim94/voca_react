import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dummy from "../db/data.json";

export default function DayList() {
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/days')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setDays(data);
      })
  }, []);

  return (
    <>
      <ul className="list_day">
        {dummy.days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onClick2}></button>
    </>
  );
}
