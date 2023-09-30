import React from 'react'

const Header = ({tittle}) => {
  return (
    <header>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossorigin="anonymous"
        />
        <h1 className='text-center m-5'>{tittle}</h1>
    </header>
  )
}

export default Header