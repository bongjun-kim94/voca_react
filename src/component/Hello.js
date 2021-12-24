// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

// css : 인라인 스타일, index.css&app.css 사용

export default function Hello() {

    const showName = () => {
        console.log('Mike');
    }

    const showAge = (age) => {
        console.log(age);
    }

    const showText = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <h1>
                Hello
            </h1>
            <button onClick={showName}>Show name</button>
            <button onClick={showAge(28)}>Show age</button>
            <input type="text" onChange={showText} />
        </>
    );
}