import React from 'react'
import { useSearchParams } from "react-router-dom";
import pizzaViandHaché from "../Images/pizza-viand-haché.jpg";
import pizzaFrommage from "../Images/pizza-frommage.jpg";
import burgerFrommage from "../Images/burger-frommage.jpg";
import tacosFrommage from "../Images/tacos-frommage.jpg";
import tacosViandHaché from "../Images/tacos-viand-haché.jpg";
import "../styles/Services.css";
import { useDispatch, useSelector } from 'react-redux';
import { addData, useSendProductMutation } from '../Configuration/main';

function Services() {
    const dispatch = useDispatch();
    dispatch(addData([{ name: "ahmed", occup: "farmer" }]));
    const data = [
        {
            name: "pizzaViandHaché",
            url: pizzaViandHaché,
            type: "pizza"
        },
        {
            name: "pizzaFrommage",
            url: pizzaFrommage,
            type: "pizza"
        },
        {
            name: "burgerFrommage",
            url: burgerFrommage,
            type: "burger"
        },
        {
            name: "tacosFrommage",
            url: tacosFrommage,
            type: "tacos"
        },
        {
            name: "tacosViandHaché",
            url: tacosViandHaché,
            type: "tacos"
        }
    ];
    const choiceButtons = document.querySelectorAll(".choice-button");
    choiceButtons.forEach((elem) => {
        elem.addEventListener("click", () => {
            choiceButtons.forEach((elem) => elem.classList.remove("active"));
            elem.classList.add("active");
        })
    })
    const [params, setParams] = useSearchParams();
    const myParams = params.get("type");
    const myFilter = data.filter((elem) => {
        if (!myParams) {
            return data;
        } else {
            return elem.type === myParams;
        }
    })
    const [sendProduct, { isLoading }] = useSendProductMutation();

    return (
        <>
            <section className="first-section services-section">
                <h2>Services</h2>
                <h3>Hello this is our services we...</h3>
            </section>

            <section className="menu-services-section">
                <h4>Our Menu</h4>
                <div className="menu-service-division">
                    <div className="menu-choice">
                        <button className="choice-button" onClick={() => setParams("")}>All</button>
                        <button className="choice-button" onClick={() => setParams({ type: "burger" })}>Burger</button>
                        <button className="choice-button" onClick={() => setParams({ type: "tacos" })}>Tacos</button>
                        <button className="choice-button" onClick={() => setParams({ type: "pizza" })}>Pizza</button>
                    </div>
                    <div className="menu-items">
                        {myFilter.map((elem) => {
                            const { name, url } = elem;
                            return (
                                <div key={name} onClick={() => sendProduct({ name, url })} className="menu-item">
                                    <div className="card-img">
                                        <img src={url} alt={name} />
                                    </div>
                                    <div className="card-body">
                                        <h1>{name}</h1>
                                        <p>Description...</p>
                                        <button>Bought</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;