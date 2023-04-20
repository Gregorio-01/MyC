import{ response, request } from 'express'
import User from '../../models/Users.js';
import bcryptjs from 'bcryptjs'
import { generateJWT } from '../../helpers/generateJWT.js'; 






export const loginUser = async (req, res = response) => {
 
  const { email , password } = req.body

  try {
    //verificar si el modelo existe
    const usuario = await User.findOne({ email: email })
    
    if (!usuario) {
      return res
        .status(400)
        .json({ msg: 'usuario / password son incorrectos -correo' })
    }
    //verificar si usuario esta activo
    
    /* if (!usuario.isActive) {
      return res
        .status(400)
        .json({ msg: 'usuario / password son incorrectos -isActive: false' })
    } */

    //verificar si la contraseña es valida
    
    const validPassword = bcryptjs.compareSync(password, usuario.password)
    
    if (!validPassword) {
      return res.status(400).json({
        msg: 'Usuario / contraseña invalidos -password',
      })
    }
    const token = await generateJWT(usuario._id)
    
   /*  const data = await Usuario.findOne({ mail }, '-isActive') */
/    res.json({
      name: usuario.name,
      lastname: usuario.lastname,
      email: usuario.email ,
      token
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Comuniquese con el administrador',
    })
  }
 
  res.status(200)
}
