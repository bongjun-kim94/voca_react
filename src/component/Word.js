import React, { useState } from 'react';

// props로 넘어온 word를 w라는 새로운 변수로 할당
export default function Word({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const toggleShow = () => {
        setIsShow(!isShow);
    }

    const toggleDone = () => {
        // setIsDone(!isDone);
        // 두 번째 객체는 요청의 옵션대로 넣는다.
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            // 수정정보
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            })
                .then(res => {
                    if (res.ok) {
                        setIsDone(!isDone);
                    }
                })
        });
    }

    const del = () => {
        if (window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                // 삭제는 정보를 넘겨줄 필요가 없기 떄문에 여기까지
                method: 'DELETE',
            }).then(res => {
                if (res.ok) {
                    // 삭제가 되면 word.id를 0으로
                    setWord({ id: 0 })
                }
            })
        }
    }

    if (word.id === 0) {
        return null;
    }

    return (
        <>
            <tr className={isDone ? 'off' : ''}>
                <td>
                    <input type="checkbox" checked={word.isDone} onChange={toggleDone} />
                </td>
                <td>{word.eng}</td>
                <td>{isShow && word.kor}</td>
                <td>
                    <button onClick={toggleShow}>
                        뜻 {isShow ? '숨기기' : '보기'}
                    </button>
                    <button className="btn_del" onClick={del}>삭제</button>
                </td>
            </tr>
        </>
    );
}

// REST API

// Create : Post
// Read : GET
// Update : PUT
// Delete : Delete
