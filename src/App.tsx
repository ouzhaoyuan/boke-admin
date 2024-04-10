import './App.css';
import { useAppSelector,useAppDispatch } from './store/hooks';
import {increment,decrement,CounterState} from "./store/features/counterSlice"
import {getMovieData} from './store/features/movieSlice';
import {RootState} from "./store"

function App() {
  const {value,title} = useAppSelector((store)=>store.counter)
  const {list} = useAppSelector((store)=>store.movie)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <p>{value} {title}</p>
        <button onClick={()=>{dispatch(increment({value:2}))}}>加</button>
        <button onClick={()=>{dispatch(decrement())}}>减</button>
        <button onClick={()=>{dispatch(decrement())}}>获取数据</button>
        <ul>
          {
            list.map((item:any)=>{ return <li key={item.tvId}> {item.name}</li> })
          }
        </ul>

      </header>
    </div>
  );
}

export default App;
