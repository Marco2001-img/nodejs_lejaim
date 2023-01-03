import { Router } from "express";
import multer from '../../libs/multer.js'
import {getElectro,crearElectro,borrarAlmacen,actualizarAlmacen,getElectros} from '../controlller/electro.controller.js'

const router=Router()

router.get('/', getElectro)

router.get('/:id_productos',getElectros)

router.post('/',multer.single('image'), crearElectro)

router.delete('/:id_productos',borrarAlmacen)

router.put('/:id_productos',actualizarAlmacen)



export default router