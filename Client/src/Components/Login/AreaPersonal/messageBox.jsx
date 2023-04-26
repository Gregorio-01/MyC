import React from "react";

const MessageBox = () => {
    
    return (
        <div>
            <div>
                <div>
                    <div>
                        <h6>Autor</h6>
                    </div>
                    <div>
                        <h6>Mensaje</h6>
                    </div>
                    <div>
                        <h6>Hora</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h7>Sistema</h7>
                    </div>
                    <div>
                        <h7>No hay nuevos avisos</h7>
                    </div>
                    <div>
                        <h7>{Date.now()}</h7>
                    </div>
                </div>
            </div>
            <div>
                <button>Cerrar</button>
            </div>
        </div>
    )
};

export default MessageBox;