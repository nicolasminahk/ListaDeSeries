import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Button, Checkbox, Divider, Typography } from '@mui/material'

function createData(
    titulo: string,
    descripcion: string,
    fecha: number,
    estrellas: number,
    genero: string,
    precio: number,
    atp: boolean,
    estado: boolean
) {
    return { titulo, descripcion, fecha, estrellas, precio, genero, atp, estado }
}

const rows = [
    createData('Breaking Bad', 'una serie de narcotrafico', 8.2013, 5, 'suspeso', 666, true, true),
    createData('Tween Peaks', 'una serie de  delito', 11.2003, 3, 'suspeso', 999, true, true),
    createData('Walking Dead', 'una serie de un zomnies', 12.2006, 4, 'suspeso', 280, true, false),
    createData('Tres Acodes', 'una serie de un jovenes ', 12.2022, 5, 'comedia', 600, true, true),
]

function DataBase() {
    const [atp, setAtp] = React.useState(false)
    const handleChange = (e: any) => {
        setAtp(e.target.value)
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '80%', m: '30px' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Series</TableCell>
                            <TableCell align="right">Descripcion</TableCell>
                            <TableCell align="right">Fecha</TableCell>
                            <TableCell align="right">Estrellas</TableCell>
                            <TableCell align="right">Genero</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">ATP</TableCell>
                            <TableCell align="right">Activo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.titulo} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.titulo}
                                </TableCell>
                                <TableCell align="right">{row.descripcion}</TableCell>
                                <TableCell align="right">{row.fecha}</TableCell>
                                <TableCell align="right">{row.estrellas}</TableCell>
                                <TableCell align="right">{row.genero}</TableCell>
                                <TableCell align="right"> $ {row.precio}</TableCell>
                                <TableCell align="right">
                                    {row.atp}
                                    <Checkbox onClick={handleChange}></Checkbox>
                                </TableCell>
                                <TableCell align="right">
                                    {row.estado}
                                    <Typography> AC</Typography>
                                    {!row.estado}
                                    <Typography> AN</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Divider />
            <>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button>Nuevo</Button>
                    <Button>Modificar</Button>
                    <Button>Anular</Button>
                    <Button>Eliminar</Button>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Button>Salir</Button>
                    </Box>
                </Box>
            </>
        </Box>
    )
}

export default DataBase
