import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DataBase from './DataBase'
import SeriesForm from './SeriesForm'

function App() {
    return (
        <>
            {/* <App /> */}
            <Routes>
                <Route path="/serie" element={<SeriesForm />} />
                <Route path="/" element={<DataBase />} />
            </Routes>
        </>
    )
}

export default App
