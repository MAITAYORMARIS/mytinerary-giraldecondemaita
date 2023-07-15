import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './themeConfig';
import MoneyIcon from '@mui/icons-material/Money';
import IconMoneyBill1Wave from './iconmoney'



export default function ItineraryPrice(props) {

    const PriceIcon = props.price

    const icons = [];
    for (var i = 0; i < PriceIcon; i++) {
        icons.push(<IconMoneyBill1Wave key={`icon_${i}`} />);
    }

    return (
        <ThemeProvider theme={Theme.palette}>
            <div sx={{display:'flex', flexDirection:'row', columGap:'5'}}>
                {icons}
            </div>
        </ThemeProvider>

    )
}