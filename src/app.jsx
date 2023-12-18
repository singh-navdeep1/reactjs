import Counter from './component/count'
import Profile from './component/profile'
import { useState } from "react"

function App() {
    const [data, setData] = useState(0)
    // let data= {name:"Levi",age : 28, show :"aot" }

    // return <Profile data={data}/>
    return < Counter/>
}

export default App