import { Request, Response } from "express";
import { defineActiveOption } from "../helpers/activeMenuOptions";
import { Pet } from '../models/pet'

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll();

  res.render('pages/page', {
    menuActive: defineActiveOption('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    },
    list
  });
}

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog');

  res.render('pages/page', {
    menuActive: defineActiveOption('dog'),
    banner: {
      title: 'Todos os Cachorros',
      background: 'banner_dog.jpg'
    },
    list
  });
}

export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat')
  res.render('pages/page', {
    menuActive: defineActiveOption('cat'),
    banner: {
      title: 'Todos os Gatos',
      background: 'banner_cat.jpg'
    },
    list
  });
}

export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish')
  res.render('pages/page', {
    menuActive: defineActiveOption('fish'),
    banner: {
      title: 'Todos os Peixes',
      background: 'banner_fish.jpg'
    },
    list
  });
}