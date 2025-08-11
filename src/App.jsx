import { useState } from 'react'
// import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [todos, setTodos] = useState(["밥먹기", "잠자기"])
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* 추가 좋아요 섹션 */}
      <div>
        <h1>❤️ {likes}</h1>
        <button onClick={() => setLikes(likes + 1)}>좋아요!</button>
      </div>

      <hr />

      {/* 할일 목록 섹션 */}
      <div>
        <h2>할일 목록</h2>
        {todos.map((todo, index) => (
          <p key={index}>• {todo}</p>
        ))}
      </div>

      <hr />

      {/* 카운터 섹션 */}
      <div>
        <h2>카운터</h2>
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App