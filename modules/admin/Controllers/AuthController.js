'use strict'
const response = require('../../base/Middlewares/macroResponse')
const User = require ('../../base/Models/User')
class AuthController{
   /**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
    static async  create(req,res){
          User.create({
            password:"123123",
            email:"minhtcd97@gmail.com",
            firstname:"tran",
            lastname:"minh",
            phone:"09717d25797",
            image:"uploads/hoa129381.png",
            country:"viet nam",
            province:"vung tau",
            address:"37 hcm",
            token:"hoa-asiddsdo123ioj13jiqwe",
        }).then((user)=>{
            return response.respondWithSuccess(res,user,"create user successful")
        }).catch((err)=>{
            
            return response.respondWithError(res,err.message,"cant create user")
        })
        
    }


    static async login(req,res){
        return res.status(200).send('ok')
    }
    /**
 * @swagger
 * /customers:
 *    put:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
    static async verify(req,res,next){
        return res.status(200).send('ok')
    }
}
module.exports = AuthController 