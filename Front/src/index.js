import React from "react";
import { render } from "react-dom";

const App = () => (
    <form action="http://localhost:8000/form" method="post">
        <input type="text" name="name"/>
        <input type="submit" name="" id="" value='coucou'/>
    </form>
);

render(<App />, document.getElementById("root"));