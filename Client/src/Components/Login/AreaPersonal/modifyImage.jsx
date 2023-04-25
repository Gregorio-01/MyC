import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { putUser } from "../../../store/slices/users/thunks";
import './modifyImage.css';

const ModifyImage = () => {

    const dispatch = useDispatch();
    
    const userData = JSON.parse(window.localStorage.getItem('userData'));
    // const userId = userData.id;

    const updates = {};
    const [imageSelected, setImageSelected] = useState('');
    const modifyInfo = (updates) => {
        console.log(imageSelected);
        const formData = new FormData();
        formData.append("image", imageSelected);
        console.log(formData);
        // setLoading(true);
        updates.files = formData;
        dispatch(putUser(updates));
    };

    return (
        <div className="mainContainer">
            <div className="inputContainer">
                <input className="input" type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={modifyInfo(updates)}>Guardar cambios</button>
            </div>
        </div>
    )
};

export default ModifyImage;