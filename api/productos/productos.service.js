const knex = require("knex")(require("../../knexfile"));

module.exports = {
  createProducto: async (data) => {
    try {
      const producto = await knex("productos").insert(data);
      return producto;
    } catch (error) {
      console.error("Error al crear el producto:", error.message);
      throw new Error("Error al crear el producto");
    }
  },

  getAllProductos: async () => {
    try {
      const productos = await knex("productos").select("*");
      return productos;
    } catch (error) {
      console.error("Error al obtener los productos:", error.message);
      throw new Error("Error al obtener los productos");
    }
  },

  getOneProducto: async (id) => {
    try {
      const producto = await knex("productos").where({ id }).first(); 
      if (!producto) {
        const error = new Error(`Producto con id ${id} no encontrado`);
        error.status = 404;
        throw error;
      }
      return producto;
    } catch (error) {
      error.status = error.status || 500;
      throw error
    }
  },

  editOneProducto: async (id, data) => {
    try {
      const exist = await this.getOneProducto(id);
      if (!exist) {
        const error = new Error(`El producto con id ${id} no existe para editar`);
        error.status = 404;
        throw error;
      }

      await knex("productos").where({id}).update(data);
      return await this.getOneProducto(id);
    } catch (error) {
      error.status = error.status || 500;
      throw error;
    }
  },

  changeEstadoProducto: async (id, estado) => {
    try {

        const exist = await this.getOneProducto(id);
        if(!exist){
            const error = new Error(`Error al conseguir el producto con el id ${id} para cambiar su estado`);
            error.status = 404;
            throw error;
        }

      await knex("productos").where({ id }).update({ Estado: estado });
      return await this.getOneProducto(id);

    } catch (error) {
      error.status = error.status || 500;
      throw error;
    }
  },
};
