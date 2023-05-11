import React from 'react'

function BookList({propBooks,selectedFilter}) {
  return (
    <div className="row book-list">
        
    {selectedFilter==="All" ?
    propBooks.map((book) => (
      <div className="col-xs-6 col-sm-3" key={book.id}>
        <div className="thumbnail">
          <img alt="" className="img-responsive" src={book.cover} />
        </div>
      </div>
    ))
:  propBooks.filter((book)=>book.category===selectedFilter)
.map((book) => (
    <div className="col-xs-6 col-sm-3" key={book.id}>
      <div className="thumbnail">
        <img alt="" className="img-responsive" src={book.cover} />
      </div>
    </div>
  ))
}


  </div>
  )  
}
export default BookList