import cristianoRonaldoAvatar from './assets/cristiano-ronaldo.png'
import lionelMessiAvatar from './assets/lionel-messi.png'
import DeveloperCard from './components/DeveloperCard.jsx'
import styles from './App.module.css'

function App() {
  return (
    <main>
      <h1>Developer Profile - UIT</h1>
      <DeveloperCard
        fullName="Dinh Hoang Viet"
        role="Backend Developer"
        avatarUrl={cristianoRonaldoAvatar}
        avatarAlt="Cristiano Ronaldo celebrating with the Champions League trophy"
        metrics={{ Projects: 5, Experience: '3 years' }}
        skills={[
          { id: 'react', name: 'React', tier: 'Advanced' },
          { id: 'javascript', name: 'JavaScript', tier: 'Advanced' },
          { id: 'css', name: 'CSS', tier: 'Intermediate' },
        ]}
      />

      <article
        className={styles.manualCard}
        aria-labelledby="messi-heading"
      >
        <header className={styles.manualHeader}>
          <img
            className={styles.manualAvatar}
            src={lionelMessiAvatar}
            alt="Lionel Messi playing for Barcelona"
            width="64"
            height="64"
          />
          <hgroup>
            <h2 className={styles.manualName} id="messi-heading">
              Lionel Messi
            </h2>
            <p className={styles.manualRole}>Footballer</p>
          </hgroup>
        </header>

        <dl className={styles.manualMetrics}>
          <dt>Goals</dt>
          <dd>800</dd>
          <dt>Clubs</dt>
          <dd>3</dd>
        </dl>

        <section aria-label="Skills">
          <h3>Skills</h3>
          <ul className={styles.manualSkills}>
            <li>Vợ chủ tịch FIFA infantino — Expert</li>
            <li>Làm tạ — Expert</li>
          </ul>
        </section>
      </article>
    </main>
  )
}

export default App
