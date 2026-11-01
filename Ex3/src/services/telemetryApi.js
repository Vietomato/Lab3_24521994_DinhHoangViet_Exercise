import { PUBG_VN_SQUADS } from '../data/pubgSquads.js'

function createAbortError() {
  return new DOMException('The telemetry request was aborted.', 'AbortError')
}

/**
 * @param {string} squadId
 * @param {{ delayMs?: number, failureRate?: number, signal?: AbortSignal }} [options]
 * @returns {Promise<{ id: string, name: string, map: string, phase: string, alive: number, kills: number, wwcdProb: string, status: string }>}
 */
export function fetchKraftonPubgTelemetry(
  squadId,
  { delayMs = 1000, failureRate = 0.35, signal } = {},
) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(createAbortError())
      return
    }

    let timerId
    const cleanup = () => {
      if (timerId !== undefined) {
        clearTimeout(timerId)
      }
      signal?.removeEventListener('abort', handleAbort)
    }
    const handleAbort = () => {
      cleanup()
      reject(createAbortError())
    }
    const finish = (callback, value) => {
      cleanup()
      callback(value)
    }

    signal?.addEventListener('abort', handleAbort, { once: true })
    timerId = setTimeout(() => {
      const squad = PUBG_VN_SQUADS.find((entry) => entry.id === squadId)

      if (!squad) {
        finish(reject, new Error(`Unknown PUBG squad ID: ${squadId}`))
      } else if (Math.random() < failureRate) {
        finish(
          reject,
          new Error(`Simulated telemetry failure for squad "${squadId}".`),
        )
      } else {
        finish(resolve, { ...squad })
      }
    }, delayMs)
  })
}
