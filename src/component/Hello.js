// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;
import World from './World';
import styles from './Hello.module.css';
// css : 인라인 스타일, index.css&app.css 사용
export default function Hello() {
    return (
        <>
            <h1
                style={{
                    color: '#f00',
                    borderRight: '12px solid #000',
                    marginBottom: '-5px',
                    opacity: 0.5,
                }}
            >
                Hello
            </h1>
            <div className={styles.box}>Hello</div>
        </>
    );
}