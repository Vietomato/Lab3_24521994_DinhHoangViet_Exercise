import { useId, useState } from 'react'
import PubgMatchTelemetry from './components/PubgMatchTelemetry.jsx'
import { PUBG_VN_SQUADS } from './data/pubgSquads.js'
import styles from './App.module.css'

function App() {
  const [squadId, setSquadId] = useState('ces')
  const squadSelectId = useId()
  const selectedSquad = PUBG_VN_SQUADS.find((squad) => squad.id === squadId)

  return (
    <main className={styles.app}>
      <h1>PUBG VN Live Telemetry</h1>
      <div className={styles.selector}>
        <label htmlFor={squadSelectId}>Select squad</label>
        <select
          id={squadSelectId}
          value={squadId}
          onChange={(event) => setSquadId(event.target.value)}
        >
          {PUBG_VN_SQUADS.map((squad) => (
            <option key={squad.id} value={squad.id}>
              {squad.name}
            </option>
          ))}
        </select>
      </div>
      <p className={styles.selectedSquad}>
        Selected squad: <strong>{selectedSquad.name}</strong>
      </p>
      <PubgMatchTelemetry squadId={squadId} />
    </main>
  )
}

export default App
