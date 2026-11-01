import styles from './PubgMatchTelemetry.module.css'

function PubgMatchTelemetry({ squadId }) {
  return (
    <section className={styles.telemetry} aria-labelledby="telemetry-heading">
      <h2 id="telemetry-heading">Match telemetry</h2>
      <p>Selected squad ID: {squadId}</p>
      <p>Telemetry has not been loaded.</p>
    </section>
  )
}

export default PubgMatchTelemetry
