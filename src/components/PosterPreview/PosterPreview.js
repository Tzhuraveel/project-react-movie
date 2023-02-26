
import {imgBaseUrl} from "../../api";

const PosterPreview = ({poster}) => {


    return (
        poster ? <img src={imgBaseUrl + poster} alt="poster"/> : <div></div>
    );
};

export {PosterPreview};