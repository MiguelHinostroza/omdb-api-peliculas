import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Theme: FunctionComponent<Props> = ({children}) => {

    const theme = createMuiTheme(
        {
            palette:
                {
                    primary: {
                        main: '#151515',
                        light: '#',
                        dark: '#',
                        contrastText: '#fff'
                    },
                    secondary: {
                        main: '#F7A440',
                        light: '#F7A440',
                        dark: '#F7A440',
                        contrastText: '#fff'
                    }
                }
        }
    )


    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;
