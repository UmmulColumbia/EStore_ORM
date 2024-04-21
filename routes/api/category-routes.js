const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get all categories with their associated products
router.get('/', async (req, res) => {
    try {
      const categoryData = await Category.findAll({
        include: [{ model: Product }]
      });
      res.json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Get a single category by its ID with its associated products
  router.get('/:id', async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id, {
        include: [{ model: Product }]
      });
      if (!category) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Create a new category
  router.post('/', async (req, res) => {
    try {
      const newCategory = await Category.create({
        category_name: req.body.category_name
      });
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // Update a category by its ID
  router.put('/:id', async (req, res) => {
    try {
      const updatedCategory = await Category.update(req.body, {
        where: { id: req.params.id }
      });
      if (!updatedCategory[0]) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json(updatedCategory);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Delete a category by its ID
  router.delete('/:id', async (req, res) => {
    try {
      const category = await Category.destroy({
        where: { id: req.params.id }
      });
      if (!category) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json({ message: 'Category deleted.' });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;
