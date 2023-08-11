import Header from "./components/Header"
import Board from "./components/Board"
import { useDispatch, useSelector } from "react-redux"
import boardsSlice from "./redux/boardsSlice"

function App() {
  const dispatch = useDispatch()
  const boards = useSelector((state) => state.boards)
  const theme = useSelector((state) => state.theme)
  const activeBoard = boards.find((board) => board.isActive)
  if (!activeBoard && boards.length > 0)
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }))

  return (
    <div className={`app ${theme}`}>
      {boards.length > 0 ? (
        <>
          <Header />
          <Board />
        </>
      ) : null}
    </div>
  )
}

export default App
