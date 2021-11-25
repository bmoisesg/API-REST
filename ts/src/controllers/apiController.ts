import { Request, Response } from "express";

class ApiController {
  public async funcion1(req: Request, res: Response) {
    try {
      res.json({ msg: "hola mundo!" });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion2(req: Request, res: Response) {
    try {
      res.json({ msg: "hola mundo " + req.body.nombre });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion3(req: Request, res: Response) {
    try {
      res.json({ msg: "hola mundo " + req.params.nombre });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion4(req: Request, res: Response) {
    try {
      res.json({ msg: "hola mundo " + req.headers.nombre });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }
}

export const apiController = new ApiController();
