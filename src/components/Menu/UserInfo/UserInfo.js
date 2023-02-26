import './userInfo.css';
import {useState} from "react";
import {BookmarkIcon} from "@heroicons/react/20/solid";
import {useDispatch} from "react-redux";
import {modalAction} from "../../../redux/slices/modalSlice";

const UserInfo = () => {

    let [openProfile, setOpenProfile] = useState(false);

    let dispatch = useDispatch();

    return (
        <div className='containerProfile' onClick={() => setOpenProfile(prev => !prev)}>
            {
                openProfile && 
                <div className={'openProfile'}>
                    <div className={'info'}>
                        <img src="https://tvmag.ru/upload/32ffc0/screenshot_58-gail2s.png" alt="kokos"/>
                        <h3>Kokos</h3>
                    </div>
                    <div className={'saved'} onClick={() => dispatch(modalAction.setModal(true))}>
                        <span>saved</span>
                        <BookmarkIcon className='bookMark'/>
                    </div>
                </div>
            }
        </div>
    );
};

export {UserInfo};