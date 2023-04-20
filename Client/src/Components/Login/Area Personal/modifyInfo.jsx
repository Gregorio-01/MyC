import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putUser } from "../../../store/slices/users/thunks";

const ModifyInfo = () => {

    const dispatch = useDispatch();

    const [updates, setUpdates] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [imageSelected, setImageSelected] = useState('');

    const modifyInfo = (updates) => {
        console.log(imageSelected);
        const formData = new FormData();
        formData.append("image", imageSelected);
        console.log(formData);
        setLoading(true);
        updates.files = formData
        dispatch(putUser(updates));
    };

    return (
        <div>
            <div>
                <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
            </div>
            <div>
                <input />
            </div>
            <div>
                <input />
            </div>
            <div>
                <button onClick={modifyInfo(updates)}>Guardar cambios</button>
            </div>
        </div>
    )
};

export default ModifyInfo;