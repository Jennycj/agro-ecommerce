import express, { Router } from 'express';
import contactSchema from '../models/contact';

const router = Router();

//GET customer complaints
router.post('/contact', (req, res) => {
  const latestContact = new contactSchema({
    fullName: req.body.fullName,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });

  console.log(latestContact);
  latestContact
    .save()
    .then((result) => {
      res.status(201).json();
    })
    .catch((err) => {
      if (err) res.send(err);
    });
});

// router.get('/admin-contact', function (req, res) {
//   contactSchema.find({}, function (err, contact) {
//     res.render('admin-contact', { contact: contact });
//   });
// });
// export const getAllContact = async (
//   req: express.Request,
//   res: express.Response,
// ) => {
//   const contact = await contactSchema.find();
//   console.log(contact);

//   if (!contact) {
//     res.status(404).json({ success: false });
//     return;
//   }
//   res.status(200).render('contact', { contact });
// };

export default router;
