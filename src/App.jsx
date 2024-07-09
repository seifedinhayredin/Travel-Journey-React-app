import Data from "./components/Data"
import Main from "./components/Main"
import NavBar from "./components/NavBar"
export default function App(){
    const data = Data.map(item => {
        return <Main
       {...item}
        />
    })
    return (
        <>
        <NavBar />
       {data}
        </>
    )
}