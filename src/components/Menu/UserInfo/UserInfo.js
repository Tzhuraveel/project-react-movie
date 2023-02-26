import './userInfo.css';
import {useState} from "react";
import {BookmarkIcon} from "@heroicons/react/20/solid";
import {useDispatch} from "react-redux";
import {modalAction} from "../../../redux/slices/modalSlice";

const UserInfo = () => {

    let [openProfile, setOpenProfile] = useState(false);

    let dispatch = useDispatch();

    return (
        <button className='containerProfile' onClick={() => setOpenProfile(prev => !prev)}>
            T
            {
                openProfile && 
                <div className={'openProfile'}>
                    <div className={'info'}>
                    </div>
                    <div className={'saved'} onClick={() => dispatch(modalAction.setModal(true))}>
                        <span>saved</span>
                        <BookmarkIcon className='bookMark'/>
                    </div>
                </div>
            }
        </button>
    );
};

export {UserInfo};