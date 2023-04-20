import express from 'express';
import { createUser } from '../controllers/createUser.js';
import { getAllUsers, getUser } from '../controllers/readUser.js';
import {
  findAndUpdateData,
  findAndUpdateUser,
} from '../controllers/updateUser.js';
import { findAndDeleteUser } from '../controllers/deleteUser.js';

const router = express.Router();

router.post('/', createUser);
router.get('/admin', getAllUsers);
router.get('/:userid', getUser);
router.patch('/:userid', findAndUpdateData);
router.put('/:userid', findAndUpdateUser);
router.delete('/:userid', findAndDeleteUser);

export default router;
