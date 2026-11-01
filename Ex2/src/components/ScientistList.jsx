function ScientistList({ people }) {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          <h3>{person.name}</h3>
          <p>Age: {person.age}</p>
          <p>IQ: {person.iq}</p>
        </li>
      ))}
    </ul>
  )
}

export default ScientistList
