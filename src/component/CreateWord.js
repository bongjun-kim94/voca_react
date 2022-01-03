import { useRef } from 'react';
import useFecth from "../hooks/userFetch";

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label>Eng</label>
                    <input type="text" placeholder="computer" reg={engRef} />
                </div>
                <div className="input_area">
                    <label>Kor</label>
                    <input type="text" placeholder="컴퓨터" ref={korRef} />
                </div>
                <div className="input_area">
                    <label>Day</label>
                    <select ref={dayRef}>
                        {days.map(day => (
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input_area"></div>
                <button>저장</button>
            </form>
        </>
    );
}