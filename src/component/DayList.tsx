import React from 'react';
import { Link } from 'react-router-dom';
import dummy from "../db/data.json";
import useFetch from '../hooks/useFetch';

export interface IDay {
  id: number
  day: number
}

export default function DayList() {
  const days: IDay[] = useFetch('http://localhost:3001/days');
  

  if (days.length === 0) {
    return <span>Loading...</span>
  }

  //const [days, setDays] = useState([]);
  //const [count, setCount] = useState(0);

  //useEffect(() => {
  //  fetch('http://localhost:3001/days')
  //    .then(res => {
  //      return res.json()
  //    })
  //    .then(data => {
  //      setDays(data);
  //    })
  //}, []);

  return (
    <>
      <ul className="list_day">
        {dummy.days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
