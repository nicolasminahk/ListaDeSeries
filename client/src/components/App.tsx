import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Base from '../views/Base'
import { Home } from '../views/Home'

function App() {
    return (
        <>
            <Routes>
                <Route path="/base" element={<Base />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default App
