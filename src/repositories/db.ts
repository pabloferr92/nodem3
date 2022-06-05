import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:abc321@localhost:5432/praticomod3",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
