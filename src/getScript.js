var $getScript = require('spore-kit-io/src/getScript');

var $ = window.$;

function getScript(url, fn){

	if(typeof url === 'string'){
		$getScript({
			src : url,
			onLoad : fn
		});
	}else if(typeof url === 'object'){
		$getScript(url);
	}

}

$.getScript = getScript;

