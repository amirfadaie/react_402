import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import TopNav from "./../Navs/TopNav";
import Header from "./../common/Header";
import MainNav from "./../Navs/MainNav";
import Footer from "./../common/Footer";
import Helmet from "react-helmet";
import LoadingBar from "react-redux-loading-bar";

const MainLayout = props => {
    const { pathname } = props.location;
    return (
        <Fragment>
            <Helmet>
                <title>خودآموز </title>
            </Helmet>
            <div className="landing-layer">
                <LoadingBar
                    style={{ backgroundColor: "lime", height: "5px" }}
                />
                <div className="container">
                    <TopNav />
                    {pathname === "/" ? <Header /> : null}
                </div>
            </div>

            <MainNav />

            <main id="home-page">
                <div className="container">{props.children} </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default withRouter(MainLayout);
