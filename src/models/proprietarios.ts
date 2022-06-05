import Sequelize from "sequelize";

import db from "../repositories/db";

const Proprietarios = db.define(
  "proprietarios",
  {
    // Model attributes are defined here
    proprietario_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {}
);

export default Proprietarios;
