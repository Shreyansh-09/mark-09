import "./styles.css";
import { useState } from "react";

var bookList = {
  JavaScript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],
  Fiction: [
    { name: "Shiva Trilogy", rating: "5/5" },
    { name: "Harry Potter and the Sorcerer's Stone", rating: "4.5/5" }
  ],
  Business: [
    { name: "Never Split the Difference", rating: "3.5/5" },
    { name: "Loonshots", rating: "5/5" }
  ]
};

var booksName = Object.keys(bookList);
export default function App() {
  var [genre, setgenre] = useState("JavaScript");
  function genreclickHandler(bookname) {
    setgenre(bookname);
  }
  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <small>Checkout my favorite books. Select a genre to get started.</small>
      <div>
        {booksName.map(function (book) {
          return (
            <button key={book} onClick={() => genreclickHandler(book)}>
              {book}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        {bookList[genre].map(function (nameofBook) {
          return (
            <ul style={{ paddingInlineStart: "0px" }}>
              <li key={nameofBook.name} style={{ listStyle: "none" }}>
                <div>{nameofBook.name}</div>
                <div>{nameofBook.rating}</div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
