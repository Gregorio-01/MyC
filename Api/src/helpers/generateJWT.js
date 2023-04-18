import jwt from 'jsonwebtoken'

export const generateJWT= ( id = '')=> {

 return new Promise( (resolve, reject)=> {

    const payload = {id}

    jwt.sign(payload,process.env.SECRET_KEY, {
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
