import './HomePage.css'

export function HomePage() {
    return (
        <>
            <h1>Offline React Works ✅</h1>
            <button onClick={() => setCount(count + 1)}>
                Clicked {count}
            </button>
        </>
    )
}
