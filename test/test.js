var chai = window.chai;
var describe = window.describe;
var it = window.it;
var $ = window.$;

describe('zepto core', function() {

	it('should export window.$', function() {
		chai.expect($).to.be.an('function');
		chai.expect($.fn).to.be.an('object');
	});

});

describe('zepto module', function() {

	it('selector', function() {
		chai.expect($('.demo-selector span:last').html()).to.equal('2');
	});

	it('ajax', function() {
		chai.expect($.ajax).to.be.an('function');
	});

	it('event', function() {
		chai.expect($.fn.on).to.be.an('function');
	});

	it('form', function() {
		chai.expect($.fn.serialize).to.be.an('function');
	});

	it('fx', function() {
		chai.expect($.fn.animate).to.be.an('function');
	});

	it('touch', function() {
		chai.expect($.fn.tap).to.be.an('function');
	});

	it('detect', function() {
		chai.expect($.__detect).to.be.an('function');
	});

	it('gesture: pass in ios webview', function() {
		chai.expect($.fn.pinch).to.be.an('function');
	});

});

describe('zepto deprecated', function() {

	it('data: use var instead', function() {
		chai.expect($.hasData).not.to.be.an('function');
	});

	it('assets: just remove nodes', function() {
		chai.expect($.fn.remove.toString().length < 200).to.equal(true);
	});

	it('stack: end is evil', function() {
		chai.expect($.fn.end).not.to.be.an('function');
	});

	it('callbacks: use promise instead', function() {
		chai.expect($.Callbacks).not.to.be.an('function');
	});

	it('deferred: use promise instead', function() {
		chai.expect($.when).not.to.be.an('function');
	});

	it('fx_methods: use css3 instead', function() {
		chai.expect($.fn.fadeTo).not.to.be.an('function');
	});

});

describe('extra', function() {

	it('getScript', function() {
		chai.expect($.getScript).to.be.an('function');
	});

});

