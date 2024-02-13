import { Route, Routes } from "react-router-dom"
import MultiselectDropdownMenu from './Day1/MultiselectDropdownMenu'
import Input from './Day2/Input'

const Home = () => {
    return(
       <Routes>
        <Route path="/" element={<MultiselectDropdownMenu />} />
        <Route path="/input" element={<Input />} />
       </Routes>
    )
}

export default Home