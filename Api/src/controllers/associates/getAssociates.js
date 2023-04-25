import Associate from "../../models/Associates.js";

const getAllAssociates = async(req, res) =>{
        try {
            const allAssociates = await Associate.find();
            res.json(allAssociates);
          } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error al obtener los asociados');
          }
}

export default getAllAssociates