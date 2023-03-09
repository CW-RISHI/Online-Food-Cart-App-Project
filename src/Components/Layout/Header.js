import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food Cart</h1>
                <HeaderCartButton onClick = {props.onOpenCartOverlay } />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt = "Enjoy Delicious food!" />
            </div>
        </Fragment>
    )
};

export default Header;