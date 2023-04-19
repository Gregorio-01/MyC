import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../../config.js'

export const generateJWT= ( id = '')=> {
  
 return new Promise( (resolve, reject)=> {

    const payload = {id}

    jwt.sign(payload,SECRET_KEY, {
        expiresIn:'1y',
    },
    (err, token) => {
        if(err) {
            console.log(err)
            reject('no se pudo generar el token')
        } else {
            resolve(token)
        }
    }
    )

   }
  )



}
