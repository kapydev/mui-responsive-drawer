import { Grid, Drawer, Hidden, AppBar, IconButton, Toolbar, Typography, Box } from "@material-ui/core";
import DrawerContent from "./DrawerContent";
import MenuIcon from '@material-ui/icons/Menu';

interface ILayout {
    children: any
    drawerItems: string[]
    open: boolean
    handleOpen(): void
    handleClose(): void
}

function Layout(props: ILayout) {

    return (
        <Grid container direction="column">
            <Grid item>
                <AppBar position="relative">
                    <Toolbar>

                        {/* For Mobile Only*/}
                        <Hidden mdUp>
                            <IconButton edge="start" color="inherit" onClick={props.handleOpen}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>

                        <Box padding={2}>
                            <Typography variant="h5" align="center">
                                Lorem Ipsum
                            </Typography>
                        </Box>

                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item>
                <Grid container direction="row">
                    <Grid item>

                        {/* For Web Only */}
                        <Hidden smDown>
                            <DrawerContent drawerItems={props.drawerItems} />
                        </Hidden>

                        {/* For Mobile Only */}
                        <Hidden smUp>
                            <Drawer open={props.open} onClose={props.handleClose}>
                                <DrawerContent drawerItems={props.drawerItems} />
                            </Drawer>
                        </Hidden>

                    </Grid>

                    <Grid item xs>
                        <Box padding={3}>
                            <Grid container justifyContent="center">
                                <Grid item xs={10}>
                                    {props.children}
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

export default Layout;
