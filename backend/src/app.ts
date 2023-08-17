import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes";
import passport from 'passport'
import session from 'express-session';
import { dbConexion } from "./db";

export const app: Application = express();

app.use(
  cors({
    credentials: true,
    origin: "*",
    methods: ["POST", "GET", "DELETE", "PUT"]
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
dbConexion();
app.use(passport.initialize());
app.use(session({
  secret: typeof process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: false
}));

app.use(router);

app.get("/hey", (_req: Request, res: Response) => {
  return res.json({
    message: "hello word",
  })
});
