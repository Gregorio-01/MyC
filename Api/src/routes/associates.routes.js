import { Router } from 'express';
import postAssociate from '../controllers/associates/postAssociate.js';
import getAllAssociates from '../controllers/associates/getAssociates.js';
import { deleteAssociate } from '../controllers/associates/deleteAssociate.js';
import { putAssociate } from '../controllers/associates/putAssociate.js';

const associates = Router();

associates.post('/', postAssociate)
associates.get('/', getAllAssociates)
associates.delete('/:id', deleteAssociate)
associates.put('/:id', putAssociate)


export default associates