import User from '../../models/Users.js';

export const getAllUsers = async (req, res) => {
  
  
/*   if(req.usuario?.admin===false){
   return  res.status(401).send('usuario no autorizado')
  }
 */

  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los usuarios');
  }
};