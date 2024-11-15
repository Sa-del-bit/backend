const express = require('express');
const { createFaculty, getFaculties, updateFaculty, deleteFaculty } = require('../controllers/facultyController');
const router = express.Router();

router.post('/', createFaculty);
router.get('/', getFaculties);
router.put('/:id', updateFaculty);
router.delete('/:id', deleteFaculty);

module.exports = router;
