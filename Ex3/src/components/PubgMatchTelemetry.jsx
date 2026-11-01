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
  const [retryTick, setRetryTick] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    let active = true
    const failureRateOverride = import.meta.env.DEV
      ? globalThis.__PUBG_TELEMETRY_FAILURE_RATE__
      : undefined
    const requestOptions = { signal: controller.signal }
    const delayMsOverride = import.meta.env.DEV
      ? globalThis.__PUBG_TELEMETRY_DELAY_MS__
      : undefined

    if (
      Number.isFinite(failureRateOverride) &&
      failureRateOverride >= 0 &&
      failureRateOverride <= 1
    ) {
      requestOptions.failureRate = failureRateOverride
    }

    if (Number.isFinite(delayMsOverride) && delayMsOverride >= 0) {
      requestOptions.delayMs = delayMsOverride
    }

    fetchKraftonPubgTelemetry(squadId, requestOptions)
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
  const isLoading = status === 'LOADING'

  return (
    <section
      className={styles.telemetry}
      aria-labelledby="telemetry-heading"
      aria-busy={isLoading}
    >
      <h2 id="telemetry-heading">Match telemetry</h2>
      <p>Status: {status}</p>
      <div className={styles.cardArea}>
        {isLoading && (
          <>
            <p className={styles.visuallyHidden} role="status" aria-live="polite">
              Loading telemetry for the selected squad.
            </p>
            <div className={styles.skeleton} aria-hidden="true">
              <span className={styles.skeletonTitle} />
              <div className={styles.skeletonStatistics}>
                <span />
                <span />
                <span />
                <span />
              </div>
              <span className={styles.skeletonFooter} />
            </div>
          </>
        )}
        {status === 'SUCCESS' && isCurrentRequest && (
          <article
            className={styles.match}
            aria-label={`${view.data.name} telemetry`}
          >
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
          <section className={styles.error} role="alert">
            <h3>Telemetry connection failed</h3>
            <p>{view.error.message}</p>
            <button
              className={styles.retryButton}
              type="button"
              onClick={() => setRetryTick((current) => current + 1)}
            >
              Reconnect Satellite
            </button>
          </section>
        )}
      </div>
    </section>
  )
}

export default PubgMatchTelemetry
