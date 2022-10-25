import * as React from 'react'
import { FC, useState, useMemo } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
    TextField,
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Drawer,
    InputLabel,
    Input,
} from '@mui/material'

interface UpdateSerieProps {
    selectSerie: any //falta tiparlo
    open: boolean
    onClose: (param: boolean) => void
    setDrawer: (param: boolean) => void
}

export const UpdateSerie: FC<UpdateSerieProps> = ({ selectSerie, open, onClose, setDrawer }) => {
    const [titulo, setTitulo] = useState(selectSerie.titulo)
    const [genero, setGenero] = useState(selectSerie.genero)
    const [atp, setAtp] = useState(selectSerie.atp)
    const [descripcion, setDescripcion] = useState(selectSerie.descripcion)
    const [estrellas, setEstrellas] = useState(selectSerie.estrellas)
    const [precio, setPrecio] = useState(selectSerie.precio)

    const [selectedDate, setSelectedDate] = useState()

    const handleSubmit = () => {
        axios.put(`http://localhost:3001/api/serie/${selectSerie.id}`, {
            titulo: titulo,
            descripcion: descripcion,
            precio: precio,
            estrellas: estrellas,
            fecha: selectedDate,
            active: true,
            genero: genero,
            atp: atp,
        })
    }

    const currencies = [
        {
            value: 'animada',
            label: 'animada',
        },
        {
            value: 'accion',
            label: 'accion',
        },
        {
            value: 'suspenso',
            label: 'suspenso',
        },
        {
            value: 'terror',
            label: 'terror',
        },
    ]

    return (
        <Drawer open={open} onClose={() => onClose(false)} anchor="right" PaperProps={{ sx: { width: '50%' } }}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                noValidate
                autoComplete="off"
            >
                <Box sx={{ display: 'flex' }}>
                    <TextField
                        variant="standard"
                        id="outlined-multiline-flexible"
                        label="Título"
                        multiline
                        maxRows={4}
                        defaultValue={selectSerie.titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </Box>
                <TextField
                    variant="standard"
                    id="outlined-multiline-static"
                    label="Descripción"
                    multiline
                    rows={6}
                    fullWidth
                    defaultValue={selectSerie.descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <Divider />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        variant="standard"
                        id="outlined-multiline-flexible"
                        label="Estrellas"
                        multiline
                        maxRows={4}
                        defaultValue={selectSerie.estrellas}
                        onChange={(e) => setEstrellas(e.target.value)}
                    />
                    <Divider orientation="vertical" />
                    <TextField
                        variant="standard"
                        id="outlined-multiline-flexible"
                        label="Precio alquiler"
                        multiline
                        maxRows={4}
                        defaultValue={selectSerie.precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </Box>
                <Divider />
                <Box sx={{ justifyContent: 'space-between' }}>
                    <TextField
                        id="filled-select-currency"
                        variant="standard"
                        select
                        label="Género"
                        defaultValue={selectSerie.genero}
                        helperText="por favor seleccione el género"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value} onClick={() => setGenero(option.value)}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="Atp"
                                control={<Radio />}
                                label="ATP"
                                onClick={() => setAtp(!atp)}
                            />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        variant="standard"
                        sx={{ backgroundColor: '#fff', color: '#fff' }}
                        label="Dia"
                        type="datetime-local"
                        name="expireAt"
                        fullWidth
                    />
                </Box>
                <Box display={'flex'} flexDirection={'row'}>
                    <Button
                        onClick={() => {
                            handleSubmit()
                            setDrawer(true)
                        }}
                    >
                        Añadir
                    </Button>
                </Box>
            </Box>
        </Drawer>
    )
}
