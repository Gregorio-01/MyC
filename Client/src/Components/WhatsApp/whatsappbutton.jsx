import { FloatingWhatsApp } from 'react-floating-whatsapp'
// import logo from ''
const Whatsappbutton = () => {
    return (
        <FloatingWhatsApp
        phoneNumber='+542921496693'
        accountName="My Construction"
        statusMessage=""
        chatMessage="¡Hola! ¿Cómo podemos ayudarte?"
        placeholder="Escribe un mensaje..."
        avatar='https://res.cloudinary.com/do0gmouxr/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1680739239/Pagina%20Interna/Logo4_n0joyd.png'
        />
    )
}

export default Whatsappbutton