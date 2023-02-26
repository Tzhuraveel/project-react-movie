import {Outlet} from "react-router-dom";

import {Slider} from "../../components";

const HomePage = () => {



    return (
        <div>
            <Slider/>
            <Outlet/>
        </div>
    );
};

export {HomePage};