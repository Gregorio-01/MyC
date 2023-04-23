import { Router } from 'express';

import { getAllMaterials } from '../controllers/materials/getAllMaterials.js';
import { getMaterialById } from '../controllers/materials/getMaterialById.js';
import { createMaterial } from '../controllers/materials/createMaterial.js';
import { deleteMaterial } from '../controllers/materials/deleteMaterial.js';
import { updateMaterial } from '../controllers/materials/updateMaterial.js';


const materials = Router();

materials.get('/', getAllMaterials);
materials.get('/:id', getMaterialById);
materials.post('/', createMaterial);
materials.delete('/:id', deleteMaterial);
materials.put('/:id', updateMaterial);


export default materials;