import Sequelize from "sequelize";

import db from "../repositories/db";
import Animais from "./animais";

const Servicos = db.define(
  "servicos",
  {
    // Model attributes are defined here
    servico_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    animal_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {}
);

Servicos.belongsTo(Animais, { foreignKey: "animal_id" });

export default Servicos;
