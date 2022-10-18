import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SeriesForm from './SeriesForm'

function App() {
    return (
        <>
            {/* <App /> */}
            <Routes>
                <Route path="/" element={<SeriesForm />} />
            </Routes>
        </>
    )
}

export default App
