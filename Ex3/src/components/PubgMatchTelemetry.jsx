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
        <p>Squad: {view.data.name}</p>
      )}
      {status === 'ERROR' && isCurrentRequest && (
        <p>Error: {view.error.message}</p>
      )}
    </section>
  )
}

export default PubgMatchTelemetry
