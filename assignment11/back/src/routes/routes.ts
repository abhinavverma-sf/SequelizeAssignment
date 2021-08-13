import express, { Request, Response } from "express";
import data from "../routes/data.json";
import fs from "fs";
import { pool } from "./pgdb";
import { db } from "../models/index";
import { ModuleResolutionKind } from "typescript";
import { Model } from "sequelize/types";
import { customerTable } from "../models/customers";
import { memberTable } from "../models/members";
const router = express.Router();
const app = express();

//GET ALL MEMBERS
router.get("/members", (req: Request, res: Response) => {
  memberTable
    .findAll()
    .then((admins) => {
      res.status(200).send(admins);
    })
    .catch((err) => res.status(400).json({ message: "Error", err }));
});
//join on members and customers
router.get("/members/members&customer", (req: Request, res: Response) => {
  memberTable
    .findAll({
      include: [{ model: customerTable, attributes: ["name"] }],
    })
    .then((results) => {
      res.status(200).send(results);
    });
  /*pool.query(
    "SELECT members.*,customers.name FROM members INNER JOIN customers ON members.id=customers.cust_id",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );*/
});
// GET MEMBERS BY ID
router.get("/members/:id", (req: Request, res: Response) => {
  const given_id = parseInt(req.params.id);
  memberTable
    .findByPk(given_id,{
      include: [{ model: customerTable, attributes: ["name"] }]
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `error`,
      });
    });
});

// saving data from frontend
router.put(
  "/members/editMember&Customer/:id",
  async (req: Request, res: Response) => {
    let given_id = parseInt(req.params.id);

    memberTable.findByPk(given_id)
    .then(function (memb) {
      if (memb) {
        memb.update(req.body);
      } else {
        res.status(404).send(`Not updated`);
      }
    });

    customerTable.update(
      {name: req.body.customer['name']},
      {where: {
        cust_id: given_id
      }}
    )
    .then(function(rowsUpdated) {
      res.json(rowsUpdated)
    })
    
  }
);
// delete from both
router.delete("/members/deleteFromBoth/:id", (req: Request, res: Response) => {
  let given_id = parseInt(req.params.id);
  customerTable
    .destroy({
      where: {
        cust_id: given_id,
      },
    })
    .then((admins) => {
      res.status(204).send(`Customer deleted with ID: ${given_id}`);
    });

  memberTable
    .destroy({
      where: {
        id: given_id,
      },
    })
    .then((admins) => {
      //res.status(204).send(`Member deleted with ID: ${given_id}`);
    });
});
export { router };
