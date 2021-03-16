import express, { Router } from 'express';
import { getAllContact } from '../controller/admin-contact';
const router = Router();

router.get('/', getAllContact);

export default router;
