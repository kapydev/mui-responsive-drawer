import { List, ListItem, Typography, Box } from "@material-ui/core";

interface IDrawerContent {
    drawerItems: string[]
}

function DrawerContent(props: IDrawerContent) {
    return (
        <Box width={150} padding={3}>
            <List>
                {props.drawerItems.map((drawerItem) => (
                    <ListItem button={true}>
                        <Typography>
                            {drawerItem}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>

    )
}

export default DrawerContent;
