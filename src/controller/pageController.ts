import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send('Home in controller');
}

export const dogs = (req: Request, res: Response) => {
  res.send('testando dogssss');
}

export const cats = (req: Request, res: Response) => {
  // code
}

export const fishes = (req: Request, res: Response) => {
  // code
}