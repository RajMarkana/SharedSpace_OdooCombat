const express = require('express');
const { createResource, getAllResources, getResourceById, updateResource, deleteResource } = require('../controllers/resource.controller');

const router = express.Router();

router.post('/create', createResource);
router.put('/:id', updateResource);
router.delete('/:id', deleteResource);
router.get('/', getResourceById);
router.get('/resources', getAllResources);

// GET resource by ID
router.get('/resources/:id', getResourceById);

module.exports = router;