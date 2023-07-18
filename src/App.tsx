
function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-20">
      <div className="text-5xl font-sans text-[#6527BE]">Word Glower</div>
      <div className="flex flex-col justify-center w-8/12 gap-3">
        <label
          htmlFor="sourceText"
          className="text-xl font-sans flex justify-start text-[#6527BE]"
        >
          Source Text
        </label>
        <textarea
          id="sourceText"
          className="h-[500px] border border-gray-300 rounded-lg text-start outline-none p-5"
        />
        <div className="flex justify-end">
          <button className="bg-[#9681EB] hover:bg-sky-700 rounded-lg text-white py-3 px-4">
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
