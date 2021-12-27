// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

// css : 인라인 스타일, index.css&app.css 사용

import React, { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("Mike");
  const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";

  const changeName = () => {
    // document.querySelector('#name').innerHTML = name;
    setName(name === "Mike" ? "Jane" : "Mike");
  };

  return (
    <>
      <h2 id="name">
        {name}({age}) : {msg}
      </h2>
      <UserName name={name} />
      <h2 id="name">{name}</h2>
      <button onClick={changeName}>클릭</button>
    </>
  );
}
