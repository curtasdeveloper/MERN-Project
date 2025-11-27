
const API_BASE = "http://127.0.0.1:3000/"

function App() {
  const testBackendConnection = async () => {
    try {
      const response = await fetch(API_BASE)
      if (!response.ok) throw new Error("Unsuccessful backend connectivity.")
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }
  const backendStatus = testBackendConnection()
  return (
    <>
      <h1 className='italic font-bold'>Hello World from front end!</h1>
    </>
  )
}

export default App
