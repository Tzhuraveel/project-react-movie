import {useDispatch} from "react-redux";
import {XMarkIcon} from "@heroicons/react/24/solid";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import './savedMovie.css';
import {modalAction} from "../../redux/slices/modalSlice";
import {moviesRequest} from "../../api";
import {PosterPreview} from "../PosterPreview/PosterPreview";

const SavedMovie = () => {

    let navigate = useNavigate();

    let dispatch = useDispatch();

    let savedMovie = JSON.parse(moviesRequest.getSavedMovie());

    let [, setDeletedMovie] = useState(null);

   const deleteMovie = (index) => {
       setDeletedMovie(index)
       savedMovie.splice(index, 1);
       moviesRequest.setSavedMovie(savedMovie)


   }



    return (
        <div className='containerModalWindow'>
                <div className='modal'>
                    <div className='containerButtonClose'>
                            <div className='titleSavedMovie'>saved movie</div>
                        <button onClick={() => dispatch(modalAction.setModal(false))}>
                            <XMarkIcon className='closeIcon'/>
                        </button>
                    </div>
                    <div className='savedMovie'>
                        {savedMovie && savedMovie.map(({id, poster_path, title}, index) =>
                            <div key={id} className='containerMovie'>
                                 <div className='savedMoviePoster' onClick={() => {
                                     dispatch(modalAction.setModal(false))
                                     navigate(`/details/${id}`)
                                 }}>
                                     <PosterPreview poster={poster_path}/>
                                    <h4 className='infoSavedMovie'>{title}</h4>
                                 </div>
                                <div className='containerTitleAndIcon'>
                                    <XMarkIcon className='xMarkIcon' onClick={() => deleteMovie(index)}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
        </div>
    );
};

export {SavedMovie};