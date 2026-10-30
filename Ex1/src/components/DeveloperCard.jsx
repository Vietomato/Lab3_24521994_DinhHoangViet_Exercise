import { useId } from 'react'

function DeveloperCard({
  fullName = 'Developer Name',
  role = 'Software Developer',
}) {
  const headingId = useId()

  return (
    <article aria-labelledby={headingId}>
      <header>
        <hgroup>
          <h2 id={headingId}>{fullName}</h2>
          <p>{role}</p>
        </hgroup>
      </header>
    </article>
  )
}

export default DeveloperCard
