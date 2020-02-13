import React from "react"
import BookContextProvider from "../../contextapp/src/contexts/BookContext"
import Navbar from "../../contextapp/src/components/Navbar"

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  )
}

export default App
