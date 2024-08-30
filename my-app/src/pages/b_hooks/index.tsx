import React from 'react'
import UseState01 from './a_UseState/UseState01'
import UseState02 from './a_UseState/UseState02'
import UseState03 from './a_UseState/UseState03'
import UseState04 from './a_UseState/UseState04'
import UseState05 from './a_UseState/UseState05'
import UseState06 from './a_UseState/UseState06'
import UseRef01 from './b_UseRef/UseRef01'
import UseRef02 from './b_UseRef/UseRef02'
import Practice01 from './a_UseState/Practice01'
import UseRef03 from './b_UseRef/UseRef03'
import UseEffect01 from './c_UseEffect/UseEffect01'
import UseEffect02 from './c_UseEffect/UseEffect02'
import UseMemo from './d_Use_Memo_Callback/UseMemo'
import UseMemo02 from './d_Use_Memo_Callback/useMemo02'
import UseCallback from './d_Use_Memo_Callback/UseCallback'
import {UseReducer01} from './e_UseReducer/UseReducer01'
import UseReducer02 from './e_UseReducer/UseReducer02'
import Custom01 from './f_CustomHook/Custom01'
import Custom02 from './f_CustomHook/Custom02'

function Index() {
  return (
    <div>
        <h1 style={{backgroundColor: "black", color:"white"}}>리액트 Hooks</h1>
        <UseState01 />
        <UseState02 />
        <UseState03 />
        <UseState04 />
        <UseState05 />
        <UseState06 />

        <hr />
        <UseRef01 />
        <UseRef02 />
        <UseRef03 />

        <hr />
        <UseEffect01 />
        <UseEffect02 />

        <hr />
        <UseMemo />
        <UseMemo02 />

        <hr />
        <UseCallback />

        <hr />
        <h2>리액트 Hooks React Reducer</h2>
        <UseReducer01 />
        <UseReducer02 />

        <hr />
        <h2>리액트 Custom Hook</h2>
        <Custom01 />
        <Custom02 />

        <hr />
        <Practice01 />
    </div>
  )
}

export default Index