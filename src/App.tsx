import { useEffect } from "react"
import { useCounterStore } from "./store"
import "./App.css"

function App() {
	const { count } = useCounterStore((state) => state)

	return <OtherComponent count={count} />
}

const logCount = () => {
	const { count } = useCounterStore.getState()
	console.log("count", count)
}

const OtherComponent = ({ count }: { count: number }) => {
	const increment = useCounterStore((state) => state.increment)
	const decrement = useCounterStore((state) => state.decrement)
	const incrementAsync = useCounterStore((state) => state.incrementAsync)

	useEffect(() => {
		logCount()
	}, [])

	return (
		<div>
			{count}
			<div>
				<button onClick={decrement}>Decrement</button>
				<button onClick={increment}>Increment</button>
				<button onClick={incrementAsync}>Increment Async</button>
			</div>
		</div>
	)
}

export default App
