import React from 'react'

function Poem({title, author, year, text}) {
    return (
        <div className='poem-container'>
            <h1 id="poem-title">{title}</h1>
            <h3 id="poem-author">By {author}</h3>
            <h2 id="year-published">{year}</h2>
            <p id="poem-text">{text}</p>
        </div>
    )
}

export default Poem
