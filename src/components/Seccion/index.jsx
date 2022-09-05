import LayoutSeccion from '@/styled-components/LayoutSeccion'
import StyledSeccion from './styles'

const nivelTituloRel = {
    1: 'h2',
    2: 'h3',
    3: 'h4',
}

const Seccion = ({ titulo, nivelTitulo, bgColor, children }) => {
    const Encabezado = nivelTituloRel[nivelTitulo] || nivelTituloRel[1]

    return (
        <StyledSeccion bgColor={bgColor}>
            <Encabezado>{titulo}</Encabezado>
            {children}
        </StyledSeccion>
    )
}

export default Seccion
