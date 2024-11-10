import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    },
    typography: {
        fontFamily:
            'system-ui, "Segoe UI", roboto, "Noto Sans", oxygen, ubuntu, cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        h3: {
            fontSize: '3rem',
            '@media (max-width:1024px)': {
                fontSize: '2rem',
            },
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        body1: {
            fontSize: '0.9rem',
            '@media (max-width:600px)': {
                fontSize: '0.8rem',
            },
        },
    },
})

export default theme
