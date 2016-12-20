var $ = window.Zepto;

$.fn.reflow = function(){
	var reflow = this.size() && this.get(0).clientLeft;
	return this;
};
