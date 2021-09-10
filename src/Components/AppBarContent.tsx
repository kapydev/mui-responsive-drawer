import { Hidden, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

function AppBarContent() {
    return (
        <Toolbar>

            <Hidden smUp>
                <IconButton edge="start" color="inherit">
                    <MenuIcon />
                </IconButton>
            </Hidden>

            <Typography variant="h5" align="center">
                Lorem Ipsum
            </Typography>

        </Toolbar>
    )
}

export default AppBarContent;
