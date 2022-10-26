
const { Empresa } = require("../db")
const empresa = require("../routes/Empresas")

async function añadirALaDb() {
  try {
    empresa.empresa.map(async (empresa) => {
      const { nombre, razonSocial, nit, identificacion, empleados, logo, aprobada } = empresa
      await Empresa.create({
        nombre,
        razonSocial,
        nit,
        identificacion,
        empleados,
        logo,
        aprobada
      })
    })
    console.log("las empresas se guardaron en la DB")
  } catch (error) {
    throw error;
  }
}
module.exports = {
  añadirALaDb
}