import DeveloperCard from './components/DeveloperCard.jsx'

function App() {
  return (
    <main>
      <h1>Developer Profile</h1>
      <DeveloperCard
        fullName="Đinh Hoàng Việt"
        role="Lập trình viên"
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
