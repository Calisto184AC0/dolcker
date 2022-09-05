import { textLarge, textMedium } from '@/constants/fontSize'
import LayoutSeccion from '@/styled-components/LayoutSeccion'
import styled from 'styled-components'

const StyledSeccion = styled(LayoutSeccion)`
    > h2,
    > h3,
    > h4 {
        ${textLarge}

        grid-column: 1 / span 2;
    }

    > h2 {
        font-weight: bold;
        text-transform: uppercase;
    }

    > h3 {
        font-weight: bold;
    }

    > h4 {
        text-transform: capitalize;
        ::before {
            content: '— ';
        }
    }
`

export default StyledSeccion
