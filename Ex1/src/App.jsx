import cristianoRonaldoAvatar from './assets/cristiano-ronaldo.png'
import DeveloperCard from './components/DeveloperCard.jsx'

function App() {
  return (
    <main>
      <h1>Developer Profile</h1>
      <DeveloperCard
        fullName="Cristiano Ronaldo - con trai Đinh Hoàng Việt"
        role="Footballer + Developer"
        avatarUrl={cristianoRonaldoAvatar}
        avatarAlt="Cristiano Ronaldo celebrating with the Champions League trophy"
        metrics={{ Projects: 12, Experience: '3 years' }}
        skills={[
          { id: 'react', name: 'React', tier: 'Advanced' },
          { id: 'javascript', name: 'JavaScript', tier: 'Advanced' },
          { id: 'css', name: 'CSS', tier: 'Intermediate' },
        ]}
      />
    </main>
  )
}

export default App
