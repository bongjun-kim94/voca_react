import dummy from "../db/data.json";
import { usePrams } from 'react-router-dom';
import Word from './Word';

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
            <Word word={word} key={word.id} />
          })}
        </tbody>
      </table>
    </>
  );
}
