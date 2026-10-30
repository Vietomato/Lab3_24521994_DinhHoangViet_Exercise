import styles from './SkillBadge.module.css'

function SkillBadge({ name = 'Skill', tier = 'Beginner' }) {
  return (
    <span className={styles.badge}>
      <span className={styles.name}>{name}</span>
      <span className={styles.tier}>{tier}</span>
    </span>
  )
}

export default SkillBadge
