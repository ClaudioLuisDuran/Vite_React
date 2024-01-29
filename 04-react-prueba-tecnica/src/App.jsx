import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFacts"
import { Otro } from './Components/Otro'

export function App() {
    const {fact, refreshFact} = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                <button onClick={handleClick}>Get new cat</button>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt='Image for ${fact}' />}
            </section>
            <section>
                <Otro />
                <Otro />
                <Otro />
            </section>
        </main>
    )
}