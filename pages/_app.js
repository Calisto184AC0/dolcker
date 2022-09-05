import Head from 'next/head'
import '../styles/index.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>
                    Desarrollo de fachadas ventiladas innovadoras y de alto
                    rendimiento | Dolcker
                </title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    name='description'
                    content='Dolcker trabaja con arquitectos y diseñadores para llevar sus proyectos a la vanguardia de la construcción sostenible. Nuestra apuesta decidida por la calidad de nuestros productos nos hace merecedores de la confianza de un gran número de arquitectos, colocadores y clientes.'
                />
                <meta
                    name='keywords'
                    content='fachada, fachada ventilada, porcelánico, arquitectura, diseño'
                />
                <meta name='robots' content='index' />
                <meta charSet='UTF-8' />
                <link rel='icon' type='image/svg+xml' href='favicon.ico' />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
