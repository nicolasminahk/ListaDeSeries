import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DataBase from './DataBase'
import ModalToConfirm from './ModalToConfirm'
import SeriesForm from './SeriesForm'
import Connect from './Connect'
import FormEdit from './FormEdit'
import Final from './Final'

function App() {
    return (
        <>
            {/* <BrowserRouter> */}
            <Routes>
                <Route path="/serie" element={<SeriesForm />} />
                <Route path="/serieEdit/:id" element={<FormEdit />} />
                <Route path="/base" element={<DataBase />} />
                <Route path="/modal" element={<ModalToConfirm />} />
                <Route path="/" element={<Connect />} />
                <Route path="/fin" element={<Final />} />
            </Routes>
            {/* </BrowserRouter> */}
        </>
    )
}

export default App
