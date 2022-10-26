require('dotenv').config();

const { Router } = require("express")
const router = Router();
const { Empresa } = require("../db")


router.get("/", async (req, res) => {
  try {
    const getEmpresa = await Empresa.findAll();
    res.json(getEmpresa)
  } catch (error) {
    throw error
  }
})

router.put("/aprobada/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { booleano } = req.query;
      await Empresa.update({
        aprobada: booleano
      }, {
        where: {
          id: id
        }
      })
    res.send("Empresa aprobada")
  } catch (error) {
    throw error
  }
})

router.put("/rechazada/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { booleano } = req.query;
    console.log(booleano, "");
      await Empresa.update({
        rechazada: booleano
      }, {
        where: {
          id: id
        }
      })
    res.send("Empresa rechazada")
  } catch (error) {
    throw error
  }
})
module.exports = router;

