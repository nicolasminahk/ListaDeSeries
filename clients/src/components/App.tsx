import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DataBase from './DataBase'
import ModalToConfirm from './ModalToConfirm'
import SeriesForm from './SeriesForm'
import Connect from './Connect'

function App() {
    return (
        <>
            {/* <App /> */}
            <Routes>
                <Route path="/serie" element={<SeriesForm />} />
                <Route path="/base" element={<DataBase />} />
                <Route path="/modal" element={<ModalToConfirm />} />
                <Route path="/" element={<Connect />} />
            </Routes>
        </>
    )
}

export default App
