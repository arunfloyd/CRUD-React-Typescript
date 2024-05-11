import { login, register } from "../controllers/authentication";
import express from "express";

export default (router: express.Router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
};

// authentication.ts

// import express from "express";
// import { login, register } from "../controllers/authentication";

// const router = express.Router();

// router.post("/auth/register", register);
// router.post("/auth/login", login);

// export default router;
