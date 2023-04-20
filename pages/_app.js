import '@/styles/globals.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { createTheme, ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }) {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    )

}
