'use strict'
const response = require('../../base/Middlewares/macroResponse')
const User = require('../../base/Models/User')
const UserToken = require('../../base/Models/UserToken')
const generateToken = require('../../base/Helpers/Helpers')
const Hash = require('password-hash')
const jwt = require('jsonwebtoken')
class AuthController {
    /**
         * @swagger
         * /api/v1/admin/create:
         *   post:
         *     tags:
         *       - AdminUser
         *     summary: Create User Admin
         *     consumes:
         *       - multipart/form-data
         *     description: Create User Admin
         *     security:
         *       - Bearer: []
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: formData
         *         name: image
         *         type: file
         *         description: The file to upload.
         *         
         *         
         *       - name: firstname
         *         description: First Name
         *         in: query
         *         required: false
         *         type: string
         *         example : "Phuong"
         *         
         *       - name: lastname
         *         description: Last Name
         *         in: query
         *         required: false
         *         type: string
         *         example : "Tran Hoa"
         *         
         *       - name: phone
         *         description: Phone Number
         *         in: query
         *         required: false
         *         type: string
         *         example : "0971725797"
         *
         *       - name: email
         *         description: Email
         *         in: query
         *         required: false
         *         type: string
         *         example : "tranhoaphuong@gmail.com"
         *         
         *       - name: password
         *         description: Password
         *         in: query
         *         required: false
         *         type: string
         *         example : "123456"
         *         writeOnly : true
         *         
         *       - name: country
         *         description: "Country"
         *         in: query
         *         required: false
         *         type: string
         *         example : "Vietnam"
         *
         *       - name: province
         *         description: "Province"
         *         in: query
         *         required: false
         *         type: string
         *         example : "TP. IS"
         *         
         *       - name: address
         *         description: "Address"
         *         in: query
         *         required: false
         *         type: string
         *         example : "2010 RealMadrid"
         *         
         *       - name: role_id
         *         description: "Role"
         *         in: query
         *         required: false
         *         type: integer
         *         example : 1
         *         
         *     responses:
         *       200:
         *         description: Create User Admin
         */
    static async  create(req, res) {
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        const data = req.query
        data.password = Hash.generate(data.password)
        if (!emailRegex.test(data.email))
            return response.respondWithError(res, "email valid fail")
        User.create(data).then((user) => {
            return response.respondWithSuccess(res, user, "create user successful")
        }).catch((err) => {

            return response.respondWithError(res, err.message)
        })

    }
    /**
           * @swagger
           * /api/v1/admin/login:
           *   post:
           *     tags:
           *       - AdminUser
           *     summary: Auth Login
           *     description: User Login
           *     produces:
           *       - application/json
           *     parameters:
           *       - name: info
           *         description: User object
           *         in:  body
           *         required: true
           *         type: string
           *         schema:
             *           example : {
          *              email : "minhtc97@gmail.com",
          *              password : "123456",
          *           }
           *     responses:
           *       200:
           *         description:  Login Successful
           */

    static async login(req, res) {
        const data = req.body
        const user = await User.find({ email: data.email })
        try {
            if (user.length != 0) {
                const password = Hash.verify(data.password, user[0].password)
                if (password) {
                    const token = `${process.env.APP_NAME}-${jwt.sign(data, process.env.HOA_SECRET_KEY, { expiresIn: '720h' })}`
                    const exist_token = await UserToken.find({ user_id: user[0]._id })
                    if (exist_token.length == 0) {
                        await UserToken.create({ user_id: user[0]._id, access_token: token })
                        user[0].token = token
                    }
                    else {
                        await UserToken.where({ user_id: user[0]._id }).updateOne({ access_token: token })
                        user[0].token = token
                    }
                    //await UserToken.create({user_id:user[0]._id,access_token:token})
                    return response.respondWithSuccess(res, user, 'login succesful')
                }
                return response.respondWithError(res, 'password incorrect')
            }
            return response.respondWithError(res, 'username  incorrect')
        } catch (e) {
            return response.respondWithError(res, e.message)
        }

    }

    /**
         * @swagger
         * /api/v1/admin/logout:
         *   get:
         *     tags:
         *       - AdminUser
         *     summary: Logout User Admin
         *     security:
         *       - Bearer: []
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         description: log out successful
         */
    static async logout(req, res) {
        try {
            const Bearer = req.headers.authorization.replace('Bearer ', '')
            const usertoken = await UserToken.where({ access_token: Bearer })
            if(usertoken.length == 0) return response.respondWithError(res, 'token incorrect')
            // const dataUser = await jwt.verify(Bearer.replace('HOA-', ''), process.env.HOA_SECRET_KEY)
            await UserToken.where({ access_token: Bearer }).deleteOne()
            return response.respondWithSuccess(res, [], "log out successful")
        } catch (e) {
            return response.respondWithError(res, e.message)
        }
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
 *        description: Successful created user
 */
    static async verify(req, res, next) {
        return res.status(200).send('ok')
    }
}
module.exports = AuthController 