function ScientistList({ people, onDelete, deleteButtonRefs }) {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          <h3>{person.name}</h3>
          <p>Age: {person.age}</p>
          <p>IQ: {person.iq}</p>
          <button
            ref={(node) => {
              if (node) {
                deleteButtonRefs.current.set(person.id, node)
              } else {
                deleteButtonRefs.current.delete(person.id)
              }
            }}
            type="button"
            aria-label={`Delete ${person.name}`}
            onClick={() => onDelete(person.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ScientistList
