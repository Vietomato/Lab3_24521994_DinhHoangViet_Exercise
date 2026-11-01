import { useState } from 'react'
import { SMART_PEOPLE } from '../data/smartPeople.js'
import ScientistList from './ScientistList.jsx'

function ScientistDirectory({ initialData = SMART_PEOPLE }) {
  const [people] = useState(initialData)

  return (
    <section aria-labelledby="scientists-heading">
      <h2 id="scientists-heading">Scientists</h2>
      <ScientistList people={people} />
    </section>
  )
}

export default ScientistDirectory
