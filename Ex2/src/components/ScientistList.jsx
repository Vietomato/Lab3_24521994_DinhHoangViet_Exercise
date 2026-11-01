import styles from './ScientistDirectory.module.css'

function ScientistList({ people, onDelete, deleteButtonRefs }) {
  return (
    <ul className={styles.peopleList}>
      {people.map((person) => (
        <li className={styles.person} key={person.id}>
          <h3 className={styles.personName}>{person.name}</h3>
          <p className={styles.personDetail}>Age: {person.age}</p>
          <p className={styles.personDetail}>IQ: {person.iq}</p>
          <button
            className={styles.deleteButton}
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
