import React from "react";
import ReactDom from "react-dom";
import "./index.scss";
import MainView from "./components/mainview/main-view.jsx";

class MyFlixApplication extends React.Component {
    render() {
        return (
            <div className="my-flix">
                <MainView />
            </div>
        )
    }
}

const container = document.getElementsByClassName("app-container")[0];
ReactDom.render(React.createElement(MyFlixApplication), container);