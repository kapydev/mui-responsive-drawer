import { Grid, Drawer, Hidden, AppBar, IconButton, Toolbar } from "@material-ui/core";
import DrawerContent from "./DrawerContent";
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import { SettingsPowerRounded } from "@material-ui/icons";

interface ILayout {
    children: React.ReactNode
}

function Layout(props: ILayout) {

    const [open, setOpen] = useState(false)

    return (
        <Grid container>
            <Grid item xs={12}>
                <AppBar position='relative'>
                    <Toolbar>
                        <Hidden smUp>
                            <IconButton color='inherit' onClick={() => setOpen(true)} >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item>
                <Hidden smUp>
                    <Drawer open={open} onClose={() => setOpen(false)}>
                        <DrawerContent />
                    </Drawer>
                </Hidden>
                <Hidden only='xs'>
                    <DrawerContent />
                </Hidden>
            </Grid>
            <Grid item>
                {props.children}
            </Grid>
        </Grid>
    )
}

export default Layout;
