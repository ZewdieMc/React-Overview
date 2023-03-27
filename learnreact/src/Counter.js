
export const Counter = ({value, increment, decrement}) => {

return (
 <>
 <p className='counter'>{value}</p>
 <button className='counterBtn'onClick={increment}>Increment</button>
 <button className='counterBtn'onClick={decrement}>Decrement</button>
 </>
)
}
