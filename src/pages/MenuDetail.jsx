import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import '../style.css';

const MenuDetail = () => {
    const [menu, setMenu] = useState({});
    const param = useParams();
    console.log(param.id);
    // const {id} = useParams();
    // console.log(id);

    const getMenuDetail = () => {
        axios
        .get(`https://api.mudoapi.tech/menu/${param.id}`)
        .then((res) => {
            console.log(res);
            setMenu(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    useEffect(() => {
        getMenuDetail();
    }, []);

    console.log(menu);

    return (
        <div className="menu-detail">
            <h1>MENU DETAIL</h1>
            <p>nama menu: {menu?.name}</p>
            <p>deskripsi: {menu?.description}</p>
            <img src={menu?.imageUrl} alt={menu.name} style={{width: "200px"}} />
        </div>
    )
}

export default MenuDetail;