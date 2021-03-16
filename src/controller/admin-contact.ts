import express, { Router } from 'express';
import contactSchema from '../models/contact';

const router = Router();

export const getAllContact = async (
  req: express.Request,
  res: express.Response,
) => {
  const contacts = await contactSchema.find();
  console.log('**************************************', contacts);

  if (!contacts) {
    res.status(404).json({ success: false });
    return;
  }
  res.status(200).render('admin-contact', { contacts });
};

export default router;
