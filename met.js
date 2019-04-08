const request = require('request')

const object = function(q,callback){
	const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search'
		if(error){
      callback('Service unavailable', undefined)
    }
    else if (response.body == 'false'){
      callback(response.body.Error,undefined)
    }
    else{
    	const data = response.body
    	const info ={
    		total:data.total,
    		objects: []
    	}
    	for(i in data.objectIDs){
    		info.objects.push(data.objectIDs[i])
    	}
    	callback(undefined, info)


    }
}

module.exports = {
  object: object
}