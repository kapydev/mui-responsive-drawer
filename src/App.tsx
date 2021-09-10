import Layout from "./Components/Layout";
import { useState } from 'react';
import { Typography } from "@material-ui/core";

const items: string[] = ['Lorem Ipsum', 'Dlor Sit', 'Amet Minima', 'Dolores', 'Tempore', 'Pariatur']

function App() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    
    <Layout
      drawerItems={items}
      open={open}
      handleClose={() => { setOpen(false) }}
      handleOpen={() => { setOpen(true) }}
    >

      <Typography align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ex voluptatum dignissimos adipisci doloribus tempore dicta temporibus pariatur, odio quasi minima inventore eligendi distinctio nostrum deleniti odit totam nobis illo. Quae dolorum natus quasi dolores debitis possimus harum doloribus velit sit repellendus vitae sequi dignissimos consequuntur ad odit aliquid, blanditiis quod? Libero nostrum quod unde minus eius animi ad perspiciatis! Doloremque earum tenetur minus iure consequatur blanditiis odio molestiae officia, neque quis animi laboriosam et nesciunt impedit provident fugit molestias dolores incidunt architecto, pariatur recusandae eligendi nobis esse? Pariatur harum cumque assumenda voluptatum veritatis, dolor perspiciatis illo aspernatur quas ad eveniet quam labore iure iste, reiciendis animi voluptatem iusto unde consequatur? Fugit ad deleniti neque dicta quo, esse omnis blanditiis corrupti nobis quis? Necessitatibus aperiam doloremque minima excepturi nam dolor eveniet vel eligendi. Possimus adipisci quae, cupiditate voluptas mollitia architecto sapiente delectus deserunt ducimus dicta! Assumenda fuga nesciunt explicabo aspernatur earum ad, quasi ratione nemo quod! Nostrum dolorum temporibus, deleniti quibusdam praesentium quod nemo dolore fuga. Ipsam, minima officia facere dicta facilis impedit, hic libero illo laboriosam distinctio deserunt fuga iusto numquam earum? Molestias, ipsum architecto in ut odio quos alias eligendi corrupti earum praesentium dolore porro iusto fuga qui?
      </Typography>

    </Layout >
  );
}

export default App;
