import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getThisUser, putUser } from "../../../store/slices/users/thunks";
import './modifyImage.css';

const ModifyImage = () => {

    const dispatch = useDispatch();

    const [imageSelected, setImageSelected] = useState('');
    const modifyInfo = () => {
        console.log(imageSelected);
        const formData = new FormData();
        formData.append("image", imageSelected);
        dispatch(putUser(formData));
    };

    return (
        <div className="modifyImageContainer">
            <div className="inputContainer">
                <input className="input" type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={() => modifyInfo()}>Guardar cambios</button>
            </div>
        </div>
    )
};

export default ModifyImage;