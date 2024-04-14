import React from "react";

const Header = () => {
    return (
        <React.Fragment>
            <header>
                
                
                <h2> آموزش ببینید ، تجربه کسب کنید و وارد بازار کار شوید </h2>
                
            </header>
            <div className="search-form">
                <form>
                    <input
                        type="text"
                        name=""
                        placeholder="چی دوست داری یاد بگیری ؟"
                    />
                    <button>
                        <i className="zmdi zmdi-search"></i>
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Header;
