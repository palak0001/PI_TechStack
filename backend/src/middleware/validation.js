import { body, validationResult } from 'express-validator';

export const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }).withMessage('Name too long'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional().isMobilePhone().withMessage('Valid phone number required'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ min: 10, max: 5000 }).withMessage('Message must be between 10 and 5000 characters')
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
