import { pool } from "../../db.js"

export const getElectro=async (req,res)=>{
   const [rows]= await pool.query("SELECT * FROM almacen")
   res.json(rows)
}

export const getElectros = async(req,res)=>{
    console.log(req.params.id_productos)
    const[rows]= await pool.query("SELECT * FROM almacen WHERE id_productos= ?", [req.params.id_productos])
    res.json(rows[0])

}

export  const crearElectro=async (req,res)=>{
    const {titulo,descripcion,existencias,precio,img}=req.body;
    const[rows]= await pool.query("INSERT INTO almacen (titulo,descripcion,existencias,precio,img) VALUES(?,?,?,?,?)",[titulo,descripcion,existencias,precio,img])
    res.send({
        id_productos: rows.insertId,
        titulo,
        descripcion,
        existencias,
        precio,
        img
    })
    console.log(req.file?.path)
}
export const borrarAlmacen= async(req,res)=>{
  const [result]= await pool.query("DELETE FROM almacen WHERE id_productos=?", [req.params.id_productos])
    if(result.affectedRows===0){
        return res.json({
            message:"error"
        })
        res.send("borrado")
    }
}

export const actualizarAlmacen= async(req,res)=>{
   const{id_productos}= req.params
   const {titulo,descripcion,existencias,precio}=req.body

  const [result]= await pool.query("UPDATE almacen SET titulo = ?, descripcion = ?, existencias = ? , precio = ? WHERE id_productos = ?",[titulo,descripcion,existencias,precio,id_productos])
  if(result.affectedRows === 0){
    message:"error"
  }

  res.send("actualizado")

}