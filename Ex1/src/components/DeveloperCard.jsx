import { Fragment, useId, useState } from 'react'

function ProfileAvatar({ fullName, avatarUrl }) {
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
      <span role="img" aria-label={`${initials} initials for ${fullName}`}>
        {initials}
      </span>
    )
  }

  return (
    <img
      src={avatarUrl}
      width="64"
      height="64"
      alt={`Portrait of ${fullName}`}
      onError={() => setHasFailed(true)}
    />
  )
}

function DeveloperCard({
  fullName = 'Developer Name',
  role = 'Software Developer',
  avatarUrl = 'https://github.com/Vietomato.png',
  metrics = {},
}) {
  const headingId = useId()

  return (
    <article aria-labelledby={headingId}>
      <header>
        <ProfileAvatar
          key={avatarUrl}
          fullName={fullName}
          avatarUrl={avatarUrl}
        />
        <hgroup>
          <h2 id={headingId}>{fullName}</h2>
          <p>{role}</p>
        </hgroup>
      </header>
      <dl>
        {Object.entries(metrics).map(([label, value]) => (
          <Fragment key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>
    </article>
  )
}

export default DeveloperCard
