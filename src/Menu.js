import React from 'react';

import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from "react-router-dom";

const rutas = [
  {name: "Home", to: "/"},
  {name: "Test", to: "/test"},
  {name: "Rekognition", to: "/rekognition"},
]
const ArcadiaMenu = ({location: {pathname}}) => (
  <Menu pointing secondary>
    {rutas.map( ({name, to}) => 
      <Menu.Item 
        name={name}
        active={pathname == to} 
        as={Link} 
        to={to}
      />)
    }
  </Menu>
);

export default withRouter(ArcadiaMenu)