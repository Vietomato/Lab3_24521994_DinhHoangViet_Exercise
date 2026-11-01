import { useId, useLayoutEffect, useRef, useState } from 'react'
import { SMART_PEOPLE } from '../data/smartPeople.js'
import styles from './ScientistDirectory.module.css'
import ScientistList from './ScientistList.jsx'

function ScientistDirectory({ initialData = SMART_PEOPLE }) {
  const [people, setPeople] = useState(initialData)
  const [query, setQuery] = useState('')
  const [minIq, setMinIq] = useState(160)
  const [sortBy, setSortBy] = useState('iq-desc')
  const deleteButtonRefs = useRef(new Map())
  const resetButtonRef = useRef(null)
  const focusAfterDeleteRef = useRef(undefined)
  const searchId = useId()
  const minIqId = useId()
  const sortById = useId()
  const normalizedQuery = query.trim().toLowerCase()
  const filteredPeople = people.filter(
    (person) =>
      person.name.toLowerCase().includes(normalizedQuery) &&
      person.iq >= minIq,
  )
  const visiblePeople = filteredPeople.toSorted((first, second) =>
    sortBy === 'iq-desc'
      ? second.iq - first.iq
      : first.age - second.age,
  )

  useLayoutEffect(() => {
    if (focusAfterDeleteRef.current === undefined) {
      return
    }

    const targetId = focusAfterDeleteRef.current
    const targetButton =
      targetId === null ? null : deleteButtonRefs.current.get(targetId)
    ;(targetButton ?? resetButtonRef.current)?.focus()
    focusAfterDeleteRef.current = undefined
  }, [people, visiblePeople])

  function handleDelete(personId) {
    const deletedIndex = visiblePeople.findIndex(
      (person) => person.id === personId,
    )
    const nextPerson =
      visiblePeople[deletedIndex + 1] ?? visiblePeople[deletedIndex - 1]

    focusAfterDeleteRef.current = nextPerson?.id ?? null
    setPeople((currentPeople) =>
      currentPeople.filter((person) => person.id !== personId),
    )
  }

  function handleReset() {
    setPeople(initialData)
    setQuery('')
    setMinIq(160)
    setSortBy('iq-desc')
  }

  return (
    <section className={styles.directory} aria-labelledby="scientists-heading">
      <h2 className={styles.sectionHeading} id="scientists-heading">
        Scientists
      </h2>
      <div className={styles.controls}>
        <div className={styles.field}>
          <label htmlFor={searchId}>Search by name</label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor={minIqId}>Minimum IQ</label>
          <input
            id={minIqId}
            type="number"
            min="0"
            value={minIq}
            onChange={(event) => {
              const value = event.target.valueAsNumber
              setMinIq(Number.isNaN(value) ? 0 : value)
            }}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor={sortById}>Sort by</label>
          <select
            id={sortById}
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="iq-desc">IQ (highest first)</option>
            <option value="age-asc">Age (youngest first)</option>
          </select>
        </div>
        <button
          className={styles.resetButton}
          ref={resetButtonRef}
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <output className={styles.resultCount} role="status" aria-live="polite">
        {visiblePeople.length}{' '}
        {visiblePeople.length === 1 ? 'result' : 'results'}
      </output>
      {people.length === 0 ? (
        <p className={styles.emptyMessage}>All scientists have been deleted.</p>
      ) : visiblePeople.length === 0 ? (
        <p className={styles.emptyMessage}>
          No scientists match the current filters.
        </p>
      ) : null}
      <ScientistList
        people={visiblePeople}
        onDelete={handleDelete}
        deleteButtonRefs={deleteButtonRefs}
      />
    </section>
  )
}

export default ScientistDirectory
