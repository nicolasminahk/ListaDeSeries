import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Divider, MenuItem } from '@mui/material'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

export default function SeriesForm() {
    const [value, setValue] = React.useState('Controlled')
    const [currency, setCurrency] = React.useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'))

    const handleDateChange = (date: any) => {
        setSelectedDate(date)
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
            }}
            noValidate
            autoComplete="off"
        >
            <Box sx={{ display: 'flex' }}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                />
                <TextField id="outlined-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline />
            </Box>
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={6}
                defaultValue="Default Value"
                fullWidth
            />
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                />
                <Divider orientation="vertical" />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                />
            </Box>
            <Divider />
            <Box>
                <TextField
                    id="filled-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider> */}
            </Box>
        </Box>
    )
}
