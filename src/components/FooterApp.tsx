import {makeStyles, Typography} from "@material-ui/core";
import {FunctionComponent} from "react";

interface OwnProps {
}

type Props = OwnProps;
const useStyles = makeStyles(theme => ({
    footer: {
        position: 'sticky',
        bottom: 0,
        left: 0,
        padding: theme.spacing(0.5),
        backgroundColor: theme.palette.primary.main
    }
}))
const FooterApp: FunctionComponent<Props> = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <Typography variant="h6">power by OMDb API - By MikeH.</Typography>
        </div>
    );
};

export default FooterApp;