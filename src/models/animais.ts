import Sequelize from "sequelize";

import db from "../repositories/db";
import Proprietarios from "./proprietarios";

const Animais = db.define(
  "animais",
  {
    // Model attributes are defined here
    animal_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    proprietario_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {}
);

Animais.belongsTo(Proprietarios, { foreignKey: "proprietario_id" });

export default Animais;
