import Associate from "../../models/Associates.js";

const postAssociate = async(req, res) =>{
    try {
        let { name, banner, photo, product1, product2, product3, link } = req.body;
        const newAssociate = new Associate({ name, banner, photo, product1, product2, product3, link });
        await newAssociate.save()
        res.json(newAssociate)  
    } catch (error) {
        console.log(error)
        res.json(error)  
    }
}

export default postAssociate