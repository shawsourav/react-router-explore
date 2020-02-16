import React from 'react';
import { Link, Route } from "react-router-dom"

const BooksList =  [
    {
        id: 1,
        title: "Book 1"
    },
    {
        id: 2,
        title: "Book 2"
    },
    {
        id: 3,
        title: "Book 3"
    }
]

const Child = ({ match }) => {
    return (
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>
    )
}


const Books = () => {
    return (
        <>
        {BooksList.map(book => (
            <li key={book.id}>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
        ))}
        <Route path='/books/:id' component={Child}/>
        </>
    )
}

export default Books;