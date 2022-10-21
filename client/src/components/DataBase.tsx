import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import { Box, Button, Checkbox, Divider, Drawer, Modal, Typography } from '@mui/material'
import axios from 'axios'
import FormEdit from './FormEdit'
import SeriesForm from './SeriesForm'

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
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}

function DataBase() {
    const [atp, setAtp] = React.useState(false)
    const [draw, setDraw] = React.useState(false)
    const [drawDelet, setDrawDelet] = React.useState(false)
    const [modal, setModal] = React.useState(false)
    const [news, setNews] = React.useState(false)
    const [series, setSeries] = React.useState([])
    const [selectMovie, setSelectMovie] = React.useState<any>({})
    const [delet, setDelet] = React.useState([])

    const handleChange = (e: any) => {
        setAtp(e.target.value)
    }
    const navigate = useNavigate()

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/api/serie/${selectMovie.id}`).then(({ data }) => setDelet(data.data.data))
        series.filter((select) => select === selectMovie.id)
    }

    const handleActive = () => {
        axios.put(`http://localhost:3001/api/serie/${selectMovie.id}`, { active: !selectMovie.active })
    }

    React.useEffect(() => {
        axios.get('http://localhost:3001/api/serie').then(({ data }) => setSeries(data.data.data))
    }, [draw, drawDelet, news])

    console.log('estado', series)

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
                        {series.map((serie: Serie, i: number) => {
                            console.log(serie.id === selectMovie.id)
                            return (
                                <TableRow
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        border: serie.id === selectMovie.id ? '2.5px solid blue' : 'transparent',
                                        '&:hover': {
                                            border: '3px solid blue',
                                        },
                                    }}
                                    onClick={() => setSelectMovie(serie)}
                                >
                                    <TableCell component="th" scope="serie">
                                        {serie.titulo}
                                    </TableCell>
                                    <TableCell align="right" onClick={() => {}}>
                                        {serie.descripcion}
                                    </TableCell>
                                    <TableCell align="right">{serie.fecha}</TableCell>
                                    <TableCell align="right">{serie.estrellas}</TableCell>
                                    <TableCell align="right">{serie.genero}</TableCell>
                                    <TableCell align="right"> $ {serie.precio}</TableCell>
                                    <TableCell align="right">
                                        {serie.atp}
                                        <Checkbox onClick={handleChange}></Checkbox>
                                    </TableCell>
                                    <TableCell align="right">
                                        {serie.active ? <Typography> AC</Typography> : <Typography> AN</Typography>}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Divider />
            <>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button onClick={() => setNews(true)}>Nuevo</Button>
                    {/* <Button onClick={() => navigate(`/serieEdit/${selectMovie.id}`)}>Modificar</Button> */}
                    <Button onClick={() => (selectMovie.active ? setDraw(true) : setModal(true))}>Modificar</Button>
                    <Button
                        onClick={() => {
                            handleActive()
                        }}
                    >
                        Anular
                    </Button>
                    <Button onClick={() => (selectMovie.active ? setDrawDelet(true) : setModal(true))}>Eliminar</Button>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Button onClick={() => navigate('/fin')}>Salir</Button>
                    </Box>
                </Box>
            </>
            <Drawer
                anchor={'right'}
                open={draw}
                onClose={() => setDraw(false)}
                PaperProps={{ sx: { bgcolor: 'white', width: '50%' } }}
            >
                <Box display={'flex'} alignItems="center" marginLeft={'100px'}>
                    <FormEdit selectMovie={selectMovie} />
                </Box>
            </Drawer>
            {/* Drawer delete */}
            <Drawer
                anchor={'right'}
                open={drawDelet}
                onClose={() => setDrawDelet(false)}
                PaperProps={{ sx: { bgcolor: 'white', width: '50%' } }}
            >
                <Box display={'flex'} alignContent={'center'} sx={{ m: '20px' }}>
                    <Typography> ¿Desea eliminar esta serie?</Typography>
                    <Button onClick={handleDelete}>Ok</Button>
                </Box>
            </Drawer>
            {/* Drawer nuevo */}
            <Drawer
                anchor={'right'}
                open={news}
                onClose={() => setNews(false)}
                PaperProps={{ sx: { bgcolor: 'white', width: '50%' } }}
            >
                <Box display={'flex'} alignItems="center" marginLeft={'100px'}>
                    <SeriesForm />
                </Box>
            </Drawer>
            <Modal
                open={modal}
                onClose={() => setModal(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <Typography>La serie no esta en estado activo</Typography>
                </Box>
            </Modal>
        </Box>
    )
}

export default DataBase
