const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

// GET all tags with their associated products
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, as: 'products' }]
    });
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single tag by its ID with its associated products
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, as: 'products' }]
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.status(201).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a tag's name by its ID
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: { id: req.params.id }
      }
    );
    if (updatedTag[0] === 0) {
      res.status(404).json({ message: 'No tag found with this id or no change made to the existing tag.' });
      return;
    }
    res.json({ message: 'Tag updated successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a tag by its ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: { id: req.params.id }
    });
    if (deletedTag === 0) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.json({ message: 'Tag deleted.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
