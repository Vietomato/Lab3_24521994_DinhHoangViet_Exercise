import DeveloperCard from './components/DeveloperCard.jsx'

function App() {
  return (
    <main>
      <h1>Developer Profile</h1>
      <DeveloperCard
        fullName="Dinh Hoang Viet"
        role="Developer"
        metrics={{ Projects: 12, Experience: '3 years' }}
      />
    </main>
  )
}

export default App
