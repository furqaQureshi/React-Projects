import React from 'react'

function List({ people }) {
  return (
    <div>
      {people.map((person) => {
        let { id, name, age, image } = person;
        return (
          <main className="container" key={id}>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{age}</p>
          </main>
        )
      })}
    </div>
  )
}

export default List
