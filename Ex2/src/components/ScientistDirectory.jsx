import { useId, useState } from 'react'
import { SMART_PEOPLE } from '../data/smartPeople.js'
import ScientistList from './ScientistList.jsx'

function ScientistDirectory({ initialData = SMART_PEOPLE }) {
  const [people] = useState(initialData)
  const [minIq, setMinIq] = useState(160)
  const minIqId = useId()
  const visiblePeople = people.filter((person) => person.iq >= minIq)

  return (
    <section aria-labelledby="scientists-heading">
      <h2 id="scientists-heading">Scientists</h2>
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
      <ScientistList people={visiblePeople} />
    </section>
  )
}

export default ScientistDirectory
