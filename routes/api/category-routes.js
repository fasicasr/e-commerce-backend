const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const catagoryData = await Catagory.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catagoryData = await Catagory.findByPk(req.params.id, {
      include: [{ model: Product}, { model: Tag }],
    });

    if (!catagoryData) {
      res.status(404).json({ message: "No product found with that id!" });
      return;
    }

    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const catagoryData = await Catagory.create({
      catagory_name: req.body.catagory_name,
    });
    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const catagoryData  = await Catagory.update({
      where: {
        id: req.params.id,
      },
    });

    if (!catagoryData) {
      res.status(404).json({ message: "No catagory found with that id!" });
      return;
    }

    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const catagoryData  = await Catagory.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!catagoryData) {
      res.status(404).json({ message: "No catagory found with that id!" });
      return;
    }

    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
