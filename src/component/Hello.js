// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

// css : 인라인 스타일, index.css&app.css 사용

import React, { useState } from 'react';

export default function Hello() {
    const [name, setName] = useState('Mike');

    const changeName = () => {
        // document.querySelector('#name').innerHTML = name;
        setName((name === 'Mike' ? 'Jane' : 'Mike'));
    }

    return (
        <>
            <h1>state</h1>
            <h2 id='name'>{name}</h2>
            <button onClick={changeName}>클릭</button>
        </>
    );
}