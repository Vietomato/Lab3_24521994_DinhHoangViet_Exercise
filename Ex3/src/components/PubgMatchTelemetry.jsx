import { useEffect, useState } from 'react'
import { fetchKraftonPubgTelemetry } from '../services/telemetryApi.js'
import styles from './PubgMatchTelemetry.module.css'

function PubgMatchTelemetry({ squadId }) {
  const [view, setView] = useState({
    status: 'IDLE',
    data: null,
    error: null,
    squadId: null,
    retryTick: null,
  })
  const [retryTick] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    fetchKraftonPubgTelemetry(squadId, { signal: controller.signal })
      .then((data) => {
        if (active && !controller.signal.aborted) {
          setView({
            status: 'SUCCESS',
            data,
            error: null,
            squadId,
            retryTick,
          })
        }
      })
      .catch((error) => {
        if (
          !active ||
          controller.signal.aborted ||
          error.name === 'AbortError'
        ) {
          return
        }

        setView({
          status: 'ERROR',
          data: null,
          error,
          squadId,
          retryTick,
        })
      })

    return () => {
      active = false
      controller.abort()
    }
  }, [squadId, retryTick])

  const isCurrentRequest =
    view.squadId === squadId && view.retryTick === retryTick
  const status = isCurrentRequest ? view.status : 'LOADING'

  return (
    <section className={styles.telemetry} aria-labelledby="telemetry-heading">
      <h2 id="telemetry-heading">Match telemetry</h2>
      <p>Status: {status}</p>
      {status === 'SUCCESS' && isCurrentRequest && (
        <article className={styles.match} aria-label={`${view.data.name} telemetry`}>
          <h3>{view.data.name}</h3>
          <dl className={styles.statistics}>
            <div>
              <dt>Map</dt>
              <dd>{view.data.map}</dd>
            </div>
            <div>
              <dt>Phase</dt>
              <dd>{view.data.phase}</dd>
            </div>
            <div>
              <dt>Alive</dt>
              <dd>{view.data.alive}</dd>
            </div>
            <div>
              <dt>Kills</dt>
              <dd>{view.data.kills}</dd>
            </div>
            <div>
              <dt>WWCD probability</dt>
              <dd>{view.data.wwcdProb}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{view.data.status}</dd>
            </div>
          </dl>
          <p className={styles.disclaimer}>
            This is simulated assignment data, not live match telemetry.
          </p>
        </article>
      )}
      {status === 'ERROR' && isCurrentRequest && (
        <p>Error: {view.error.message}</p>
      )}
    </section>
  )
}

export default PubgMatchTelemetry
