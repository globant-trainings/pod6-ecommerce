import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import CheckoutList from "../components/checkoutList/CheckoutList";
import CartContext from "../store/cart/CartContext";
import Button from "../components/Button/Button";
import "./checkoutpage.css";

const CheckoutPage = () => {
    const { total } = useContext(CartContext);
    const [state, setState] = React.useState({
        name: "",
        last_name: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        phone_number: "",
        credit_card_number: "",
        full_name: "",
        exp_date: "",
        cvv: ""
    })
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const handleClick = () => {
        const values = Object.values(state);
        if (values.includes("")) {
            document.getElementById("error").hidden = false;
        }
        else {
            window.location.href = '/checkout/success';
        }
    };
    return (
        <div>
            <Navbar showCartStatus={false} />
            <div className="row__MainPage">
                <div className="col__MainPage__20">
                </div>
                <div className="col__MainPage__80">
                    <div className="shipping-wrapper">
                        <div>
                            <p>Shipping data:</p>
                            <br />
                            <div className="input-text-wrapper-right">
                                <label className="display-block" htmlFor="name">Name</label>
                                <input className="display-block" id="name" type="text" name="name" onChange={handleChange} />
                            </div>

                            <div className="input-text-wrapper">
                                <label className="display-block" htmlFor="last_name">Last Name</label>
                                <input className="display-block" id="last_name" type="text" name="last_name" onChange={handleChange} />
                            </div>
                            <br style={{ clear: "both" }} />
                            <div className="input-text-wrapper-right">
                                <label className="display-block" htmlFor="address">Address</label>
                                <input className="display-block" id="address" type="text" name="address" onChange={handleChange} />
                            </div>

                            <div className="input-text-wrapper">
                                <label className="display-block" htmlFor="city">City</label>
                                <input className="display-block" id="city" type="text" name="city" onChange={handleChange} />
                            </div>
                            <br style={{ clear: "both" }} />
                            <div className="input-text-wrapper-right">
                                <label className="display-block" htmlFor="state">State</label>
                                <input className="display-block" id="state" type="text" name="state" onChange={handleChange} />
                            </div>

                            <div className="input-text-wrapper">
                                <label className="display-block" htmlFor="zip_code">Zip Code</label>
                                <input className="display-block" id="zip_code" type="text" name="zip_code" onChange={handleChange} />
                            </div>
                            <br style={{ clear: "both" }} />
                            <div>
                                <label className="display-block" htmlFor="phone_number">Phonenumber</label>
                                <input className="display-block" id="phone_number" type="text" name="phone_number" onChange={handleChange} />
                            </div>
                            <br />
                            <p>Credit Card data:</p>
                            <br />
                            <div>
                                <label className="display-block" htmlFor="credit_card_number">Credit Card Number</label>
                                <input className="display-block" id="credit_card_number" type="text" name="credit_card_number" onChange={handleChange} />
                            </div>
                            <div>
                                <label className="display-block" htmlFor="full_name">Full Name</label>
                                <input className="display-block" id="full_name" type="text" name="full_name" onChange={handleChange} />
                            </div>
                            <div className="input-text-wrapper-right">
                                <label className="display-block" htmlFor="exp_date">Exp. Date</label>
                                <input className="display-block" id="exp_date" type="text" name="exp_date" onChange={handleChange} />
                            </div>
                            <div className="input-text-wrapper">
                                <label className="display-block" htmlFor="cvv">CVV</label>
                                <input className="display-block" id="cvv" type="text" name="cvv" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="right-side-wrapper">
                            <p>Products:</p>
                            <CheckoutList />
                            <br/>
                            <span>Subtotal: </span><span style={{fontSize: "18px", fontWeight: "bold"}}>${total}</span>
                            <br/>
                            <br/>
                            <Button variant={"secondary"} size={"large"} children={"Pay Now"} onClick={handleClick} />
                            <br/>
                            <br/>
                            <p id="error" className="error-message" hidden>Some fields are wrong!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
