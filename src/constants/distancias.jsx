const DISTANCIAS = {
    s: '1.563rem',
    m: '3.125rem',
    l: '6.25rem',
}

const GRID_DISTANCIAS = {
    verticalSpace: DISTANCIAS.l,
    horizontalSpace: `clamp(${DISTANCIAS.s}, 5vw, ${DISTANCIAS.m})`,
}

export { GRID_DISTANCIAS }
export default DISTANCIAS
