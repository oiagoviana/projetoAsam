import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/home'
import Entrevista from './pages/entrevista'

export default function Index() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/entrevista' element={<Entrevista />}/>
            </Routes>
        </BrowserRouter>
    )
}