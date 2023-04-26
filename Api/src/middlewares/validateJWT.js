import { request, response } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/Users.js'
import { SECRET_KEY } from '../../config.js';

export const validateJWT = async (req = request, res = response, next) => {
    
  const token = req.headers.token;
  console.log('entro al validate token');

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

   
    req.usuario = usuario 

    next()
  } catch (err) {
    res.status(401).json({
      msg: 'token no valido',
    })
  }
} 

