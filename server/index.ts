import  express from 'express';
import { NextFunction, Request, Response } from "express";
import { ErrorInt } from './inteface';
// import User from '../user';
const router = express.Router();
const ResponseHandler = (status:number, message:string, data:object):ErrorInt =>{
  return { status, message, data, success: true }
}
const Decagon: string [] = [] 
// /GET home page. */
 router.get('/:userQuery', function(req:Request, res:Response, next:NextFunction) {
  res.render('index', {Decagon});
});
/* GET one user. */
router.get('/:name', function(req:Request, res:Response, next:NextFunction) {
  const {name} = req.params
  const includes = Decagon.includes(name)
  if(includes){
    const index = Decagon.indexOf(name)
    return res.status(200).json({data: Decagon[index]})
  }
  res.status(404).json({message:'sorry user wasent found'})
});
/* POST add user. */
router.post('/', function(req:Request, res:Response, next:NextFunction) {
  const {name, age, gender, phone, address, role } = req.body;
 Decagon.push(name, age, gender, phone, address, role)
  const response = ResponseHandler(201, "successful", Decagon)
  res.send(response)
})
export default  router;