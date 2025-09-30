import { useState } from 'react'

export default function Form() {

    const arrayNews = [
        "Scoperta una nuova specie di dinosauro in Patagonia.",
        "Lancio riuscito per la nuova missione lunare europea.",
        "Aumento del salario minimo in Italia dal 2026."
    ]
    const [news, setNews] = useState(arrayNews);
    const [createNews, setCreateNews] = useState('');

    const addNews = e => {
        e.preventDefault();
        const addNews = [...news, createNews];
        setNews(addNews);
        setCreateNews('');
    }

    const removeNews = i => {
        const addNews = news.filter((news, Index) => {
            return Index !== i
        });
        setNews(addNews);
    }

    return (
        <>
            <h1>Inserisci una nuova news</h1>
            <form onSubmit={addNews}>
                <input type="text"
                    placeholder='Inserisci una notizia'
                    value={createNews}
                    onChange={(e) => { setCreateNews(e.target.value) }}
                />
                <button type='submit'>Inserisci</button>
            </form>

            <ul>
                {news.map((a, index) => (
                    <li
                        key={index}>
                        {a}
                        <button onClick={() => removeNews(index)}>
                            Elimina
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}