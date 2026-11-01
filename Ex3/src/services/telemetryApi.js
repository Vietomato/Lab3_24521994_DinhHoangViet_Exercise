import { PUBG_VN_SQUADS } from '../data/pubgSquads.js'

/**
 * `signal` is reserved for Task 05 and is not handled yet.
 * @param {string} squadId
 * @param {{ delayMs?: number, failureRate?: number, signal?: AbortSignal }} [options]
 * @returns {Promise<{ id: string, name: string, map: string, phase: string, alive: number, kills: number, wwcdProb: string, status: string }>}
 */
export function fetchKraftonPubgTelemetry(
  squadId,
  { delayMs = 1000, failureRate = 0.35 } = {},
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const squad = PUBG_VN_SQUADS.find((entry) => entry.id === squadId)

      if (!squad) {
        reject(new Error(`Unknown PUBG squad ID: ${squadId}`))
        return
      }

      if (Math.random() < failureRate) {
        reject(new Error(`Simulated telemetry failure for squad "${squadId}".`))
        return
      }

      resolve({ ...squad })
    }, delayMs)
  })
}
