import React from 'react'
import UseState01 from './a_UseState/UseState01'
import UseState02 from './a_UseState/UseState02'
import UseState03 from './a_UseState/UseState03'
import UseState04 from './a_UseState/UseState04'

function Index() {
  return (
    <div>
        <h1 style={{backgroundColor: "black", color:"white"}}>리액트 Hooks</h1>
        <UseState01 />
        <UseState02 />
        <UseState03 />
        <UseState04 />
    </div>
  )
}

export default Index