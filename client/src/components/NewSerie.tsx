import * as React from 'react'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
    Box,
    Button,
    Divider,
    Drawer,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Input,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { Serie } from './DataBase'

interface NewSerieProps {
    open: boolean
    onClose: (param: boolean) => void
    setDrawer: (param: boolean) => void
}

export const NewSerie: FC<NewSerieProps> = ({ open, onClose, setDrawer }) => {
    const [genero, setGenero] = useState<string>('')
    const [atp, setAtp] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<string>()
    // const [showError, setShowError] = React.useState<boolean>(true)
    // const values = ['titulo', 'descripcion', 'precio', 'estrellas', 'fechas', 'genero']
    const {
        register,
        getValues,
        formState: { errors, isValid },
        setError,
    } = useForm<Serie>({ mode: 'onBlur' })
    const body = getValues()

    const handleSubmit = () => {
        axios.post('http://localhost:3001/api/serie', {
            ...body,
            active: true,
            atp: atp,
            fecha: selectedDate,
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

    console.log()

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
                    <FormControl error={!!errors.titulo}>
                        <InputLabel htmlFor="titulo" sx={{ color: 'highlight.main' }}>
                            Titulo
                        </InputLabel>
                        <Input
                            inputProps={{ sx: { color: 'black' } }}
                            id="titulo"
                            {...register('titulo', {
                                required: 'Complete el campo',
                                minLength: {
                                    value: 3,
                                    message: 'Debe ingresar al menos 3 letras',
                                },
                            })}
                        />
                        {errors.titulo && <FormHelperText>{errors.titulo.message}</FormHelperText>}
                    </FormControl>
                </Box>
                <FormControl error={!!errors.descripcion} fullWidth size="medium" margin="dense" variant="filled">
                    <InputLabel htmlFor="descripcion" sx={{ color: 'highlight.main' }}>
                        Descripcion
                    </InputLabel>
                    <Input
                        inputProps={{ sx: { color: 'black' } }}
                        id="descripcion"
                        {...register('descripcion', {
                            required: 'Complete el campo',
                            minLength: {
                                value: 3,
                                message: 'Debe ingresar al menos 5 letras',
                            },
                        })}
                    />
                    {errors.descripcion && <FormHelperText>{errors.descripcion.message}</FormHelperText>}
                </FormControl>
                <Divider />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FormControl error={!!errors.estrellas} fullWidth size="medium" margin="dense" variant="filled">
                        <InputLabel htmlFor="estrellas" sx={{ color: 'highlight.main' }}>
                            Estrellas
                        </InputLabel>
                        <Input
                            inputProps={{ sx: { color: 'black' } }}
                            id="estrellas"
                            {...register('estrellas', {
                                required: 'Complete el campo',
                                minLength: {
                                    value: 1,
                                    message: 'Indique del 1 al 5',
                                },
                            })}
                        />
                        {errors.estrellas && <FormHelperText>{errors.estrellas.message}</FormHelperText>}
                    </FormControl>
                    <Divider orientation="vertical" />
                    <FormControl error={!!errors.estrellas} fullWidth size="medium" margin="dense" variant="filled">
                        <InputLabel htmlFor="precio" sx={{ color: 'highlight.main' }}>
                            Precio
                        </InputLabel>
                        <Input
                            inputProps={{ sx: { color: 'black' } }}
                            id="precio"
                            {...register('precio', {
                                required: 'Complete el campo',
                                minLength: {
                                    value: 1,
                                    message: 'Indique un número',
                                },
                            })}
                        />
                        {errors.precio && <FormHelperText>{errors.precio.message}</FormHelperText>}
                    </FormControl>
                </Box>
                <Divider />
                <Box>
                    <TextField
                        id="filled-select-currency"
                        select
                        variant="standard"
                        label="Género"
                        error={!!errors.genero}
                        helperText="por favor seleccione el género"
                        {...register('genero', {
                            required: 'Complete el campo',
                        })}
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
                        sx={{ backgroundColor: '#fff', color: '#fff' }}
                        label="Dia"
                        variant="standard"
                        type="datetime-local"
                        name="expireAt"
                        fullWidth
                        onChange={(e) => setSelectedDate(e.target.value)}
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
                    <Button onClick={() => onClose(false)}>Volver</Button>
                </Box>
            </Box>
        </Drawer>
    )
}
