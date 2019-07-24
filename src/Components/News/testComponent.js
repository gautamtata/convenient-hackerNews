import React from 'react'

const TestComponent = ({ state }) => {
let arr = []
arr.push(state)
console.log(arr)

function printState(arr) {
  for (let i = 0; i < arr.length; i++) {
   return arr[i]
  }
}
  return (
    <div print={printState(arr)}>HI </div>
  )
}
export default TestComponent