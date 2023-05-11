import React from "react";
import BookFilter from "./BookFilter";
import BookList from "./BookList";

function Books({ propBooks, tabItems, selectedFilter}) {
  return (
    <section id="books">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Books</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <BookFilter tabItems={tabItems} />
          </div>
        </div>
        <BookList propBooks={propBooks} selectedFilter={selectedFilter}/>
      </div>
    </section>
  );
}

export default Books;
