import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style.css";


const Menu = () => {
  const [menu, setMenu] = useState([]);

  const getMenu = () => {
    axios
    .get("https://api.mudoapi.tech/menus")
    .then((res) => {
      setMenu(res.data.data.Data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getMenu();
  }, []);

  console.log("menu", menu);

  return (
    <div className="menu">
      <Navbar />
      <h1>MENU PAGE</h1>
      {menu.map((item) => {
        return (
          <div className="menu-item">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{ width: "200px" }}
            />
            <Link to={`/menu/${item.id}`}>
              <div>
                <button>detail</button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
