import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Final from './Final'
import Base from '../views/Base'
import { Home } from '../views/Home'

function App() {
    return (
        <>
            {/* <BrowserRouter> */}
            <Routes>
                <Route path="/base" element={<Base />} />
                <Route path="/" element={<Home />} />
                <Route path="/fin" element={<Final />} />
            </Routes>
            {/* </BrowserRouter> */}
        </>
    )
}

export default App
