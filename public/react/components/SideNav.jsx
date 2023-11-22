import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import apiURL from "../api";

function SideNav() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    async function getItems(){
        try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			setItems(itemsData);
		} catch (err) {
			console.log("error: ", err)
		}
    }

    useEffect(() => {
		getItems();
	}, []);

    async function handleSubmit(e){
        e.preventDefault();
        console.log(search);
        items.map((value) => {
            if (((value.name).toLowerCase()).includes(search.toLowerCase())){
            console.log(value)}
        
        })
        setSearch("");
    }

    return(
    <>
        <div >
            <form onSubmit={ (e) => handleSubmit(e)}>
                <input
                id="search-input"
                type="text"
                placeholder="search:"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                />
            </form>
        </div>
        <div>
            <button onClick={() => navigate("/home")}>home</button>
            <button>profile</button>
            <button>settings</button>
            <button>logout</button>
        </div>
    </>)
}

export default SideNav;
