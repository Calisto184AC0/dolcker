import { css } from 'styled-components'

const getTextStyles = ({
    fs_min,
    fs_scale,
    fs_max,
    lh_min,
    lh_scale,
    lh_max,
}) => {
    return css`
        color: ${({ textColor }) => textColor || 'black'};
        font-size: clamp(${fs_min}, ${fs_scale}, ${fs_max});
        line-height: clamp(${lh_min}, ${lh_scale}, ${lh_max});
    `
}

const sizes = {
    s: {
        fs_min: '14px',
        fs_scale: '0.833vw',
        fs_max: '1rem',
        lh_min: '21px',
        lh_scale: '1.302vw',
        lh_max: '25px',
    },
    m: {
        fs_min: '16px',
        fs_scale: '0.99vw',
        fs_max: '1.188rem',
        lh_min: '25px',
        lh_scale: '1.51vw',
        lh_max: '29px',
    },
    l: {
        fs_min: '19px',
        fs_scale: '1.563vw',
        fs_max: '1.875rem',
        lh_min: '29px',
        lh_scale: '2.083vw',
        lh_max: '40px',
    },
    xl: {
        fs_min: '30px',
        fs_scale: '3.125vw',
        fs_max: '3.75rem',
        lh_min: '32px',
        lh_scale: '3.646vw',
        lh_max: '70px',
    },
}

const textSmall = getTextStyles(sizes.s)

const textMedium = getTextStyles(sizes.m)

const textLarge = getTextStyles(sizes.l)

const textExtraLarge = getTextStyles(sizes.xl)

export { textSmall, textMedium, textLarge, textExtraLarge }
