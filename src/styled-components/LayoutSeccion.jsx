import COLORES from '@/constants/colores'
import DISTANCIAS, { GRID_DISTANCIAS } from '@/constants/distancias'
import styled from 'styled-components'

const LayoutSeccion = styled.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    column-gap: ${DISTANCIAS.s};

    padding: ${GRID_DISTANCIAS.verticalSpace} ${GRID_DISTANCIAS.horizontalSpace};
    min-height: 100vh;

    background-color: ${({ bgColor }) => bgColor || COLORES.gray01};
`

export default LayoutSeccion
