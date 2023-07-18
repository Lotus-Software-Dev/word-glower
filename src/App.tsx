import TextArea from './components/TextArea'
import Title from './components/Title'

function App() {
  return (
    <div className="min-h-screen">
      {/* Set correct height later */}
      <div className="flex flex-col justify-center items-center h-screen gap-20">
        <Title>Word Glower</Title>
        <TextArea label="Source Text" />
      </div>
    </div>
  )
}

export default App
