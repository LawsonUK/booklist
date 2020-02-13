import React, { useContext } from "react"
import { BookContext } from "../../../contextapp/src/contexts/BookContext"

const Navbar = () => {
  const { books, setBooks } = useContext(BookContext)
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} to get through...</p>
    </div>
  )
}

export default Navbar
