describe("Hello world", function(){ //describe -> just English
	
	it("say hello", function() {  // it -> specification(spec)
		expect(helloWorld()).toEqual("Hello world!"); // expect -> matcher (what we expect?)
		expect(helloWorld()).toContain("world"); // expect -> matcher (what we expect?)
	});
	
	it("it is contain word \"world\"", function() {  // it -> specification(spec)
		expect(helloWorld()).toContain("world"); // expect -> matcher (what we expect?)
	});
	
});