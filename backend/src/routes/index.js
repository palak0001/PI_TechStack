import express from 'express';
import { validateContact, handleValidationErrors } from '../middleware/validation.js';
import { submitContact, getContacts } from './contacts.js';

const router = express.Router();

router.post('/contact', validateContact, handleValidationErrors, submitContact);
router.get('/contacts', getContacts);

export default router;
