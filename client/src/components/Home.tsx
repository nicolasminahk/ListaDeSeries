import * as React from 'react'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper,
    Box,
    Button,
    Divider,
    Typography,
    ButtonGroup,
    Dialog,
} from '@mui/material'

import { UpdateSerie } from './UpdateSerie'
import { NewSerie } from './NewSerie'
import { TableSerie } from '../common/TableSerie'

export interface Serie {
    id: string
    titulo: string
    descripcion: string
    fecha: number
    estrellas: number
    genero: string
    precio: number
    atp: boolean
    active: boolean
}

export const DataBase: FC = () => {
    const [news, setNews] = useState<boolean>(false)
    const [update, setUpdate] = useState<boolean>(false)
    const [drawerDelete, setDrawerDelete] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const [series, setSeries] = useState([])
    const [drawer, setDrawer] = useState<boolean>(false)

    const [singleSerie, setSingleSerie] = useState<Partial<Serie>>({})

    const navigate = useNavigate()

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/api/serie/${singleSerie.id}`).then(() => {
            setDrawerDelete(false)
        })
    }

    const handleActive = () => {
        axios
            .put(`http://localhost:3001/api/serie/${singleSerie.id}`, {
                active: !singleSerie.active,
            })
            .then(({ data }) => {
                setDrawer(true)
                setSingleSerie(data.data)
            })
    }

    useEffect(() => {
        axios.get('http://localhost:3001/api/serie').then(({ data }) => {
            setSeries(data.data.sort((a: Serie, b: Serie) => (a.titulo > b.titulo ? 1 : -1)))
            setDrawer(false)
        })
    }, [update, news, drawer])

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '90%',
                maxHeight: '90%',
                width: '70%',
            }}
        >
            <TableContainer component={Paper}>
                <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
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
                        {series.map((serie: Serie, i: number) => {
                            return (
                                <TableSerie
                                    key={i}
                                    serie={serie}
                                    setSingleSerie={setSingleSerie}
                                    singleSerie={singleSerie}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Divider />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    mt: '4%',
                }}
            >
                <ButtonGroup variant="contained">
                    <Button onClick={() => setNews(true)}>Nuevo</Button>
                    <Button onClick={() => (singleSerie.active ? setUpdate(true) : setModal(true))}>Modificar</Button>
                    {singleSerie.active ? (
                        <Button
                            onClick={() => {
                                handleActive()
                                setDrawer(true)
                            }}
                        >
                            Anular
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                handleActive()
                                setDrawer(true)
                            }}
                        >
                            Activar
                        </Button>
                    )}

                    <Button onClick={() => (singleSerie.active ? setDrawerDelete(true) : setModal(true))}>
                        Eliminar
                    </Button>
                    <Button onClick={() => navigate('/fin')}>Salir</Button>
                </ButtonGroup>
            </Box>

            <UpdateSerie selectSerie={singleSerie} open={update} onClose={setUpdate} setDrawer={setDrawer} />

            {/* Drawer delete */}
            <Dialog open={drawerDelete} onClose={() => setDrawerDelete(false)}>
                <Box display="flex" alignContent="center" sx={{ m: '2%' }}>
                    <Typography> ¿Desea eliminar esta serie?</Typography>
                    <Button
                        onClick={() => {
                            handleDelete()
                            setDrawer(true)
                        }}
                    >
                        Ok
                    </Button>
                </Box>
            </Dialog>
            {/* Drawer nuevo */}
            <NewSerie open={news} onClose={setNews} setDrawer={setDrawer} />
            <Dialog open={modal} onClose={() => setModal(false)}>
                <Box display="flex" alignContent="center" sx={{ m: '2%' }}>
                    <Typography>La serie no esta en estado activo</Typography>
                </Box>
            </Dialog>
        </Box>
    )
}
