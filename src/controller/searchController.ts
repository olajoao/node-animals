import { Request, Response } from "express";
import { defineActiveOption } from "../helpers/activeMenuOptions";
import { Pet } from '../models/pet';


export const search = (req: Request, res: Response) => {
  let query = req.query.q as string;

  if(!query) {
    res.redirect('/');
    return;
  }

  let list = Pet.getFromName(query);

  res.render('pages/page', {
    menu: defineActiveOption(''),
    list, 
    query
  });
}

export default search