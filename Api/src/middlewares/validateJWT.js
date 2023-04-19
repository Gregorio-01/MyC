import { request, response } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/Users.js'
import { SECRET_KEY } from '../../config.js';

export const validateJWT = async (req = request, res = response, next) => {
  const token = req.header('token')
/*   console.log(SECRET_KEY,'clave secreta')
  console.log(token,'segunda validacion')
  const {id} = jwt.verify(token,SECRET_KEY)
  console.log(id,'el verify')
  next() */

  if (!token) {
      return res.status(401).json({ msg: 'no hay token' })
    }
    
    try {
      const {id} = jwt.verify(token,SECRET_KEY)
      const _id = id       
    //leer el usuario que corresponde al uid
    const usuario = (req.usuario = await User.findById(_id))
    if (!usuario) {
      return res.status(401).json({
        msg: 'token no valido, usuario no activo / no hay usuario',
      })
    }
    //verificar si el uid tiene isActive: true
/*     if (!usuario.isActive) {
      return res.status(401).json({
        msg: 'token no valido, usuario no activo',
      })
    } */
   
    req.usuario = usuario

    next()
  } catch (err) {
    res.status(401).json({
      msg: 'token no valido',
    })
  }
} 

