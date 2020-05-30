import React from "react";
import { Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const MenuExampleSecondaryPointing = () => {
  const [selectedLink, setSelectedLink] = React.useState("home");

  const history = useHistory();

  const handleItemClick = (e, { name }) => {
    setSelectedLink(name);
    history.push(`/${name}`);
  };

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={selectedLink === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="about"
          active={selectedLink === "about"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="users"
          active={selectedLink === "users"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={selectedLink === "logout"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default MenuExampleSecondaryPointing;
