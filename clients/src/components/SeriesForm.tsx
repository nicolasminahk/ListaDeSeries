import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Divider, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup } from '@mui/material'

export default function SeriesForm() {
    const [value, setValue] = React.useState('')
    const [currency, setCurrency] = React.useState('')
    const [titulo, setTitulo] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [estrellas, setEstrellas] = React.useState('')
    const [precio, setPrecio] = React.useState(Number)

    console.log(precio)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))

    const handleDateChange = (date: any) => {
        setSelectedDate(date)
    }
    const handleTitulo = (e: any) => {
        setTitulo(e.target.value)
    }
    const handleDescripcion = (e: any) => {
        setDescripcion(e.target.value)
    }
    const handleEstrellas = (e: any) => {
        setEstrellas(e.target.value)
    }
    const handlePrecio = (e: any) => {
        setPrecio(e.target.value)
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
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1 },
                width: '380px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '100px',
                justifyContent: 'space-around',
                borderColor: 'black',
                borderInlineColor: 'black',
            }}
            noValidate
            autoComplete="off"
        >
            <Box sx={{ display: 'flex' }}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Título"
                    multiline
                    maxRows={4}
                    value={titulo}
                    onChange={handleTitulo}
                />
            </Box>
            <TextField
                id="outlined-multiline-static"
                label="Descripción"
                multiline
                rows={6}
                fullWidth
                value={descripcion}
                onChange={handleDescripcion}
            />
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Estrellas"
                    multiline
                    maxRows={4}
                    value={estrellas}
                    onChange={handleEstrellas}
                />
                <Divider orientation="vertical" />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Precio alquiler"
                    multiline
                    maxRows={4}
                    value={precio}
                    onChange={handlePrecio}
                />
            </Box>
            <Divider />
            <Box>
                <TextField
                    id="filled-select-currency"
                    select
                    label="Género"
                    value={currency}
                    onChange={handleChange}
                    helperText="por favor seleccione el género"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
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
                        <FormControlLabel value="Atp" control={<Radio />} label="ATP" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    InputLabelProps={{ shrink: true }}
                    sx={{ backgroundColor: '#fff', color: '#fff' }}
                    label="Dia"
                    type="datetime-local"
                    name="expireAt"
                    fullWidth
                    // value={expireAt}
                    // onChange={(e) => updater(dispatch, { ...props.task, ['expireAt']: e.target.value })}
                />
            </Box>
        </Box>
    )
}
