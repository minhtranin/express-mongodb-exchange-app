'use strict'

class macroResponse {

	static respondWithSuccess(res , data = [], msg = "Action Successfull!"){
		return res.status(200).json({
			'status_code' : 200,
			'status' : 'success',
			'message' : msg,
			'data' : data
		})
	}

	static respondWithError(req, msg = "Action Successfull!" , data = [], ){
		return req.status(500).json({
			'status_code' : 404,
			'status' : 'failed',
			'message' : msg,
			'data' : data
		})
	}
}
module.exports = macroResponse
