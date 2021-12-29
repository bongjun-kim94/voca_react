import dummy from "../db/data.json";
import { usePrams } from 'react-router-dom';

export default function Day() {
  const day = usePrams().day;
  // const { day } = usePrams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  const a = usePrams();
  console.log(a);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => {
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}
