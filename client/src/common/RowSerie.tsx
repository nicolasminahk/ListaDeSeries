import React, { FC, useEffect, useState } from 'react'

import { TableCell, TableRow, Typography, Checkbox } from '@mui/material'
import axios from 'axios'
import { axiosInstance } from '../config/axiosConfig'

interface Serie {
    id?: string
    titulo: string
    descripcion: string
    fecha: number
    estrellas: number
    genero: string
    precio: number
    atp: boolean
    active: boolean
}

interface TableSerieProps {
    serie: Serie
    setSingleSerie: any
    singleSerie: any
}

export const RowSerie: FC<TableSerieProps> = ({ serie, setSingleSerie, singleSerie }) => {
    const [atp, setAtp] = useState(serie.atp)
    const descripcion = serie.descripcion.length >= 50 ? serie.descripcion.substring(0, 30) + '...' : serie.descripcion
    const titulo = serie.titulo.length > 20 ? serie.titulo.substring(0, 15) + '...' : serie.titulo

    const handleAtp = () => {
        axiosInstance.put(`/api/serie/${serie.id}`, {
            atp: !serie.atp,
        })
        setAtp(!atp)
    }

    return (
        <TableRow
            sx={{
                backgroundColor: serie.id === singleSerie.id ? 'pink' : 'transparent',
                textOverflow: 'ellipsis',
                whiteSpace: 'wrap',
                '&:hover': {
                    backgroundColor: 'pink',
                },
            }}
            onClick={() => setSingleSerie(serie)}
        >
            <TableCell component="th" scope="serie">
                {titulo}
            </TableCell>
            <TableCell align="right" sx={{ maxWidth: '100px' }} onClick={() => {}}>
                {descripcion}
            </TableCell>
            <TableCell align="right">{serie.fecha}</TableCell>
            <TableCell align="right">{serie.estrellas}</TableCell>
            <TableCell align="right">{serie.genero}</TableCell>
            <TableCell align="right"> $ {serie.precio}</TableCell>
            <TableCell align="right">
                {serie.atp}
                <Checkbox checked={atp} onClick={handleAtp}></Checkbox>
            </TableCell>
            <TableCell align="right">
                {serie.active ? <Typography> AC</Typography> : <Typography> AN</Typography>}
            </TableCell>
        </TableRow>
    )
}
