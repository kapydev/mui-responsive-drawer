import { List, ListItem, Typography, Box } from "@material-ui/core";

const items: string[] = ['Lorem Ipsum', 'Dlor Sit', 'Amet Minima', 'Dolores', 'Tempore', 'Pariatur']

function DrawerContent() {
    return (
        <Box width={150} padding={3}>
            <List>
                {items.map((item) => (
                    <ListItem button={true} onClick={() => { console.log(item + " was clicked") }}>
                        <Typography>
                            {item}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>

    )
}

export default DrawerContent;
