import { Fragment, useId, useState } from 'react'
import SkillBadge from './SkillBadge.jsx'
import styles from './DeveloperCard.module.css'

function ProfileAvatar({ fullName, avatarUrl, avatarAlt }) {
  const [hasFailed, setHasFailed] = useState(false)
  const initials =
    fullName
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((namePart) => [...namePart][0])
      .join('')
      .toUpperCase() || '?'

  if (!avatarUrl || hasFailed) {
    return (
      <span
        className={styles.avatar}
        role="img"
        aria-label={`${initials} initials for ${fullName}`}
      >
        {initials}
      </span>
    )
  }

  return (
    <img
      className={styles.avatar}
      src={avatarUrl}
      width="64"
      height="64"
      alt={avatarAlt}
      onError={() => setHasFailed(true)}
    />
  )
}

function DeveloperCard({
  fullName = 'Developer Name',
  role = 'Software Developer',
  avatarUrl = 'https://github.com/Vietomato.png',
  avatarAlt = `Avatar for ${fullName}`,
  metrics = {},
  skills = [],
}) {
  const headingId = useId()

  return (
    <article className={styles.card} aria-labelledby={headingId}>
      <header className={styles.header}>
        <ProfileAvatar
          key={avatarUrl}
          fullName={fullName}
          avatarUrl={avatarUrl}
          avatarAlt={avatarAlt}
        />
        <hgroup className={styles.identity}>
          <h2 className={styles.name} id={headingId}>{fullName}</h2>
          <p className={styles.role}>{role}</p>
        </hgroup>
      </header>
      <dl className={styles.metrics}>
        {Object.entries(metrics).map(([label, value]) => (
          <Fragment key={label}>
            <dt className={styles.metricLabel}>{label}</dt>
            <dd className={styles.metricValue}>{value}</dd>
          </Fragment>
        ))}
      </dl>
      <section aria-label="Skills">
        <h3>Skills</h3>
        {skills.length > 0 ? (
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li className={styles.skillItem} key={skill.id}>
                <SkillBadge name={skill.name} tier={skill.tier} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No skills listed yet.</p>
        )}
      </section>
    </article>
  )
}

export default DeveloperCard
