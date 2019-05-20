(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"campeonato.brasileiro_a_atlas_", frames: [[0,0,1280,720],[0,722,1280,720]]}
];


// symbols:



(lib.noise = function() {
	this.spriteSheet = ss["campeonato.brasileiro_a_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.noise2 = function() {
	this.spriteSheet = ss["campeonato.brasileiro_a_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txtSerieTabela = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.txt.text = currentData.Info.Serie;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#9DAD51");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 144;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtSerieTabela, new cjs.Rectangle(0,0,148.2,39.2), null);


(lib.txtSerie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.txt.text = currentData.Info.Serie;
		/*this.txt.font = '40pt Simplifica';
		
		
		console.log(this.txt.font);
		this.txt.font = '10';
		console.log(this.txt);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 40px 'Raleway'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 49;
	this.txt.lineWidth = 142;
	this.txt.parent = this;
	this.txt.setTransform(0,-23.4);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtSerie, new cjs.Rectangle(-73.2,-25.4,146.4,56.8), null);


(lib.txtRodadaTabela = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.txt.text = currentData.Info.Round;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 496;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtRodadaTabela, new cjs.Rectangle(0,0,500,39.2), null);


(lib.txtCampeonato = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFDqQgjgRgZgbQgYgbgMgkQgMglAAgpQAAg5AXg2QAXg2AngpQAogqA2gYQA1gZA9AAQAuAAAkAQQAjAQAZAbQAYAbAMAlQAMAlAAApQAAA4gWA2QgXA1goAqQgoApg2AZQg2AZg+AAQguAAgigPgAgciSQgeARgZAbQgYAbgPAjQgPAkAAAoQAAA3AdAkQAcAkAvAAQAgAAAegQQAfgPAXgbQAYgbAPgkQAPgkAAgoQAAg3gcgkQgcglgvAAQggAAgeAQg");
	this.shape.setTransform(249,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhyEwQgbgSAAgqQAAgPADgPIBBksIg9AAIARhOIA8AAIAiieIBkAAIgiCeIBjAAIgQBOIhjAAIg4EMIgCANQAAATAMAIQAKAIAPAAQAVAAAUgHIAdgMIAEBRQgVAMgjAKQgiAJgmAAQgoAAgagTg");
	this.shape_1.setTransform(208.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiiDqQgggQgWgbQgWgagMglQgLgkAAgpQAAg6AVg3QAWg2AlgpQAlgqAwgYQAvgZA0AAQA0AAAjAcQAkAcAPArIAThaIBmAAIhNFoIgCAHIAAAGQAAATAVABIgSBWIgYADIgSACQg7AAAAgwQAAgPAGgdQgjAvgyAZQgwAYgwAAQgpAAgfgPgAgxiQQgfARgYAcQgXAcgOAjQgOAjAAAjQAAAcAIAXQAHAYAOARQAPARAUAKQAUAKAZAAQASAAAVgHQAUgIATgMQAUgNARgSQAQgRALgVIAZh9QgCgWgKgTQgKgTgOgOQgPgOgSgIQgRgIgUAAQghAAgfASg");
	this.shape_2.setTransform(161.8,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABGD1IA5kNIAGggIABgbQAAhHg6AAQgVAAgWAJQgWAIgUAPQgVAQgTAUQgTAVgMAZIg+EdIhlAAIBnngIBbAAIgUBgQAkgxA2gcQA4gcA8AAQAeAAAVAJQAUAIAMAPQANAPAFAUQAGAVAAAYQAAAUgDAVIgIArIg+Elg");
	this.shape_3.setTransform(105.4,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiFDqQgjgRgZgbQgYgbgMgkQgMglAAgpQAAg5AXg2QAXg2AngpQAogqA2gYQA1gZA9AAQAuAAAkAQQAjAQAZAbQAYAbAMAlQAMAlAAApQAAA4gWA2QgXA1goAqQgoApg2AZQg2AZg+AAQguAAgigPgAgciSQgeARgZAbQgYAbgPAjQgPAkAAAoQAAA3AdAkQAcAkAvAAQAgAAAegQQAfgPAXgbQAYgbAPgkQAPgkAAgoQAAg3gcgkQgcglgvAAQggAAgeAQg");
	this.shape_4.setTransform(53.4,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah3DqQgjgQgZgbQgZgbgNglQgNgmAAgrQAAg6AXg1QAWg2AogoQAogoA3gZQA2gYA/AAQBLAAAsAhQAtAiAABBQAACWkNAAQgnAAgygDIAAARQAAAaAHAYQAGAXANARQANASAUAJQAUAKAcAAQAmAAAlgUQAlgTAVgjIBQAZQgRAcgZAWQgaAXgeAQQgfAQghAJQgiAJgjAAQgtAAgkgPgAgFiiQgcAMgVATQgVATgPAZQgPAZgJAcQAqADAkAAQAwAAAhgGQAhgGAVgKQAVgLAJgPQAIgQAAgSQAAgfgWgPQgWgPgnAAQghAAgaAMg");
	this.shape_5.setTransform(2.3,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkZFXICPqkIBaAAIgTBWQAkgrAugaQAvgaA1AAQAnAAAfAQQAgAQAVAbQAWAbALAkQAMAlAAApQgBA6gVA2QgVA2gkApQgkApgwAZQgwAZg0AAQg2AAgkgcQgjgbgOgtIg+EfgAAdj4QgVAIgSAMQgUANgRARQgQARgKAVIgbB+QAIArAcAeQAeAeAoAAQAiAAAfgRQAfgSAXgbQAYgbAOgjQAOgjAAgkQAAgbgIgYQgHgXgOgRQgOgSgVgKQgUgKgZAAQgTAAgUAHg");
	this.shape_6.setTransform(-54.3,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ADWD1IA5kNQAHgjAAgXQAAhIg6AAQgoAAgoAhQgoAggaAxIg8EdIhkAAIA5kNQAFgSABgOIABgbQAAgkgPgSQgPgRgbAAQgoAAgoAgQgoAfgZAzIg+EdIhlAAIBnngIBbAAIgUBgQAjgyAzgbQAzgcA2AAQA2AAAbAdQAbAdACA0QAog2AxgcQAxgcA2AAQA8AAAYAgQAYAhAAAyQAAARgDAUIgHAsIg/Elg");
	this.shape_7.setTransform(-121.2,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiiDqQgggQgWgbQgWgagMglQgLgkAAgpQAAg6AVg3QAWg2AlgpQAlgqAwgYQAvgZA0AAQA0AAAjAcQAkAcAPArIAThaIBmAAIhNFoIgCAHIAAAGQAAATAVABIgSBWIgYADIgSACQg7AAAAgwQAAgPAGgdQgjAvgyAZQgwAYgwAAQgpAAgfgPgAgxiQQgfARgYAcQgXAcgOAjQgOAjAAAjQAAAcAIAXQAHAYAOARQAPARAUAKQAUAKAZAAQASAAAVgHQAUgIATgMQAUgNARgSQAQgRALgVIAZh9QgCgWgKgTQgKgTgOgOQgPgOgSgIQgRgIgUAAQghAAgfASg");
	this.shape_8.setTransform(-188.6,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AieE0QgrgYgegmQgdgngQgyQgQgxAAg2QAAhCAdhEQAdhFAyg4QAzg3BFgjQBEgjBTAAQBUAAA1AoQA0AnARA/IhcA3QgHgegNgUQgOgUgTgMQgTgMgWgFQgWgFgWAAQg4AAguAaQgtAbghAqQghAqgSAyQgSAyAAAwQAAAnAKAiQALAiATAbQATAaAcAPQAcAPAkAAQAWAAAZgGQAZgGAYgNQAZgNAWgVQAXgUASgcIBMAwQgWAlgiAcQghAcgnAUQgmATgpAKQgoAKglAAQg3AAgsgXg");
	this.shape_9.setTransform(-243.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtCampeonato, new cjs.Rectangle(-278.8,-56,557.7,112.1), null);


(lib.txtBrasileiro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFEC5E").s().p("AjWGvQhcgng/hAQg+hBgghVQgfhVgBhdQABhbAfhWQAghVA+hBQA/hABcgnQBcgnB6ABQB4gBBdAnQBdAnA+BAQA/BBAhBVQAfBWAABbQAABdgfBVQghBVg/BBQg+BAhdAnQhdAmh4ABQh6gBhcgmgAhziOQgtA0AABaQAABcAtAzQAtAzBGAAQBGAAAtgzQAsgzAAhcQAAhagsg0QgtgzhGAAQhGAAgtAzg");
	this.shape.setTransform(357.6,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFEC5E").s().p("AkyHNIAAuIIEsAAIAACsQAvhbBHgwQBIgyBSAAQAhAAAIABIAAEnQheABhNATQhOAVgmAxIAAIXg");
	this.shape_1.setTransform(272.1,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFEC5E").s().p("AiiJ0IAAuIIFFAAIAAOIgAiilfIAAkUIFFAAIAAEUg");
	this.shape_2.setTransform(208.5,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFEC5E").s().p("AjTGxQhdgmg/g+Qg+hAghhTQghhTABhbQgBhhAghXQAghZA+hBQA/hCBdgmQBbgnB6ABQB4gBBdAnQBdAnA/BAQA+BBAgBVQAhBWAABbQgBAagDAbQgDAbgDAUIp5AAQAFBIAwAgQAvAgA5AAQA2AAAugZQAvgXAQgrIEVBPQg2BshzBFQhzBEimABQh2AAhdglgAhqjGQgoAmgJBBIErAAQgIhBgpgmQgngmg9AAQg9AAgoAmg");
	this.shape_3.setTransform(132.1,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFEC5E").s().p("AjHI6QhHhDAAiAIAAvyIFGAAIAAN/QAABnBVAAQAUAAAYgHQAYgHAVgMIApDxQg6AchJAPQhJAPhCAAQiCAAhGhCg");
	this.shape_4.setTransform(52.8,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CFEC5E").s().p("AiiJ0IAAuIIFFAAIAAOIgAiilfIAAkUIFFAAIAAEUg");
	this.shape_5.setTransform(-6.5,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CFEC5E").s().p("AjPGwQhygnhPhKIBwjEQBUA4BPAgQBOAfBBAAQBEAAAAgrQAAgZgagQQgbgShNgVQhggchBgbQhAgbgpgfQgogdgRgmQgSgmAAg0QAAhFAcg6QAcg6AxgsQAxgrBDgXQBEgXBSgBQBiAABbAaQBZAaBcBQIh7DEQhVg3g5gYQg5gXgwAAQgeAAgTAMQgSAKAAAZQAAAaAbAQQAbAQBRAUQBhAbBDAcQBDAcApAhQAoAhASAqQARArAAA2QAABHgaA3QgaA3gxAoQgxAnhGAVQhFAVhYAAQh2gBhxgmg");
	this.shape_6.setTransform(-74,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CFEC5E").s().p("ADRG2QgtgfgNg/IgIghQg8BOhPAoQhOAphZAAQhEAAg6gXQg6gWgrgnQgqgngYg1QgYg1AAg+QAAhFAdg4QAeg5AzgoQAzgqBIgWQBHgXBXAAQBtAABIAjIAAgcQAAg/glggQglgfhRAAQhPAAhAAaQhCAZhIAwIhfjMQCzhyDkAAQDYAAB2BgQB0BhAADAIAACvQAAAtAOATQAOASAjADIAAEUQgoAIgjAEQgjAEgcABQhYgBgugfgAiEBLQgoAeAAAtQAAAmAeAXQAeAZAuAAQAdAAAggJQAegLAYgPQASgNANgRQAMgQAAgSIAAhCQgegLgigGQghgHgcAAQg8AAgnAcg");
	this.shape_7.setTransform(-168.9,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CFEC5E").s().p("AkyHNIAAuIIEsAAIAACsQAvhbBHgwQBIgyBSAAQAhAAAIABIAAEnQheABhNATQhOAVgmAxIAAIXg");
	this.shape_8.setTransform(-252.9,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CFEC5E").s().p("AoGJjIAAzFILDAAQA/AAA0AcQAzAbAlAsQAkAsAUA3QATA5AAA6QABBXgtBNQgrBOhXApQBpAdA8BNQA9BMAACBQAABUgiA6QgiA8g9AmQg7AmhRARQhQAThZAAgAi3FJIEIAAQApAAAcgaQAcgaAAgwQABgtgYgfQgZgdglAAIkUAAgAi3iJIDkAAQAiAAAcgSQAcgTAAg6QAAgygXgVQgZgVggAAIjuAAg");
	this.shape_9.setTransform(-348,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtBrasileiro, new cjs.Rectangle(-412.5,-102.9,825,206), null);


(lib.noiseInternaMov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.noise2();
	this.instance.parent = this;
	this.instance.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.noiseInternaMov, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.noise_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.noise();
	this.instance.parent = this;
	this.instance.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.noise_1, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.faixaVerde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFEC5E").s().p("EhbUBLAMCV1iV/MAg0AAAMiV1CV/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.faixaVerde, new cjs.Rectangle(-584.5,-480,1169,960), null);


(lib.faixaBranca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhbUBLAMCV1iV/MAg0AAAMiV1CV/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.faixaBranca, new cjs.Rectangle(-584.5,-480,1169,960), null);


(lib.faixaAmarela = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF000").s().p("EhbUBLAMCV1iV/MAg0AAAMiV1CV/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.faixaAmarela, new cjs.Rectangle(-584.5,-480,1169,960), null);


(lib.div = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6E5E5").ss(1,1,1).p("EgwCAAAMBgFAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.div, new cjs.Rectangle(-308.5,-1,617,2), null);


(lib.corteAmarelo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,240,0,0.329)").s().p("EilzBvXMDf2jetMBrxAAAMjf2Detg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.corteAmarelo, new cjs.Rectangle(-1061.1,-712.7,2122.3,1425.4), null);


(lib.confrontoX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (currentData.Round.Scoreboard.Status == 'inactive') 
			this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABQBrIhQhlIhPBlIgIAAIBUhpIhWhrIAIAAIBRBmIBShmIAIAAIhWBrIBTBpg");
	this.shape.setTransform(0,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confrontoX, new cjs.Rectangle(-9,8.9,18,21.3), null);


(lib.confrontoTxtX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACHC2IiBijIgGgIIgFAIIiBCjIgSAAICQi1IiSi2IASAAICDCkIAFAJIAGgJICCikIATAAIiSC2ICQC1g");
	this.shape.setTransform(18.9,49.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confrontoTxtX, new cjs.Rectangle(0,0,38,86.2), null);


(lib.confrontoTxtTime2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.txt.text = currentData.Round.Match.Teams.Visitor.Name
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 70px 'Raleway Black'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 84;
	this.txt.lineWidth = 496;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.confrontoTxtTime2, new cjs.Rectangle(0,0,500,86.2), null);


(lib.confrontoTxtTime1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.txt.text = currentData.Round.Match.Teams.Home.Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 70px 'Raleway Black'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 84;
	this.txt.lineWidth = 496;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.confrontoTxtTime1, new cjs.Rectangle(0,0,500,86.2), null);


(lib.confrontoTxtEstadio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.txt.text = currentData.Round.Match.Local;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 496;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.confrontoTxtEstadio, new cjs.Rectangle(0,0,500,39.2), null);


(lib.confrontoTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _hour = currentData.Round.Match.Hour.split(':');
		var _date = currentData.Round.Match.Date.split('-');
		var _weekDays = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');
		
		var date = new Date();
		date.setFullYear(parseInt(_date[0]));
		date.setMonth(parseInt(_date[1])-1)
		date.setDate(parseInt(_date[2]));
		date.setHours(_hour[0]);
		date.setMinutes(_hour[1]);
		date.setSeconds(0);
		
		this.txt.text = _weekDays[date.getDay()] + ' ' + String(date.getDate()).padStart(2, '0') + '/' + String((parseInt(date.getMonth()) + 1)).padStart(2, '0') + ', ' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0') + 'h';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "35px 'Raleway Light'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 496;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.confrontoTxt, new cjs.Rectangle(0,0,500,45.1), null);


(lib.confrontoPlacar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (currentData.Round.Scoreboard.Status == 'inactive') 
			this.visible = false;
		
		this.txt.text = currentData.Round.Scoreboard.Visitor;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 40px 'Raleway'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 49;
	this.txt.lineWidth = 31;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.confrontoPlacar2, new cjs.Rectangle(-17.5,0,35,51), null);


(lib.confrontoPlacar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (currentData.Round.Scoreboard.Status == 'inactive') 
			this.visible = false;
		
		this.txt.text = currentData.Round.Scoreboard.Home;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 40px 'Raleway'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 49;
	this.txt.lineWidth = 31;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib.confrontoPlacar1, new cjs.Rectangle(-17.5,0,35,51), null);


(lib.confrontoEscudo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (currentData.Round.Scoreboard.Status == 'inactive') 
			this.visible = false;
		
		var _this = this;
		var image = new Image();
		image.src = currentData.Round.Match.Teams.Visitor.Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 65 / image.width;
		    bitmap.scaleY = 65 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AlEFFIAAqJIKJAAIAAKJg");
	this.shape.setTransform(32.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confrontoEscudo2, new cjs.Rectangle(0,0,65,65), null);


(lib.confrontoEscudo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (currentData.Round.Scoreboard.Status == 'inactive') 
			this.visible = false;
		
		var _this = this;
		var image = new Image();
		image.src = currentData.Round.Match.Teams.Home.Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 65 / image.width;
		    bitmap.scaleY = 65 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AlEFFIAAqJIKJAAIAAKJg");
	this.shape.setTransform(32.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.confrontoEscudo1, new cjs.Rectangle(0,0,65,65), null);


(lib.bolinha_variacao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgjAjQgOgOAAgVQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgPgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bolinha_variacao, new cjs.Rectangle(-5,-5,10,10), null);


(lib.barra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFEC5E").s().p("A13CvIAAldMArvAAAIAAFdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.barra, new cjs.Rectangle(-140,-17.5,280,35), null);


(lib.backgroundVideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var videoLoader = new createjs.VideoLoader(currentData.Info.Media.Video);
		videoLoader.load();
		videoLoader.on('complete', function (evt){
			var video = new createjs.Bitmap(evt.result)
			_this.addChild(video);
			evt.result.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// efeito
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.549)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundVideo, new cjs.Rectangle(0,0,1280,720), null);


(lib.backgroundVerdeInterna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD264").s().p("Eg32AFeIAAq7MBvtAAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundVerdeInterna, new cjs.Rectangle(-357.5,-35,715,70), null);


(lib.backgroundVerde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83D264").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundVerde, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.backgroundBranco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg32A4QMAAAhwfMBvtAAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundBranco, new cjs.Rectangle(-357.5,-360,715,720), null);


(lib._10_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 9;
		this.txt.text = currentData.Ranking[id].Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 380;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._10_time, new cjs.Rectangle(0,0,384.4,39.2), null);


(lib._10_posicao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 9;
		this.txt.text = currentData.Ranking[id].Position.Number;
		this.txt.color = currentData.Ranking[id].Position.Color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 35px 'Raleway Black'", "#B5B3B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 96;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._10_posicao, new cjs.Rectangle(-50,0,100,45.1), null);


(lib._10_pontos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 9;
		this.txt.text = currentData.Ranking[id].Detail.Points;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 46;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._10_pontos, new cjs.Rectangle(0,0,50,39.2), null);


(lib._10_escudo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 9;
		var _this = this;
		var image = new Image();
		image.src = currentData.Ranking[id].Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 35 / image.width;
		    bitmap.scaleY = 35 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AiuCvIAAldIFdAAIAAFdg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._10_escudo, new cjs.Rectangle(0,0,35,35), null);


(lib._09_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 8;
		this.txt.text = currentData.Ranking[id].Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 380;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._09_time, new cjs.Rectangle(0,0,384.4,39.2), null);


(lib._09_posicao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 8;
		this.txt.text = currentData.Ranking[id].Position.Number;
		this.txt.color = currentData.Ranking[id].Position.Color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 35px 'Raleway Black'", "#B5B3B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 96;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._09_posicao, new cjs.Rectangle(-50,0,100,45.1), null);


(lib._09_pontos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 8;
		this.txt.text = currentData.Ranking[id].Detail.Points;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 46;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._09_pontos, new cjs.Rectangle(0,0,50,39.2), null);


(lib._09_escudo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 8;
		var _this = this;
		var image = new Image();
		image.src = currentData.Ranking[id].Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 35 / image.width;
		    bitmap.scaleY = 35 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AiuCvIAAldIFdAAIAAFdg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._09_escudo, new cjs.Rectangle(0,0,35,35), null);


(lib._08_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 7;
		this.txt.text = currentData.Ranking[id].Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 380;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._08_time, new cjs.Rectangle(0,0,384.4,39.2), null);


(lib._08_posicao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 7;
		this.txt.text = currentData.Ranking[id].Position.Number;
		this.txt.color = currentData.Ranking[id].Position.Color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 35px 'Raleway Black'", "#B5B3B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 96;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._08_posicao, new cjs.Rectangle(-50,0,100,45.1), null);


(lib._08_pontos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 7;
		this.txt.text = currentData.Ranking[id].Detail.Points;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 46;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._08_pontos, new cjs.Rectangle(0,0,50,39.2), null);


(lib._08_escudo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 7;
		var _this = this;
		var image = new Image();
		image.src = currentData.Ranking[id].Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 35 / image.width;
		    bitmap.scaleY = 35 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AiuCvIAAldIFdAAIAAFdg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._08_escudo, new cjs.Rectangle(0,0,35,35), null);


(lib._07_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 6;
		this.txt.text = currentData.Ranking[id].Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 380;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._07_time, new cjs.Rectangle(0,0,384.4,39.2), null);


(lib._07_posicao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 6;
		this.txt.text = currentData.Ranking[id].Position.Number;
		this.txt.color = currentData.Ranking[id].Position.Color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 35px 'Raleway Black'", "#B5B3B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 96;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._07_posicao, new cjs.Rectangle(-50,0,100,45.1), null);


(lib._07_pontos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 6;
		this.txt.text = currentData.Ranking[id].Detail.Points;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 46;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._07_pontos, new cjs.Rectangle(0,0,50,39.2), null);


(lib._07_escudo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 6;
		var _this = this;
		var image = new Image();
		image.src = currentData.Ranking[id].Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 35 / image.width;
		    bitmap.scaleY = 35 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AiuCvIAAldIFdAAIAAFdg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._07_escudo, new cjs.Rectangle(0,0,35,35), null);


(lib._06_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 5;
		this.txt.text = currentData.Ranking[id].Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 380;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._06_time, new cjs.Rectangle(0,0,384.4,39.2), null);


(lib._06_posicao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 5;
		this.txt.text = currentData.Ranking[id].Position.Number;
		this.txt.color = currentData.Ranking[id].Position.Color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 35px 'Raleway Black'", "#B5B3B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 96;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._06_posicao, new cjs.Rectangle(-50,0,100,45.1), null);


(lib._06_pontos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 5;
		this.txt.text = currentData.Ranking[id].Detail.Points;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 46;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._06_pontos, new cjs.Rectangle(0,0,50,39.2), null);


(lib._06_escudo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 5;
		var _this = this;
		var image = new Image();
		image.src = currentData.Ranking[id].Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 35 / image.width;
		    bitmap.scaleY = 35 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AiuCvIAAldIFdAAIAAFdg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._06_escudo, new cjs.Rectangle(0,0,35,35), null);


(lib._05_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 4;
		this.txt.text = currentData.Ranking[id].Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 380;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._05_time, new cjs.Rectangle(0,0,384.4,39.2), null);


(lib._05_posicao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 4;
		this.txt.text = currentData.Ranking[id].Position.Number;
		this.txt.color = currentData.Ranking[id].Position.Color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 35px 'Raleway Black'", "#B5B3B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 96;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._05_posicao, new cjs.Rectangle(-50,0,100,45.1), null);


(lib._05_pontos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 4;
		this.txt.text = currentData.Ranking[id].Detail.Points;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 46;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._05_pontos, new cjs.Rectangle(0,0,50,39.2), null);


(lib._05_escudo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 4;
		var _this = this;
		var image = new Image();
		image.src = currentData.Ranking[id].Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 35 / image.width;
		    bitmap.scaleY = 35 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AiuCvIAAldIFdAAIAAFdg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._05_escudo, new cjs.Rectangle(0,0,35,35), null);


(lib._04_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 3;
		this.txt.text = currentData.Ranking[id].Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 380;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._04_time, new cjs.Rectangle(0,0,384.4,39.2), null);


(lib._04_posicao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 3;
		this.txt.text = currentData.Ranking[id].Position.Number;
		this.txt.color = currentData.Ranking[id].Position.Color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 35px 'Raleway Black'", "#B5B3B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 96;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._04_posicao, new cjs.Rectangle(-50,0,100,45.1), null);


(lib._04_pontos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 3;
		this.txt.text = currentData.Ranking[id].Detail.Points;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 46;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._04_pontos, new cjs.Rectangle(0,0,50,39.2), null);


(lib._04_escudo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 3;
		var _this = this;
		var image = new Image();
		image.src = currentData.Ranking[id].Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 35 / image.width;
		    bitmap.scaleY = 35 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AiuCvIAAldIFdAAIAAFdg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._04_escudo, new cjs.Rectangle(0,0,35,35), null);


(lib._03_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 2;
		this.txt.text = currentData.Ranking[id].Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 380;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._03_time, new cjs.Rectangle(0,0,384.4,39.2), null);


(lib._03_posicao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 2;
		this.txt.text = currentData.Ranking[id].Position.Number;
		this.txt.color = currentData.Ranking[id].Position.Color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 35px 'Raleway Black'", "#B5B3B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 96;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._03_posicao, new cjs.Rectangle(-50,0,100,45.1), null);


(lib._03_pontos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 2;
		this.txt.text = currentData.Ranking[id].Detail.Points;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 46;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._03_pontos, new cjs.Rectangle(0,0,50,39.2), null);


(lib._03_escudo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 2;
		var _this = this;
		var image = new Image();
		image.src = currentData.Ranking[id].Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 35 / image.width;
		    bitmap.scaleY = 35 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AiuCvIAAldIFdAAIAAFdg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._03_escudo, new cjs.Rectangle(0,0,35,35), null);


(lib._02_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 1;
		this.txt.text = currentData.Ranking[id].Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 380;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._02_time, new cjs.Rectangle(0,0,384.4,39.2), null);


(lib._02_posicao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 1;
		this.txt.text = currentData.Ranking[id].Position.Number;
		this.txt.color = currentData.Ranking[id].Position.Color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 35px 'Raleway Black'", "#B5B3B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 96;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._02_posicao, new cjs.Rectangle(-50,0,100,45.1), null);


(lib._02_pontos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 1;
		this.txt.text = currentData.Ranking[id].Detail.Points;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 46;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._02_pontos, new cjs.Rectangle(0,0,50,39.2), null);


(lib._02_escudo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 1;
		var _this = this;
		var image = new Image();
		image.src = currentData.Ranking[id].Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 35 / image.width;
		    bitmap.scaleY = 35 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AiuCvIAAldIFdAAIAAFdg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._02_escudo, new cjs.Rectangle(0,0,35,35), null);


(lib._01_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 0;
		this.txt.text = currentData.Ranking[id].Name;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 380;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._01_time, new cjs.Rectangle(0,0,384.4,39.2), null);


(lib._01_posicao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 0;
		this.txt.text = currentData.Ranking[id].Position.Number;
		this.txt.color = currentData.Ranking[id].Position.Color;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 35px 'Raleway Black'", "#B5B3B5");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 43;
	this.txt.lineWidth = 96;
	this.txt.parent = this;
	this.txt.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._01_posicao, new cjs.Rectangle(-50,0,100,45.1), null);


(lib._01_pontos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 0;
		this.txt.text = currentData.Ranking[id].Detail.Points;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txt = new cjs.Text("...", "bold 30px 'Raleway Black'", "#3D3D3D");
	this.txt.name = "txt";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 46;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = getMCSymbolPrototype(lib._01_pontos, new cjs.Rectangle(0,0,50,39.2), null);


(lib._01_escudo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 0;
		var _this = this;
		var image = new Image();
		image.src = currentData.Ranking[id].Shield;
		image.onload = function() {
		    var bitmap = new createjs.Bitmap(image);
		    bitmap.scaleX = 35 / image.width;
		    bitmap.scaleY = 35 / image.height;
		   _this.addChild(bitmap);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AiuCvIAAldIFdAAIAAFdg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._01_escudo, new cjs.Rectangle(0,0,35,35), null);


(lib.noiseInterna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// noiseInternaMov
	this.instance = new lib.noiseInternaMov();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.noiseInterna, new cjs.Rectangle(-640,-360,1280,720), null);


(lib._10_status = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 9;
		this.ball.shape.graphics._fill.style = currentData.Ranking[id].Detail.Variation.Indication;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.bolinha_variacao();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = getMCSymbolPrototype(lib._10_status, new cjs.Rectangle(0,0,10,10), null);


(lib._09_status = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 8;
		this.ball.shape.graphics._fill.style = currentData.Ranking[id].Detail.Variation.Indication;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.bolinha_variacao();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = getMCSymbolPrototype(lib._09_status, new cjs.Rectangle(0,0,10,10), null);


(lib._08_status = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 7;
		this.ball.shape.graphics._fill.style = currentData.Ranking[id].Detail.Variation.Indication;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.bolinha_variacao();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = getMCSymbolPrototype(lib._08_status, new cjs.Rectangle(0,0,10,10), null);


(lib._07_status = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 6;
		this.ball.shape.graphics._fill.style = currentData.Ranking[id].Detail.Variation.Indication;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.bolinha_variacao();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = getMCSymbolPrototype(lib._07_status, new cjs.Rectangle(0,0,10,10), null);


(lib._06_status = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 5;
		this.ball.shape.graphics._fill.style = currentData.Ranking[id].Detail.Variation.Indication;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.bolinha_variacao();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = getMCSymbolPrototype(lib._06_status, new cjs.Rectangle(0,0,10,10), null);


(lib._05_status = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 4;
		this.ball.shape.graphics._fill.style = currentData.Ranking[id].Detail.Variation.Indication;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.bolinha_variacao();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = getMCSymbolPrototype(lib._05_status, new cjs.Rectangle(0,0,10,10), null);


(lib._04_status = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 3;
		this.ball.shape.graphics._fill.style = currentData.Ranking[id].Detail.Variation.Indication;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.bolinha_variacao();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = getMCSymbolPrototype(lib._04_status, new cjs.Rectangle(0,0,10,10), null);


(lib._03_status = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 2;
		this.ball.shape.graphics._fill.style = currentData.Ranking[id].Detail.Variation.Indication;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.bolinha_variacao();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = getMCSymbolPrototype(lib._03_status, new cjs.Rectangle(0,0,10,10), null);


(lib._02_status = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 1;
		this.ball.shape.graphics._fill.style = currentData.Ranking[id].Detail.Variation.Indication;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.bolinha_variacao();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = getMCSymbolPrototype(lib._02_status, new cjs.Rectangle(0,0,10,10), null);


(lib._01_status = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var id = 0;
		this.ball.shape.graphics._fill.style = currentData.Ranking[id].Detail.Variation.Indication;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.bolinha_variacao();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = getMCSymbolPrototype(lib._01_status, new cjs.Rectangle(0,0,10,10), null);


// stage content:
(lib.campeonatobrasileiro_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//--> FUNCTION BEGIN
		fileNameURI = function () {
			var url = window.location.pathname;
			var filename = url.substring(url.lastIndexOf('/')+1);
			
			return filename.split('.').slice(0, -1).join('.');
		}
		
		colorVariation = function (indication) {
			var color = '#999999';
			switch (indication) {
				case 'neutra':
					color = '#999999';
					break;
					
				case 'positiva':
					color = '#83D264';
					break;
					
				case 'negativa':
					color = '#D26464';
					break;
			}
			
			return color;
		}
		
		convertsColorPositions = function (colorIn){
			var color = 'b3b3b3';
			switch (colorIn) {
				case '0000ff':
					color = '#a6dcf8';
					break;
					
				case '00ffff':
					color = '#b9f8e3';
					break;
					
				case '008000':
					color = '#83d264';
					break;
					
				case 'ff0000':
					color = '#ec8c8d';
					break;
					
				default: 
					color = '#b3b3b3';
					break;
			}
			
			return color;
		}
		
		Storage.prototype.load = function(key) {
			var identifier = new Array();
			identifier.push(fileNameURI().toLowerCase().replace('.', '_'));
			identifier.push(key.toLowerCase());
			
			var key = identifier.join('.');
			
		    return this.getItem(key);
		};
		
		Storage.prototype.save = function(key, value) {
			var identifier = new Array();
			identifier.push(fileNameURI().toLowerCase().replace('.', '_'));
			identifier.push(key.toLowerCase());
			
			var key = identifier.join('.');
			localStorage.setItem(key, value);
		}
		
		//--> FUNCTION END
		
		var _this = this;
		var milliseconds = new Date().getTime();
		var pathUrl = './' + fileNameURI() + '.xml?' + milliseconds;
		currentData = null;
		
		var oReq = new XMLHttpRequest();
		oReq.addEventListener('progress', updateProgress, false);
		oReq.addEventListener('load', transferComplete, false);
		oReq.addEventListener('error', transferFailed, false);
		oReq.addEventListener('abort', transferCanceled, false);
		
		oReq.open('get', pathUrl, true);
		oReq.send();
		
		function updateProgress (oEvent) {
		  if (oEvent.lengthComputable) {
		    var percentComplete = oEvent.loaded / oEvent.total;
		//	  console.log('updateProgress.percentComplete: ' + percentComplete);
		  } else {
		//	  console.log('updateProgress.Message: Progress information could not be calculated because the total size is unknown');
		  }
		}
		
		function transferComplete(evt) {
		//	console.log('transferComplete.Message: Download completed');
			if (oReq.readyState === oReq.DONE) {
				if (oReq.status === 200) {
					initialize();
				}
			}
		}
		
		function transferFailed(evt) {
		//	console.log('transferFailed.Message: An error occurred while downloading the file');
		}
		
		function transferCanceled(evt) {
		//	console.log('transferCanceled.Message: Download was canceled by user');
		}
		
		function initialize() {
		//--> DEFINE LOCALSTORAGE BEGIN
			tableIndex = localStorage.load('tableIndex');
			if (tableIndex == null) {
				tableIndex = 0;
			}
			var tableIndexAux = parseInt(tableIndex) + 1;
			if (tableIndexAux > 1) {
				tableIndexAux = 0;
			}
			localStorage.save('tableIndex', tableIndexAux);
			
			matchIndex = localStorage.load('matchIndex');
			if (matchIndex == null) {
				matchIndex = 0;
			}
			var matchIndexAux = parseInt(matchIndex) + 1;
			localStorage.save('matchIndex', matchIndexAux);
			
		//--> DEFINE LOCALSTORAGE END
			
			var xmlDoc = oReq.responseXML;
			var info = xmlDoc.getElementsByTagName('info')[0];
			var roundActive = parseInt(info.getElementsByTagName('round_active')[0].textContent) - 1;
			var round = xmlDoc.getElementsByTagName('rounds')[0].getElementsByTagName('round')[roundActive];
			var matches = round.getElementsByTagName('matches')[0].getElementsByTagName('match');
			var teams = xmlDoc.getElementsByTagName('ranking')[0].getElementsByTagName('team');
			
			if (localStorage.load('matchIndex') >= matches.length) {
				localStorage.save('matchIndex', 0);
			}
			
			currentData = new Array();
			currentData['Info'] = new Array();
			currentData['Info']['Serie'] = info.getElementsByTagName('series')[0].textContent;
			currentData['Info']['Round'] = round.getElementsByTagName('title')[0].textContent;
			currentData['Info']['Media'] = new Array();
			currentData['Info']['Media']['Video'] = info.getElementsByTagName('media')[0].getElementsByTagName('video')[0].textContent;
			currentData['Info']['Media']['Image'] = info.getElementsByTagName('media')[0].getElementsByTagName('image')[0].textContent;
			
			currentData['Ranking'] = new Array();
			for (var i = 0; i < 10; i++) {
				var indice = i + (10 * tableIndex);
				var team = 	teams[indice];
				
				currentData['Ranking'][i] = new Array();
				currentData['Ranking'][i]['Name'] = team.getElementsByTagName('name')[0].textContent;
				currentData['Ranking'][i]['Shield'] = team.getElementsByTagName('shield')[0].textContent;
				currentData['Ranking'][i]['Position'] = new Array();
				currentData['Ranking'][i]['Position']['Number'] = team.getElementsByTagName('position')[0].getElementsByTagName('number')[0].textContent;
				currentData['Ranking'][i]['Position']['Color'] = convertsColorPositions(team.getElementsByTagName('position')[0].getElementsByTagName('color')[0].textContent);
				currentData['Ranking'][i]['Detail'] = new Array();
				currentData['Ranking'][i]['Detail']['Variation'] = new Array();
				currentData['Ranking'][i]['Detail']['Variation']['Indication'] = colorVariation(team.getElementsByTagName('detail')[0].getElementsByTagName('variation')[0].getElementsByTagName('indication')[0].textContent);
				currentData['Ranking'][i]['Detail']['Points'] = team.getElementsByTagName('detail')[0].getElementsByTagName('points')[0].textContent;
			}
		
			var match = matches[matchIndex];
			
			currentData['Round'] = new Array();
			currentData['Round']['Name'] = round.getElementsByTagName('title')[0].textContent;
			currentData['Round']['Match'] = new Array();
			currentData['Round']['Match']['Date'] = match.getElementsByTagName('date')[0].textContent;
			currentData['Round']['Match']['Hour'] = match.getElementsByTagName('hour')[0].textContent;
			currentData['Round']['Match']['Local'] = match.getElementsByTagName('local')[0].textContent;
			currentData['Round']['Match']['Teams'] = new Array();
			currentData['Round']['Match']['Teams']['Home'] = new Array();
			currentData['Round']['Match']['Teams']['Home']['Name'] = match.getElementsByTagName('teams')[0].getElementsByTagName('home')[0].getElementsByTagName('name')[0].textContent;
			currentData['Round']['Match']['Teams']['Home']['Shield'] = match.getElementsByTagName('teams')[0].getElementsByTagName('home')[0].getElementsByTagName('shield')[0].textContent;
			currentData['Round']['Match']['Teams']['Visitor'] = new Array();
			currentData['Round']['Match']['Teams']['Visitor']['Name'] = match.getElementsByTagName('teams')[0].getElementsByTagName('visitor')[0].getElementsByTagName('name')[0].textContent;
			currentData['Round']['Match']['Teams']['Visitor']['Shield'] = match.getElementsByTagName('teams')[0].getElementsByTagName('visitor')[0].getElementsByTagName('shield')[0].textContent;
			currentData['Round']['Scoreboard'] = new Array();
			currentData['Round']['Scoreboard']['Status'] = match.getElementsByTagName('scoreboard')[0].getElementsByTagName('status')[0].textContent;
			currentData['Round']['Scoreboard']['Home'] = match.getElementsByTagName('scoreboard')[0].getElementsByTagName('home')[0].textContent;
			currentData['Round']['Scoreboard']['Visitor'] = match.getElementsByTagName('scoreboard')[0].getElementsByTagName('visitor')[0].textContent;
		
			_this.play();
		}
	}
	this.frame_479 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(479).call(this.frame_479).wait(1));

	// txtRodadaTabela
	this.instance = new lib.txtRodadaTabela();
	this.instance.parent = this;
	this.instance.setTransform(831.6,-42.8,1,1,0,0,0,74.8,19.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(358).to({_off:false},0).wait(1).to({regX:250,x:1006.8,y:-39.2},0).wait(1).to({y:-35.3},0).wait(1).to({y:-31.1},0).wait(1).to({y:-26.5},0).wait(1).to({y:-21.3},0).wait(1).to({y:-15.5},0).wait(1).to({y:-9},0).wait(1).to({y:-2},0).wait(1).to({y:5},0).wait(1).to({y:10.8},0).wait(1).to({y:15.4},0).wait(1).to({y:18.9},0).wait(1).to({y:21.6},0).wait(1).to({y:23.7},0).wait(1).to({y:25.5},0).wait(1).to({y:27},0).wait(1).to({y:28.3},0).wait(1).to({y:29.4},0).wait(1).to({y:30.3},0).wait(1).to({y:31.1},0).wait(1).to({y:31.8},0).wait(1).to({y:32.5},0).wait(1).to({y:33},0).wait(1).to({y:33.5},0).wait(1).to({y:34},0).wait(1).to({y:34.4},0).wait(1).to({y:34.8},0).wait(1).to({y:35.1},0).wait(1).to({y:35.4},0).wait(1).to({y:35.6},0).wait(1).to({y:35.9},0).wait(1).to({y:36.1},0).wait(1).to({y:36.2},0).wait(1).to({y:36.4},0).wait(1).to({y:36.6},0).wait(1).to({y:36.7},0).wait(1).to({y:36.8},0).wait(1).to({y:36.9},0).wait(1).to({y:37},0).wait(2).to({y:37.1},0).wait(2).to({y:37.2},0).wait(3).to({regX:74.8,x:831.6},0).wait(76));

	// txtSerieTabela
	this.instance_1 = new lib.txtSerieTabela();
	this.instance_1.parent = this;
	this.instance_1.setTransform(684.7,-42.8,1,1,0,0,0,68.5,19.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(355).to({_off:false},0).wait(1).to({regX:74.1,x:690.3,y:-39.2},0).wait(1).to({y:-35.3},0).wait(1).to({y:-31.1},0).wait(1).to({y:-26.5},0).wait(1).to({y:-21.3},0).wait(1).to({y:-15.5},0).wait(1).to({y:-9},0).wait(1).to({y:-2},0).wait(1).to({y:5},0).wait(1).to({y:10.8},0).wait(1).to({y:15.4},0).wait(1).to({y:18.9},0).wait(1).to({y:21.6},0).wait(1).to({y:23.7},0).wait(1).to({y:25.5},0).wait(1).to({y:27},0).wait(1).to({y:28.3},0).wait(1).to({y:29.4},0).wait(1).to({y:30.3},0).wait(1).to({y:31.1},0).wait(1).to({y:31.8},0).wait(1).to({y:32.5},0).wait(1).to({y:33},0).wait(1).to({y:33.5},0).wait(1).to({y:34},0).wait(1).to({y:34.4},0).wait(1).to({y:34.8},0).wait(1).to({y:35.1},0).wait(1).to({y:35.4},0).wait(1).to({y:35.6},0).wait(1).to({y:35.9},0).wait(1).to({y:36.1},0).wait(1).to({y:36.2},0).wait(1).to({y:36.4},0).wait(1).to({y:36.6},0).wait(1).to({y:36.7},0).wait(1).to({y:36.8},0).wait(1).to({y:36.9},0).wait(1).to({y:37},0).wait(2).to({y:37.1},0).wait(2).to({y:37.2},0).wait(3).to({regX:68.5,x:684.7},0).wait(79));

	// 01_pontos
	this.instance_2 = new lib._01_pontos();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1906.3,100.6,1,1,0,0,0,20.3,19.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(314).to({_off:false},0).wait(1).to({regX:25,x:1881.5},0).wait(1).to({x:1850},0).wait(1).to({x:1816.1},0).wait(1).to({x:1779.2},0).wait(1).to({x:1738.7},0).wait(1).to({x:1693.7},0).wait(1).to({x:1643.4},0).wait(1).to({x:1587.8},0).wait(1).to({x:1529.2},0).wait(1).to({x:1473.8},0).wait(1).to({x:1427.3},0).wait(1).to({x:1390.7},0).wait(1).to({x:1362},0).wait(1).to({x:1339.2},0).wait(1).to({x:1320.7},0).wait(1).to({x:1305.4},0).wait(1).to({x:1292.5},0).wait(1).to({x:1281.4},0).wait(1).to({x:1271.9},0).wait(1).to({x:1263.6},0).wait(1).to({x:1256.2},0).wait(1).to({x:1249.7},0).wait(1).to({x:1243.9},0).wait(1).to({x:1238.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1230},0).wait(1).to({x:1226.3},0).wait(1).to({x:1222.9},0).wait(1).to({x:1219.8},0).wait(1).to({x:1217.1},0).wait(1).to({x:1214.6},0).wait(1).to({x:1212.3},0).wait(1).to({x:1210.3},0).wait(1).to({x:1208.5},0).wait(1).to({x:1206.8},0).wait(1).to({x:1205.3},0).wait(1).to({x:1204},0).wait(1).to({x:1202.8},0).wait(1).to({x:1201.8},0).wait(1).to({x:1200.9},0).wait(1).to({x:1200.1},0).wait(1).to({x:1199.4},0).wait(1).to({x:1198.8},0).wait(1).to({x:1198.3},0).wait(1).to({x:1197.9},0).wait(1).to({x:1197.5},0).wait(1).to({x:1197.3},0).wait(1).to({x:1197.1},0).wait(1).to({x:1197},0).wait(1).to({regX:20.3,x:1192.3},0).wait(116));

	// 01_time
	this.instance_3 = new lib._01_time();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1676.2,100.6,1,1,0,0,0,192.2,19.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(313).to({_off:false},0).wait(1).to({x:1646.7},0).wait(1).to({x:1615.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1544.4},0).wait(1).to({x:1503.9},0).wait(1).to({x:1458.9},0).wait(1).to({x:1408.6},0).wait(1).to({x:1353},0).wait(1).to({x:1294.4},0).wait(1).to({x:1239},0).wait(1).to({x:1192.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1127.2},0).wait(1).to({x:1104.4},0).wait(1).to({x:1085.9},0).wait(1).to({x:1070.6},0).wait(1).to({x:1057.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1037.1},0).wait(1).to({x:1028.8},0).wait(1).to({x:1021.4},0).wait(1).to({x:1014.9},0).wait(1).to({x:1009.1},0).wait(1).to({x:1004},0).wait(1).to({x:999.4},0).wait(1).to({x:995.2},0).wait(1).to({x:991.5},0).wait(1).to({x:988.1},0).wait(1).to({x:985},0).wait(1).to({x:982.3},0).wait(1).to({x:979.8},0).wait(1).to({x:977.5},0).wait(1).to({x:975.5},0).wait(1).to({x:973.7},0).wait(1).to({x:972},0).wait(1).to({x:970.5},0).wait(1).to({x:969.2},0).wait(1).to({x:968},0).wait(1).to({x:967},0).wait(1).to({x:966.1},0).wait(1).to({x:965.3},0).wait(1).to({x:964.6},0).wait(1).to({x:964},0).wait(1).to({x:963.5},0).wait(1).to({x:963.1},0).wait(1).to({x:962.7},0).wait(1).to({x:962.5},0).wait(1).to({x:962.3},0).wait(1).to({x:962.2},0).wait(118));

	// 01_escudo
	this.instance_4 = new lib._01_escudo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1438.7,101.1,1,1,0,0,0,17.7,17.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(312).to({_off:false},0).wait(1).to({regX:17.5,regY:17.5,x:1409,y:100.9},0).wait(1).to({x:1377.5},0).wait(1).to({x:1343.6},0).wait(1).to({x:1306.7},0).wait(1).to({x:1266.2},0).wait(1).to({x:1221.2},0).wait(1).to({x:1170.9},0).wait(1).to({x:1115.3},0).wait(1).to({x:1056.7},0).wait(1).to({x:1001.3},0).wait(1).to({x:954.8},0).wait(1).to({x:918.2},0).wait(1).to({x:889.5},0).wait(1).to({x:866.7},0).wait(1).to({x:848.2},0).wait(1).to({x:832.9},0).wait(1).to({x:820},0).wait(1).to({x:808.9},0).wait(1).to({x:799.4},0).wait(1).to({x:791.1},0).wait(1).to({x:783.7},0).wait(1).to({x:777.2},0).wait(1).to({x:771.4},0).wait(1).to({x:766.3},0).wait(1).to({x:761.7},0).wait(1).to({x:757.5},0).wait(1).to({x:753.8},0).wait(1).to({x:750.4},0).wait(1).to({x:747.3},0).wait(1).to({x:744.6},0).wait(1).to({x:742.1},0).wait(1).to({x:739.8},0).wait(1).to({x:737.8},0).wait(1).to({x:736},0).wait(1).to({x:734.3},0).wait(1).to({x:732.8},0).wait(1).to({x:731.5},0).wait(1).to({x:730.3},0).wait(1).to({x:729.3},0).wait(1).to({x:728.4},0).wait(1).to({x:727.6},0).wait(1).to({x:726.9},0).wait(1).to({x:726.3},0).wait(1).to({x:725.8},0).wait(1).to({x:725.4},0).wait(1).to({x:725},0).wait(1).to({x:724.8},0).wait(1).to({x:724.6},0).wait(1).to({x:724.5},0).wait(1).to({regX:17.7,regY:17.7,x:724.7,y:101.1},0).wait(118));

	// 01_status
	this.instance_5 = new lib._01_status();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1382,101,1,1,0,0,0,5,5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(311).to({_off:false},0).wait(1).to({x:1352.5},0).wait(1).to({x:1321},0).wait(1).to({x:1287.1},0).wait(1).to({x:1250.2},0).wait(1).to({x:1209.7},0).wait(1).to({x:1164.7},0).wait(1).to({x:1114.4},0).wait(1).to({x:1058.8},0).wait(1).to({x:1000.2},0).wait(1).to({x:944.8},0).wait(1).to({x:898.3},0).wait(1).to({x:861.7},0).wait(1).to({x:833},0).wait(1).to({x:810.2},0).wait(1).to({x:791.7},0).wait(1).to({x:776.4},0).wait(1).to({x:763.5},0).wait(1).to({x:752.4},0).wait(1).to({x:742.9},0).wait(1).to({x:734.6},0).wait(1).to({x:727.2},0).wait(1).to({x:720.7},0).wait(1).to({x:714.9},0).wait(1).to({x:709.8},0).wait(1).to({x:705.2},0).wait(1).to({x:701},0).wait(1).to({x:697.3},0).wait(1).to({x:693.9},0).wait(1).to({x:690.8},0).wait(1).to({x:688.1},0).wait(1).to({x:685.6},0).wait(1).to({x:683.3},0).wait(1).to({x:681.3},0).wait(1).to({x:679.5},0).wait(1).to({x:677.8},0).wait(1).to({x:676.3},0).wait(1).to({x:675},0).wait(1).to({x:673.8},0).wait(1).to({x:672.8},0).wait(1).to({x:671.9},0).wait(1).to({x:671.1},0).wait(1).to({x:670.4},0).wait(1).to({x:669.8},0).wait(1).to({x:669.3},0).wait(1).to({x:668.9},0).wait(1).to({x:668.5},0).wait(1).to({x:668.3},0).wait(1).to({x:668.1},0).wait(1).to({x:668},0).wait(120));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_310 = new cjs.Graphics().p("AlXEjIAApFIKvAAIAAJFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(310).to({graphics:mask_graphics_310,x:628.6,y:99}).wait(170));

	// 01_posicao
	this.instance_6 = new lib._01_posicao();
	this.instance_6.parent = this;
	this.instance_6.setTransform(641.7,153.1,1,1,0,0,0,11.7,22.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(310).to({_off:false},0).wait(1).to({regX:0,x:630,y:150.9,alpha:0.041},0).wait(1).to({y:148.6,alpha:0.085},0).wait(1).to({y:146.1,alpha:0.133},0).wait(1).to({y:143.4,alpha:0.185},0).wait(1).to({y:140.4,alpha:0.241},0).wait(1).to({y:137.1,alpha:0.304},0).wait(1).to({y:133.4,alpha:0.375},0).wait(1).to({y:129.3,alpha:0.453},0).wait(1).to({y:125,alpha:0.535},0).wait(1).to({y:121,alpha:0.612},0).wait(1).to({y:117.5,alpha:0.677},0).wait(1).to({y:114.8,alpha:0.729},0).wait(1).to({y:112.7,alpha:0.769},0).wait(1).to({y:111.1,alpha:0.801},0).wait(1).to({y:109.7,alpha:0.827},0).wait(1).to({y:108.6,alpha:0.848},0).wait(1).to({y:107.6,alpha:0.866},0).wait(1).to({y:106.8,alpha:0.882},0).wait(1).to({y:106.1,alpha:0.895},0).wait(1).to({y:105.5,alpha:0.907},0).wait(1).to({y:105,alpha:0.917},0).wait(1).to({y:104.5,alpha:0.926},0).wait(1).to({y:104.1,alpha:0.934},0).wait(1).to({y:103.7,alpha:0.941},0).wait(1).to({y:103.3,alpha:0.948},0).wait(1).to({y:103,alpha:0.954},0).wait(1).to({y:102.8,alpha:0.959},0).wait(1).to({y:102.5,alpha:0.964},0).wait(1).to({y:102.3,alpha:0.968},0).wait(1).to({y:102.1,alpha:0.972},0).wait(1).to({y:101.9,alpha:0.975},0).wait(1).to({y:101.7,alpha:0.979},0).wait(1).to({y:101.6,alpha:0.981},0).wait(1).to({y:101.4,alpha:0.984},0).wait(1).to({y:101.3,alpha:0.986},0).wait(1).to({y:101.2,alpha:0.988},0).wait(1).to({y:101.1,alpha:0.99},0).wait(1).to({y:101,alpha:0.992},0).wait(1).to({alpha:0.993},0).wait(1).to({y:100.9,alpha:0.995},0).wait(1).to({y:100.8,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({y:100.7,alpha:0.998},0).wait(2).to({alpha:0.999},0).wait(1).to({y:100.6},0).wait(1).to({alpha:1},0).wait(3).to({regX:11.7,x:641.7},0).wait(120));

	// div
	this.instance_7 = new lib.div();
	this.instance_7.parent = this;
	this.instance_7.setTransform(617.5,128,0.001,1,0,0,0,-309.2,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(335).to({_off:false},0).wait(1).to({regX:0,scaleX:0.04,x:630.8},0).wait(1).to({scaleX:0.09,x:644.7},0).wait(1).to({scaleX:0.14,x:659.7},0).wait(1).to({scaleX:0.19,x:676.1},0).wait(1).to({scaleX:0.25,x:694.2},0).wait(1).to({scaleX:0.31,x:714.3},0).wait(1).to({scaleX:0.39,x:736.8},0).wait(1).to({scaleX:0.47,x:761.7},0).wait(1).to({scaleX:0.55,x:787.5},0).wait(1).to({scaleX:0.63,x:811.3},0).wait(1).to({scaleX:0.69,x:830.9},0).wait(1).to({scaleX:0.74,x:846.2},0).wait(1).to({scaleX:0.78,x:858.1},0).wait(1).to({scaleX:0.81,x:867.6},0).wait(1).to({scaleX:0.83,x:875.3},0).wait(1).to({scaleX:0.86,x:881.7},0).wait(1).to({scaleX:0.87,x:887.1},0).wait(1).to({scaleX:0.89,x:891.7},0).wait(1).to({scaleX:0.9,x:895.7},0).wait(1).to({scaleX:0.91,x:899.2},0).wait(1).to({scaleX:0.92,x:902.3},0).wait(1).to({scaleX:0.93,x:905},0).wait(1).to({scaleX:0.94,x:907.4},0).wait(1).to({scaleX:0.95,x:909.6},0).wait(1).to({scaleX:0.95,x:911.5},0).wait(1).to({scaleX:0.96,x:913.3},0).wait(1).to({scaleX:0.96,x:914.8},0).wait(1).to({scaleX:0.97,x:916.2},0).wait(1).to({scaleX:0.97,x:917.5},0).wait(1).to({scaleX:0.97,x:918.6},0).wait(1).to({scaleX:0.98,x:919.7},0).wait(1).to({scaleX:0.98,x:920.6},0).wait(1).to({scaleX:0.98,x:921.4},0).wait(1).to({scaleX:0.99,x:922.2},0).wait(1).to({scaleX:0.99,x:922.9},0).wait(1).to({scaleX:0.99,x:923.5},0).wait(1).to({scaleX:0.99,x:924},0).wait(1).to({scaleX:0.99,x:924.5},0).wait(1).to({scaleX:0.99,x:924.9},0).wait(1).to({scaleX:1,x:925.3},0).wait(1).to({scaleX:1,x:925.6},0).wait(1).to({x:925.8},0).wait(1).to({scaleX:1,x:926.1},0).wait(1).to({scaleX:1,x:926.3},0).wait(1).to({x:926.4},0).wait(1).to({scaleX:1,x:926.5},0).wait(1).to({x:926.6},0).wait(2).to({regX:-307.5,x:617.5},0).wait(96));

	// 02_pontos
	this.instance_8 = new lib._02_pontos();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1906.3,158.6,1,1,0,0,0,20.3,19.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(317).to({_off:false},0).wait(1).to({regX:25,x:1881.5},0).wait(1).to({x:1850},0).wait(1).to({x:1816.1},0).wait(1).to({x:1779.2},0).wait(1).to({x:1738.7},0).wait(1).to({x:1693.7},0).wait(1).to({x:1643.4},0).wait(1).to({x:1587.8},0).wait(1).to({x:1529.2},0).wait(1).to({x:1473.8},0).wait(1).to({x:1427.3},0).wait(1).to({x:1390.7},0).wait(1).to({x:1362},0).wait(1).to({x:1339.2},0).wait(1).to({x:1320.7},0).wait(1).to({x:1305.4},0).wait(1).to({x:1292.5},0).wait(1).to({x:1281.4},0).wait(1).to({x:1271.9},0).wait(1).to({x:1263.6},0).wait(1).to({x:1256.2},0).wait(1).to({x:1249.7},0).wait(1).to({x:1243.9},0).wait(1).to({x:1238.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1230},0).wait(1).to({x:1226.3},0).wait(1).to({x:1222.9},0).wait(1).to({x:1219.8},0).wait(1).to({x:1217.1},0).wait(1).to({x:1214.6},0).wait(1).to({x:1212.3},0).wait(1).to({x:1210.3},0).wait(1).to({x:1208.5},0).wait(1).to({x:1206.8},0).wait(1).to({x:1205.3},0).wait(1).to({x:1204},0).wait(1).to({x:1202.8},0).wait(1).to({x:1201.8},0).wait(1).to({x:1200.9},0).wait(1).to({x:1200.1},0).wait(1).to({x:1199.4},0).wait(1).to({x:1198.8},0).wait(1).to({x:1198.3},0).wait(1).to({x:1197.9},0).wait(1).to({x:1197.5},0).wait(1).to({x:1197.3},0).wait(1).to({x:1197.1},0).wait(1).to({x:1197},0).wait(1).to({regX:20.3,x:1192.3},0).wait(113));

	// 02_time
	this.instance_9 = new lib._02_time();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1676.2,158.6,1,1,0,0,0,192.2,19.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(316).to({_off:false},0).wait(1).to({x:1646.7},0).wait(1).to({x:1615.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1544.4},0).wait(1).to({x:1503.9},0).wait(1).to({x:1458.9},0).wait(1).to({x:1408.6},0).wait(1).to({x:1353},0).wait(1).to({x:1294.4},0).wait(1).to({x:1239},0).wait(1).to({x:1192.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1127.2},0).wait(1).to({x:1104.4},0).wait(1).to({x:1085.9},0).wait(1).to({x:1070.6},0).wait(1).to({x:1057.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1037.1},0).wait(1).to({x:1028.8},0).wait(1).to({x:1021.4},0).wait(1).to({x:1014.9},0).wait(1).to({x:1009.1},0).wait(1).to({x:1004},0).wait(1).to({x:999.4},0).wait(1).to({x:995.2},0).wait(1).to({x:991.5},0).wait(1).to({x:988.1},0).wait(1).to({x:985},0).wait(1).to({x:982.3},0).wait(1).to({x:979.8},0).wait(1).to({x:977.5},0).wait(1).to({x:975.5},0).wait(1).to({x:973.7},0).wait(1).to({x:972},0).wait(1).to({x:970.5},0).wait(1).to({x:969.2},0).wait(1).to({x:968},0).wait(1).to({x:967},0).wait(1).to({x:966.1},0).wait(1).to({x:965.3},0).wait(1).to({x:964.6},0).wait(1).to({x:964},0).wait(1).to({x:963.5},0).wait(1).to({x:963.1},0).wait(1).to({x:962.7},0).wait(1).to({x:962.5},0).wait(1).to({x:962.3},0).wait(1).to({x:962.2},0).wait(115));

	// 02_escudo
	this.instance_10 = new lib._02_escudo();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1438.7,158.7,1,1,0,0,0,17.7,17.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(315).to({_off:false},0).wait(1).to({regX:17.5,regY:17.5,x:1409,y:158.5},0).wait(1).to({x:1377.5},0).wait(1).to({x:1343.6},0).wait(1).to({x:1306.7},0).wait(1).to({x:1266.2},0).wait(1).to({x:1221.2},0).wait(1).to({x:1170.9},0).wait(1).to({x:1115.3},0).wait(1).to({x:1056.7},0).wait(1).to({x:1001.3},0).wait(1).to({x:954.8},0).wait(1).to({x:918.2},0).wait(1).to({x:889.5},0).wait(1).to({x:866.7},0).wait(1).to({x:848.2},0).wait(1).to({x:832.9},0).wait(1).to({x:820},0).wait(1).to({x:808.9},0).wait(1).to({x:799.4},0).wait(1).to({x:791.1},0).wait(1).to({x:783.7},0).wait(1).to({x:777.2},0).wait(1).to({x:771.4},0).wait(1).to({x:766.3},0).wait(1).to({x:761.7},0).wait(1).to({x:757.5},0).wait(1).to({x:753.8},0).wait(1).to({x:750.4},0).wait(1).to({x:747.3},0).wait(1).to({x:744.6},0).wait(1).to({x:742.1},0).wait(1).to({x:739.8},0).wait(1).to({x:737.8},0).wait(1).to({x:736},0).wait(1).to({x:734.3},0).wait(1).to({x:732.8},0).wait(1).to({x:731.5},0).wait(1).to({x:730.3},0).wait(1).to({x:729.3},0).wait(1).to({x:728.4},0).wait(1).to({x:727.6},0).wait(1).to({x:726.9},0).wait(1).to({x:726.3},0).wait(1).to({x:725.8},0).wait(1).to({x:725.4},0).wait(1).to({x:725},0).wait(1).to({x:724.8},0).wait(1).to({x:724.6},0).wait(1).to({x:724.5},0).wait(1).to({regX:17.7,regY:17.7,x:724.7,y:158.7},0).wait(115));

	// 02_status
	this.instance_11 = new lib._02_status();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1382,160,1,1,0,0,0,5,5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(314).to({_off:false},0).wait(1).to({x:1352.5},0).wait(1).to({x:1321},0).wait(1).to({x:1287.1},0).wait(1).to({x:1250.2},0).wait(1).to({x:1209.7},0).wait(1).to({x:1164.7},0).wait(1).to({x:1114.4},0).wait(1).to({x:1058.8},0).wait(1).to({x:1000.2},0).wait(1).to({x:944.8},0).wait(1).to({x:898.3},0).wait(1).to({x:861.7},0).wait(1).to({x:833},0).wait(1).to({x:810.2},0).wait(1).to({x:791.7},0).wait(1).to({x:776.4},0).wait(1).to({x:763.5},0).wait(1).to({x:752.4},0).wait(1).to({x:742.9},0).wait(1).to({x:734.6},0).wait(1).to({x:727.2},0).wait(1).to({x:720.7},0).wait(1).to({x:714.9},0).wait(1).to({x:709.8},0).wait(1).to({x:705.2},0).wait(1).to({x:701},0).wait(1).to({x:697.3},0).wait(1).to({x:693.9},0).wait(1).to({x:690.8},0).wait(1).to({x:688.1},0).wait(1).to({x:685.6},0).wait(1).to({x:683.3},0).wait(1).to({x:681.3},0).wait(1).to({x:679.5},0).wait(1).to({x:677.8},0).wait(1).to({x:676.3},0).wait(1).to({x:675},0).wait(1).to({x:673.8},0).wait(1).to({x:672.8},0).wait(1).to({x:671.9},0).wait(1).to({x:671.1},0).wait(1).to({x:670.4},0).wait(1).to({x:669.8},0).wait(1).to({x:669.3},0).wait(1).to({x:668.9},0).wait(1).to({x:668.5},0).wait(1).to({x:668.3},0).wait(1).to({x:668.1},0).wait(1).to({x:668},0).wait(117));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_313 = new cjs.Graphics().p("AkdEeIAAo7II7AAIAAI7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(313).to({graphics:mask_1_graphics_313,x:631.3,y:157.8}).wait(167));

	// 02_posicao
	this.instance_12 = new lib._02_posicao();
	this.instance_12.parent = this;
	this.instance_12.setTransform(641.7,211.1,1,1,0,0,0,11.7,22.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(313).to({_off:false},0).wait(1).to({regX:0,x:630,y:208.9,alpha:0.041},0).wait(1).to({y:206.6,alpha:0.085},0).wait(1).to({y:204.1,alpha:0.133},0).wait(1).to({y:201.4,alpha:0.185},0).wait(1).to({y:198.4,alpha:0.241},0).wait(1).to({y:195.1,alpha:0.304},0).wait(1).to({y:191.4,alpha:0.375},0).wait(1).to({y:187.3,alpha:0.453},0).wait(1).to({y:183,alpha:0.535},0).wait(1).to({y:179,alpha:0.612},0).wait(1).to({y:175.5,alpha:0.677},0).wait(1).to({y:172.8,alpha:0.729},0).wait(1).to({y:170.7,alpha:0.769},0).wait(1).to({y:169.1,alpha:0.801},0).wait(1).to({y:167.7,alpha:0.827},0).wait(1).to({y:166.6,alpha:0.848},0).wait(1).to({y:165.6,alpha:0.866},0).wait(1).to({y:164.8,alpha:0.882},0).wait(1).to({y:164.1,alpha:0.895},0).wait(1).to({y:163.5,alpha:0.907},0).wait(1).to({y:163,alpha:0.917},0).wait(1).to({y:162.5,alpha:0.926},0).wait(1).to({y:162.1,alpha:0.934},0).wait(1).to({y:161.7,alpha:0.941},0).wait(1).to({y:161.3,alpha:0.948},0).wait(1).to({y:161,alpha:0.954},0).wait(1).to({y:160.8,alpha:0.959},0).wait(1).to({y:160.5,alpha:0.964},0).wait(1).to({y:160.3,alpha:0.968},0).wait(1).to({y:160.1,alpha:0.972},0).wait(1).to({y:159.9,alpha:0.975},0).wait(1).to({y:159.7,alpha:0.979},0).wait(1).to({y:159.6,alpha:0.981},0).wait(1).to({y:159.4,alpha:0.984},0).wait(1).to({y:159.3,alpha:0.986},0).wait(1).to({y:159.2,alpha:0.988},0).wait(1).to({y:159.1,alpha:0.99},0).wait(1).to({y:159,alpha:0.992},0).wait(1).to({alpha:0.993},0).wait(1).to({y:158.9,alpha:0.995},0).wait(1).to({y:158.8,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({y:158.7,alpha:0.998},0).wait(2).to({alpha:0.999},0).wait(1).to({y:158.6},0).wait(1).to({alpha:1},0).wait(3).to({regX:11.7,x:641.7},0).wait(117));

	// div
	this.instance_13 = new lib.div();
	this.instance_13.parent = this;
	this.instance_13.setTransform(617.5,187,0.001,1,0,0,0,-309.2,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(338).to({_off:false},0).wait(1).to({regX:0,scaleX:0.04,x:631},0).wait(1).to({scaleX:0.09,x:645.3},0).wait(1).to({scaleX:0.14,x:660.7},0).wait(1).to({scaleX:0.19,x:677.6},0).wait(1).to({scaleX:0.26,x:696.2},0).wait(1).to({scaleX:0.32,x:717},0).wait(1).to({scaleX:0.4,x:740.3},0).wait(1).to({scaleX:0.48,x:766},0).wait(1).to({scaleX:0.56,x:792.2},0).wait(1).to({scaleX:0.64,x:815.8},0).wait(1).to({scaleX:0.7,x:834.8},0).wait(1).to({scaleX:0.75,x:849.4},0).wait(1).to({scaleX:0.79,x:860.9},0).wait(1).to({scaleX:0.82,x:870},0).wait(1).to({scaleX:0.84,x:877.4},0).wait(1).to({scaleX:0.86,x:883.6},0).wait(1).to({scaleX:0.88,x:888.8},0).wait(1).to({scaleX:0.89,x:893.3},0).wait(1).to({scaleX:0.91,x:897.1},0).wait(1).to({scaleX:0.92,x:900.5},0).wait(1).to({scaleX:0.93,x:903.5},0).wait(1).to({scaleX:0.93,x:906.1},0).wait(1).to({scaleX:0.94,x:908.5},0).wait(1).to({scaleX:0.95,x:910.6},0).wait(1).to({scaleX:0.95,x:912.4},0).wait(1).to({scaleX:0.96,x:914.1},0).wait(1).to({scaleX:0.96,x:915.6},0).wait(1).to({scaleX:0.97,x:917},0).wait(1).to({scaleX:0.97,x:918.2},0).wait(1).to({scaleX:0.98,x:919.3},0).wait(1).to({scaleX:0.98,x:920.3},0).wait(1).to({scaleX:0.98,x:921.2},0).wait(1).to({scaleX:0.99,x:922},0).wait(1).to({scaleX:0.99,x:922.7},0).wait(1).to({scaleX:0.99,x:923.3},0).wait(1).to({scaleX:0.99,x:923.9},0).wait(1).to({scaleX:0.99,x:924.4},0).wait(1).to({scaleX:0.99,x:924.8},0).wait(1).to({scaleX:1,x:925.2},0).wait(1).to({scaleX:1,x:925.5},0).wait(1).to({scaleX:1,x:925.8},0).wait(1).to({scaleX:1,x:926},0).wait(1).to({scaleX:1,x:926.2},0).wait(1).to({x:926.4},0).wait(1).to({scaleX:1,x:926.5},0).wait(1).to({x:926.6},0).wait(2).to({regX:-307.5,x:617.5},0).wait(94));

	// 03_pontos
	this.instance_14 = new lib._03_pontos();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1906.3,216.6,1,1,0,0,0,20.3,19.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(320).to({_off:false},0).wait(1).to({regX:25,x:1881.5},0).wait(1).to({x:1850},0).wait(1).to({x:1816.1},0).wait(1).to({x:1779.2},0).wait(1).to({x:1738.7},0).wait(1).to({x:1693.7},0).wait(1).to({x:1643.4},0).wait(1).to({x:1587.8},0).wait(1).to({x:1529.2},0).wait(1).to({x:1473.8},0).wait(1).to({x:1427.3},0).wait(1).to({x:1390.7},0).wait(1).to({x:1362},0).wait(1).to({x:1339.2},0).wait(1).to({x:1320.7},0).wait(1).to({x:1305.4},0).wait(1).to({x:1292.5},0).wait(1).to({x:1281.4},0).wait(1).to({x:1271.9},0).wait(1).to({x:1263.6},0).wait(1).to({x:1256.2},0).wait(1).to({x:1249.7},0).wait(1).to({x:1243.9},0).wait(1).to({x:1238.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1230},0).wait(1).to({x:1226.3},0).wait(1).to({x:1222.9},0).wait(1).to({x:1219.8},0).wait(1).to({x:1217.1},0).wait(1).to({x:1214.6},0).wait(1).to({x:1212.3},0).wait(1).to({x:1210.3},0).wait(1).to({x:1208.5},0).wait(1).to({x:1206.8},0).wait(1).to({x:1205.3},0).wait(1).to({x:1204},0).wait(1).to({x:1202.8},0).wait(1).to({x:1201.8},0).wait(1).to({x:1200.9},0).wait(1).to({x:1200.1},0).wait(1).to({x:1199.4},0).wait(1).to({x:1198.8},0).wait(1).to({x:1198.3},0).wait(1).to({x:1197.9},0).wait(1).to({x:1197.5},0).wait(1).to({x:1197.3},0).wait(1).to({x:1197.1},0).wait(1).to({x:1197},0).wait(1).to({regX:20.3,x:1192.3},0).wait(110));

	// 03_time
	this.instance_15 = new lib._03_time();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1676.2,216.6,1,1,0,0,0,192.2,19.6);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(319).to({_off:false},0).wait(1).to({x:1646.7},0).wait(1).to({x:1615.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1544.4},0).wait(1).to({x:1503.9},0).wait(1).to({x:1458.9},0).wait(1).to({x:1408.6},0).wait(1).to({x:1353},0).wait(1).to({x:1294.4},0).wait(1).to({x:1239},0).wait(1).to({x:1192.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1127.2},0).wait(1).to({x:1104.4},0).wait(1).to({x:1085.9},0).wait(1).to({x:1070.6},0).wait(1).to({x:1057.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1037.1},0).wait(1).to({x:1028.8},0).wait(1).to({x:1021.4},0).wait(1).to({x:1014.9},0).wait(1).to({x:1009.1},0).wait(1).to({x:1004},0).wait(1).to({x:999.4},0).wait(1).to({x:995.2},0).wait(1).to({x:991.5},0).wait(1).to({x:988.1},0).wait(1).to({x:985},0).wait(1).to({x:982.3},0).wait(1).to({x:979.8},0).wait(1).to({x:977.5},0).wait(1).to({x:975.5},0).wait(1).to({x:973.7},0).wait(1).to({x:972},0).wait(1).to({x:970.5},0).wait(1).to({x:969.2},0).wait(1).to({x:968},0).wait(1).to({x:967},0).wait(1).to({x:966.1},0).wait(1).to({x:965.3},0).wait(1).to({x:964.6},0).wait(1).to({x:964},0).wait(1).to({x:963.5},0).wait(1).to({x:963.1},0).wait(1).to({x:962.7},0).wait(1).to({x:962.5},0).wait(1).to({x:962.3},0).wait(1).to({x:962.2},0).wait(112));

	// 03_escudo
	this.instance_16 = new lib._03_escudo();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1438.7,216.7,1,1,0,0,0,17.7,17.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(318).to({_off:false},0).wait(1).to({regX:17.5,regY:17.5,x:1409,y:216.5},0).wait(1).to({x:1377.5},0).wait(1).to({x:1343.6},0).wait(1).to({x:1306.7},0).wait(1).to({x:1266.2},0).wait(1).to({x:1221.2},0).wait(1).to({x:1170.9},0).wait(1).to({x:1115.3},0).wait(1).to({x:1056.7},0).wait(1).to({x:1001.3},0).wait(1).to({x:954.8},0).wait(1).to({x:918.2},0).wait(1).to({x:889.5},0).wait(1).to({x:866.7},0).wait(1).to({x:848.2},0).wait(1).to({x:832.9},0).wait(1).to({x:820},0).wait(1).to({x:808.9},0).wait(1).to({x:799.4},0).wait(1).to({x:791.1},0).wait(1).to({x:783.7},0).wait(1).to({x:777.2},0).wait(1).to({x:771.4},0).wait(1).to({x:766.3},0).wait(1).to({x:761.7},0).wait(1).to({x:757.5},0).wait(1).to({x:753.8},0).wait(1).to({x:750.4},0).wait(1).to({x:747.3},0).wait(1).to({x:744.6},0).wait(1).to({x:742.1},0).wait(1).to({x:739.8},0).wait(1).to({x:737.8},0).wait(1).to({x:736},0).wait(1).to({x:734.3},0).wait(1).to({x:732.8},0).wait(1).to({x:731.5},0).wait(1).to({x:730.3},0).wait(1).to({x:729.3},0).wait(1).to({x:728.4},0).wait(1).to({x:727.6},0).wait(1).to({x:726.9},0).wait(1).to({x:726.3},0).wait(1).to({x:725.8},0).wait(1).to({x:725.4},0).wait(1).to({x:725},0).wait(1).to({x:724.8},0).wait(1).to({x:724.6},0).wait(1).to({x:724.5},0).wait(1).to({regX:17.7,regY:17.7,x:724.7,y:216.7},0).wait(112));

	// 03_status
	this.instance_17 = new lib._03_status();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1382,217,1,1,0,0,0,5,5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(317).to({_off:false},0).wait(1).to({x:1352.5},0).wait(1).to({x:1321},0).wait(1).to({x:1287.1},0).wait(1).to({x:1250.2},0).wait(1).to({x:1209.7},0).wait(1).to({x:1164.7},0).wait(1).to({x:1114.4},0).wait(1).to({x:1058.8},0).wait(1).to({x:1000.2},0).wait(1).to({x:944.8},0).wait(1).to({x:898.3},0).wait(1).to({x:861.7},0).wait(1).to({x:833},0).wait(1).to({x:810.2},0).wait(1).to({x:791.7},0).wait(1).to({x:776.4},0).wait(1).to({x:763.5},0).wait(1).to({x:752.4},0).wait(1).to({x:742.9},0).wait(1).to({x:734.6},0).wait(1).to({x:727.2},0).wait(1).to({x:720.7},0).wait(1).to({x:714.9},0).wait(1).to({x:709.8},0).wait(1).to({x:705.2},0).wait(1).to({x:701},0).wait(1).to({x:697.3},0).wait(1).to({x:693.9},0).wait(1).to({x:690.8},0).wait(1).to({x:688.1},0).wait(1).to({x:685.6},0).wait(1).to({x:683.3},0).wait(1).to({x:681.3},0).wait(1).to({x:679.5},0).wait(1).to({x:677.8},0).wait(1).to({x:676.3},0).wait(1).to({x:675},0).wait(1).to({x:673.8},0).wait(1).to({x:672.8},0).wait(1).to({x:671.9},0).wait(1).to({x:671.1},0).wait(1).to({x:670.4},0).wait(1).to({x:669.8},0).wait(1).to({x:669.3},0).wait(1).to({x:668.9},0).wait(1).to({x:668.5},0).wait(1).to({x:668.3},0).wait(1).to({x:668.1},0).wait(1).to({x:668},0).wait(114));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_316 = new cjs.Graphics().p("AkSETIAAolIIlAAIAAIlg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(316).to({graphics:mask_2_graphics_316,x:629.1,y:216}).wait(164));

	// 03_posicao
	this.instance_18 = new lib._03_posicao();
	this.instance_18.parent = this;
	this.instance_18.setTransform(641.7,266.1,1,1,0,0,0,11.7,22.6);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(316).to({_off:false},0).wait(1).to({regX:0,x:630,y:263.9,alpha:0.041},0).wait(1).to({y:261.6,alpha:0.085},0).wait(1).to({y:259.1,alpha:0.133},0).wait(1).to({y:256.4,alpha:0.185},0).wait(1).to({y:253.4,alpha:0.241},0).wait(1).to({y:250.1,alpha:0.304},0).wait(1).to({y:246.4,alpha:0.375},0).wait(1).to({y:242.3,alpha:0.453},0).wait(1).to({y:238,alpha:0.535},0).wait(1).to({y:234,alpha:0.612},0).wait(1).to({y:230.5,alpha:0.677},0).wait(1).to({y:227.8,alpha:0.729},0).wait(1).to({y:225.7,alpha:0.769},0).wait(1).to({y:224.1,alpha:0.801},0).wait(1).to({y:222.7,alpha:0.827},0).wait(1).to({y:221.6,alpha:0.848},0).wait(1).to({y:220.6,alpha:0.866},0).wait(1).to({y:219.8,alpha:0.882},0).wait(1).to({y:219.1,alpha:0.895},0).wait(1).to({y:218.5,alpha:0.907},0).wait(1).to({y:218,alpha:0.917},0).wait(1).to({y:217.5,alpha:0.926},0).wait(1).to({y:217.1,alpha:0.934},0).wait(1).to({y:216.7,alpha:0.941},0).wait(1).to({y:216.3,alpha:0.948},0).wait(1).to({y:216,alpha:0.954},0).wait(1).to({y:215.8,alpha:0.959},0).wait(1).to({y:215.5,alpha:0.964},0).wait(1).to({y:215.3,alpha:0.968},0).wait(1).to({y:215.1,alpha:0.972},0).wait(1).to({y:214.9,alpha:0.975},0).wait(1).to({y:214.7,alpha:0.979},0).wait(1).to({y:214.6,alpha:0.981},0).wait(1).to({y:214.4,alpha:0.984},0).wait(1).to({y:214.3,alpha:0.986},0).wait(1).to({y:214.2,alpha:0.988},0).wait(1).to({y:214.1,alpha:0.99},0).wait(1).to({y:214,alpha:0.992},0).wait(1).to({alpha:0.993},0).wait(1).to({y:213.9,alpha:0.995},0).wait(1).to({y:213.8,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({y:213.7,alpha:0.998},0).wait(2).to({alpha:0.999},0).wait(1).to({y:213.6},0).wait(1).to({alpha:1},0).wait(3).to({regX:11.7,x:641.7},0).wait(114));

	// div
	this.instance_19 = new lib.div();
	this.instance_19.parent = this;
	this.instance_19.setTransform(617.5,245,0.001,1,0,0,0,-309.2,0);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(341).to({_off:false},0).wait(1).to({regX:0,scaleX:0.05,x:631.3},0).wait(1).to({scaleX:0.09,x:645.9},0).wait(1).to({scaleX:0.14,x:661.8},0).wait(1).to({scaleX:0.2,x:679.1},0).wait(1).to({scaleX:0.26,x:698.3},0).wait(1).to({scaleX:0.33,x:719.8},0).wait(1).to({scaleX:0.41,x:744},0).wait(1).to({scaleX:0.5,x:770.5},0).wait(1).to({scaleX:0.58,x:797},0).wait(1).to({scaleX:0.66,x:820.2},0).wait(1).to({scaleX:0.72,x:838.6},0).wait(1).to({scaleX:0.76,x:852.6},0).wait(1).to({scaleX:0.8,x:863.6},0).wait(1).to({scaleX:0.82,x:872.3},0).wait(1).to({scaleX:0.85,x:879.5},0).wait(1).to({scaleX:0.87,x:885.4},0).wait(1).to({scaleX:0.88,x:890.5},0).wait(1).to({scaleX:0.9,x:894.8},0).wait(1).to({scaleX:0.91,x:898.6},0).wait(1).to({scaleX:0.92,x:901.8},0).wait(1).to({scaleX:0.93,x:904.7},0).wait(1).to({scaleX:0.94,x:907.3},0).wait(1).to({scaleX:0.95,x:909.5},0).wait(1).to({scaleX:0.95,x:911.6},0).wait(1).to({scaleX:0.96,x:913.4},0).wait(1).to({scaleX:0.96,x:915},0).wait(1).to({scaleX:0.97,x:916.4},0).wait(1).to({scaleX:0.97,x:917.7},0).wait(1).to({scaleX:0.98,x:918.9},0).wait(1).to({scaleX:0.98,x:919.9},0).wait(1).to({scaleX:0.98,x:920.9},0).wait(1).to({scaleX:0.98,x:921.7},0).wait(1).to({scaleX:0.99,x:922.5},0).wait(1).to({scaleX:0.99,x:923.1},0).wait(1).to({scaleX:0.99,x:923.7},0).wait(1).to({scaleX:0.99,x:924.3},0).wait(1).to({scaleX:0.99,x:924.7},0).wait(1).to({scaleX:1,x:925.1},0).wait(1).to({scaleX:1,x:925.5},0).wait(1).to({scaleX:1,x:925.8},0).wait(1).to({scaleX:1,x:926},0).wait(1).to({scaleX:1,x:926.2},0).wait(1).to({x:926.4},0).wait(1).to({scaleX:1,x:926.5},0).wait(1).to({x:926.6},0).wait(2).to({regX:-307.5,x:617.5},0).wait(92));

	// 04_pontos
	this.instance_20 = new lib._04_pontos();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1906.3,274.6,1,1,0,0,0,20.3,19.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(323).to({_off:false},0).wait(1).to({regX:25,x:1881.5},0).wait(1).to({x:1850},0).wait(1).to({x:1816.1},0).wait(1).to({x:1779.2},0).wait(1).to({x:1738.7},0).wait(1).to({x:1693.7},0).wait(1).to({x:1643.4},0).wait(1).to({x:1587.8},0).wait(1).to({x:1529.2},0).wait(1).to({x:1473.8},0).wait(1).to({x:1427.3},0).wait(1).to({x:1390.7},0).wait(1).to({x:1362},0).wait(1).to({x:1339.2},0).wait(1).to({x:1320.7},0).wait(1).to({x:1305.4},0).wait(1).to({x:1292.5},0).wait(1).to({x:1281.4},0).wait(1).to({x:1271.9},0).wait(1).to({x:1263.6},0).wait(1).to({x:1256.2},0).wait(1).to({x:1249.7},0).wait(1).to({x:1243.9},0).wait(1).to({x:1238.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1230},0).wait(1).to({x:1226.3},0).wait(1).to({x:1222.9},0).wait(1).to({x:1219.8},0).wait(1).to({x:1217.1},0).wait(1).to({x:1214.6},0).wait(1).to({x:1212.3},0).wait(1).to({x:1210.3},0).wait(1).to({x:1208.5},0).wait(1).to({x:1206.8},0).wait(1).to({x:1205.3},0).wait(1).to({x:1204},0).wait(1).to({x:1202.8},0).wait(1).to({x:1201.8},0).wait(1).to({x:1200.9},0).wait(1).to({x:1200.1},0).wait(1).to({x:1199.4},0).wait(1).to({x:1198.8},0).wait(1).to({x:1198.3},0).wait(1).to({x:1197.9},0).wait(1).to({x:1197.5},0).wait(1).to({x:1197.3},0).wait(1).to({x:1197.1},0).wait(1).to({x:1197},0).wait(1).to({regX:20.3,x:1192.3},0).wait(107));

	// 04_time
	this.instance_21 = new lib._04_time();
	this.instance_21.parent = this;
	this.instance_21.setTransform(1676.2,274.6,1,1,0,0,0,192.2,19.6);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(322).to({_off:false},0).wait(1).to({x:1646.7},0).wait(1).to({x:1615.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1544.4},0).wait(1).to({x:1503.9},0).wait(1).to({x:1458.9},0).wait(1).to({x:1408.6},0).wait(1).to({x:1353},0).wait(1).to({x:1294.4},0).wait(1).to({x:1239},0).wait(1).to({x:1192.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1127.2},0).wait(1).to({x:1104.4},0).wait(1).to({x:1085.9},0).wait(1).to({x:1070.6},0).wait(1).to({x:1057.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1037.1},0).wait(1).to({x:1028.8},0).wait(1).to({x:1021.4},0).wait(1).to({x:1014.9},0).wait(1).to({x:1009.1},0).wait(1).to({x:1004},0).wait(1).to({x:999.4},0).wait(1).to({x:995.2},0).wait(1).to({x:991.5},0).wait(1).to({x:988.1},0).wait(1).to({x:985},0).wait(1).to({x:982.3},0).wait(1).to({x:979.8},0).wait(1).to({x:977.5},0).wait(1).to({x:975.5},0).wait(1).to({x:973.7},0).wait(1).to({x:972},0).wait(1).to({x:970.5},0).wait(1).to({x:969.2},0).wait(1).to({x:968},0).wait(1).to({x:967},0).wait(1).to({x:966.1},0).wait(1).to({x:965.3},0).wait(1).to({x:964.6},0).wait(1).to({x:964},0).wait(1).to({x:963.5},0).wait(1).to({x:963.1},0).wait(1).to({x:962.7},0).wait(1).to({x:962.5},0).wait(1).to({x:962.3},0).wait(1).to({x:962.2},0).wait(109));

	// 04_escudo
	this.instance_22 = new lib._04_escudo();
	this.instance_22.parent = this;
	this.instance_22.setTransform(1438.7,274.7,1,1,0,0,0,17.7,17.7);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(321).to({_off:false},0).wait(1).to({regX:17.5,regY:17.5,x:1409,y:274.5},0).wait(1).to({x:1377.5},0).wait(1).to({x:1343.6},0).wait(1).to({x:1306.7},0).wait(1).to({x:1266.2},0).wait(1).to({x:1221.2},0).wait(1).to({x:1170.9},0).wait(1).to({x:1115.3},0).wait(1).to({x:1056.7},0).wait(1).to({x:1001.3},0).wait(1).to({x:954.8},0).wait(1).to({x:918.2},0).wait(1).to({x:889.5},0).wait(1).to({x:866.7},0).wait(1).to({x:848.2},0).wait(1).to({x:832.9},0).wait(1).to({x:820},0).wait(1).to({x:808.9},0).wait(1).to({x:799.4},0).wait(1).to({x:791.1},0).wait(1).to({x:783.7},0).wait(1).to({x:777.2},0).wait(1).to({x:771.4},0).wait(1).to({x:766.3},0).wait(1).to({x:761.7},0).wait(1).to({x:757.5},0).wait(1).to({x:753.8},0).wait(1).to({x:750.4},0).wait(1).to({x:747.3},0).wait(1).to({x:744.6},0).wait(1).to({x:742.1},0).wait(1).to({x:739.8},0).wait(1).to({x:737.8},0).wait(1).to({x:736},0).wait(1).to({x:734.3},0).wait(1).to({x:732.8},0).wait(1).to({x:731.5},0).wait(1).to({x:730.3},0).wait(1).to({x:729.3},0).wait(1).to({x:728.4},0).wait(1).to({x:727.6},0).wait(1).to({x:726.9},0).wait(1).to({x:726.3},0).wait(1).to({x:725.8},0).wait(1).to({x:725.4},0).wait(1).to({x:725},0).wait(1).to({x:724.8},0).wait(1).to({x:724.6},0).wait(1).to({x:724.5},0).wait(1).to({regX:17.7,regY:17.7,x:724.7,y:274.7},0).wait(109));

	// 04_status
	this.instance_23 = new lib._04_status();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1382,275,1,1,0,0,0,5,5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(320).to({_off:false},0).wait(1).to({x:1352.5},0).wait(1).to({x:1321},0).wait(1).to({x:1287.1},0).wait(1).to({x:1250.2},0).wait(1).to({x:1209.7},0).wait(1).to({x:1164.7},0).wait(1).to({x:1114.4},0).wait(1).to({x:1058.8},0).wait(1).to({x:1000.2},0).wait(1).to({x:944.8},0).wait(1).to({x:898.3},0).wait(1).to({x:861.7},0).wait(1).to({x:833},0).wait(1).to({x:810.2},0).wait(1).to({x:791.7},0).wait(1).to({x:776.4},0).wait(1).to({x:763.5},0).wait(1).to({x:752.4},0).wait(1).to({x:742.9},0).wait(1).to({x:734.6},0).wait(1).to({x:727.2},0).wait(1).to({x:720.7},0).wait(1).to({x:714.9},0).wait(1).to({x:709.8},0).wait(1).to({x:705.2},0).wait(1).to({x:701},0).wait(1).to({x:697.3},0).wait(1).to({x:693.9},0).wait(1).to({x:690.8},0).wait(1).to({x:688.1},0).wait(1).to({x:685.6},0).wait(1).to({x:683.3},0).wait(1).to({x:681.3},0).wait(1).to({x:679.5},0).wait(1).to({x:677.8},0).wait(1).to({x:676.3},0).wait(1).to({x:675},0).wait(1).to({x:673.8},0).wait(1).to({x:672.8},0).wait(1).to({x:671.9},0).wait(1).to({x:671.1},0).wait(1).to({x:670.4},0).wait(1).to({x:669.8},0).wait(1).to({x:669.3},0).wait(1).to({x:668.9},0).wait(1).to({x:668.5},0).wait(1).to({x:668.3},0).wait(1).to({x:668.1},0).wait(1).to({x:668},0).wait(111));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_319 = new cjs.Graphics().p("AkgEhIAApBIJAAAIAAJBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(319).to({graphics:mask_3_graphics_319,x:627.4,y:274.1}).wait(161));

	// 04_posicao
	this.instance_24 = new lib._04_posicao();
	this.instance_24.parent = this;
	this.instance_24.setTransform(641.7,323.1,1,1,0,0,0,11.7,22.6);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(319).to({_off:false},0).wait(1).to({regX:0,x:630,y:320.9,alpha:0.041},0).wait(1).to({y:318.6,alpha:0.085},0).wait(1).to({y:316.1,alpha:0.133},0).wait(1).to({y:313.4,alpha:0.185},0).wait(1).to({y:310.4,alpha:0.241},0).wait(1).to({y:307.1,alpha:0.304},0).wait(1).to({y:303.4,alpha:0.375},0).wait(1).to({y:299.3,alpha:0.453},0).wait(1).to({y:295,alpha:0.535},0).wait(1).to({y:291,alpha:0.612},0).wait(1).to({y:287.5,alpha:0.677},0).wait(1).to({y:284.8,alpha:0.729},0).wait(1).to({y:282.7,alpha:0.769},0).wait(1).to({y:281.1,alpha:0.801},0).wait(1).to({y:279.7,alpha:0.827},0).wait(1).to({y:278.6,alpha:0.848},0).wait(1).to({y:277.6,alpha:0.866},0).wait(1).to({y:276.8,alpha:0.882},0).wait(1).to({y:276.1,alpha:0.895},0).wait(1).to({y:275.5,alpha:0.907},0).wait(1).to({y:275,alpha:0.917},0).wait(1).to({y:274.5,alpha:0.926},0).wait(1).to({y:274.1,alpha:0.934},0).wait(1).to({y:273.7,alpha:0.941},0).wait(1).to({y:273.3,alpha:0.948},0).wait(1).to({y:273,alpha:0.954},0).wait(1).to({y:272.8,alpha:0.959},0).wait(1).to({y:272.5,alpha:0.964},0).wait(1).to({y:272.3,alpha:0.968},0).wait(1).to({y:272.1,alpha:0.972},0).wait(1).to({y:271.9,alpha:0.975},0).wait(1).to({y:271.7,alpha:0.979},0).wait(1).to({y:271.6,alpha:0.981},0).wait(1).to({y:271.4,alpha:0.984},0).wait(1).to({y:271.3,alpha:0.986},0).wait(1).to({y:271.2,alpha:0.988},0).wait(1).to({y:271.1,alpha:0.99},0).wait(1).to({y:271,alpha:0.992},0).wait(1).to({alpha:0.993},0).wait(1).to({y:270.9,alpha:0.995},0).wait(1).to({y:270.8,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({y:270.7,alpha:0.998},0).wait(2).to({alpha:0.999},0).wait(1).to({y:270.6},0).wait(1).to({alpha:1},0).wait(3).to({regX:11.7,x:641.7},0).wait(111));

	// div
	this.instance_25 = new lib.div();
	this.instance_25.parent = this;
	this.instance_25.setTransform(617.5,303,0.001,1,0,0,0,-309.2,0);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(344).to({_off:false},0).wait(1).to({regX:0,scaleX:0.05,x:631.6},0).wait(1).to({scaleX:0.09,x:646.6},0).wait(1).to({scaleX:0.15,x:662.8},0).wait(1).to({scaleX:0.2,x:680.7},0).wait(1).to({scaleX:0.27,x:700.5},0).wait(1).to({scaleX:0.34,x:722.8},0).wait(1).to({scaleX:0.42,x:747.9},0).wait(1).to({scaleX:0.51,x:775.2},0).wait(1).to({scaleX:0.6,x:801.9},0).wait(1).to({scaleX:0.67,x:824.6},0).wait(1).to({scaleX:0.73,x:842.3},0).wait(1).to({scaleX:0.77,x:855.7},0).wait(1).to({scaleX:0.81,x:866.2},0).wait(1).to({scaleX:0.83,x:874.7},0).wait(1).to({scaleX:0.85,x:881.5},0).wait(1).to({scaleX:0.87,x:887.3},0).wait(1).to({scaleX:0.89,x:892.2},0).wait(1).to({scaleX:0.9,x:896.3},0).wait(1).to({scaleX:0.91,x:900},0).wait(1).to({scaleX:0.92,x:903.1},0).wait(1).to({scaleX:0.93,x:905.9},0).wait(1).to({scaleX:0.94,x:908.4},0).wait(1).to({scaleX:0.95,x:910.6},0).wait(1).to({scaleX:0.95,x:912.5},0).wait(1).to({scaleX:0.96,x:914.3},0).wait(1).to({scaleX:0.97,x:915.8},0).wait(1).to({scaleX:0.97,x:917.2},0).wait(1).to({scaleX:0.97,x:918.4},0).wait(1).to({scaleX:0.98,x:919.6},0).wait(1).to({scaleX:0.98,x:920.6},0).wait(1).to({scaleX:0.98,x:921.5},0).wait(1).to({scaleX:0.99,x:922.3},0).wait(1).to({scaleX:0.99,x:923},0).wait(1).to({scaleX:0.99,x:923.6},0).wait(1).to({scaleX:0.99,x:924.1},0).wait(1).to({scaleX:0.99,x:924.6},0).wait(1).to({scaleX:1,x:925.1},0).wait(1).to({scaleX:1,x:925.4},0).wait(1).to({scaleX:1,x:925.7},0).wait(1).to({scaleX:1,x:926},0).wait(1).to({scaleX:1,x:926.2},0).wait(1).to({x:926.4},0).wait(1).to({x:926.5},0).wait(1).to({scaleX:1,x:926.6},0).wait(2).to({regX:-307.5,x:617.5},0).wait(90));

	// 05_pontos
	this.instance_26 = new lib._05_pontos();
	this.instance_26.parent = this;
	this.instance_26.setTransform(1906.3,331.6,1,1,0,0,0,20.3,19.6);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(326).to({_off:false},0).wait(1).to({regX:25,x:1881.5},0).wait(1).to({x:1850},0).wait(1).to({x:1816.1},0).wait(1).to({x:1779.2},0).wait(1).to({x:1738.7},0).wait(1).to({x:1693.7},0).wait(1).to({x:1643.4},0).wait(1).to({x:1587.8},0).wait(1).to({x:1529.2},0).wait(1).to({x:1473.8},0).wait(1).to({x:1427.3},0).wait(1).to({x:1390.7},0).wait(1).to({x:1362},0).wait(1).to({x:1339.2},0).wait(1).to({x:1320.7},0).wait(1).to({x:1305.4},0).wait(1).to({x:1292.5},0).wait(1).to({x:1281.4},0).wait(1).to({x:1271.9},0).wait(1).to({x:1263.6},0).wait(1).to({x:1256.2},0).wait(1).to({x:1249.7},0).wait(1).to({x:1243.9},0).wait(1).to({x:1238.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1230},0).wait(1).to({x:1226.3},0).wait(1).to({x:1222.9},0).wait(1).to({x:1219.8},0).wait(1).to({x:1217.1},0).wait(1).to({x:1214.6},0).wait(1).to({x:1212.3},0).wait(1).to({x:1210.3},0).wait(1).to({x:1208.5},0).wait(1).to({x:1206.8},0).wait(1).to({x:1205.3},0).wait(1).to({x:1204},0).wait(1).to({x:1202.8},0).wait(1).to({x:1201.8},0).wait(1).to({x:1200.9},0).wait(1).to({x:1200.1},0).wait(1).to({x:1199.4},0).wait(1).to({x:1198.8},0).wait(1).to({x:1198.3},0).wait(1).to({x:1197.9},0).wait(1).to({x:1197.5},0).wait(1).to({x:1197.3},0).wait(1).to({x:1197.1},0).wait(1).to({x:1197},0).wait(1).to({regX:20.3,x:1192.3},0).wait(104));

	// 05_time
	this.instance_27 = new lib._05_time();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1676.2,331.6,1,1,0,0,0,192.2,19.6);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(325).to({_off:false},0).wait(1).to({x:1646.7},0).wait(1).to({x:1615.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1544.4},0).wait(1).to({x:1503.9},0).wait(1).to({x:1458.9},0).wait(1).to({x:1408.6},0).wait(1).to({x:1353},0).wait(1).to({x:1294.4},0).wait(1).to({x:1239},0).wait(1).to({x:1192.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1127.2},0).wait(1).to({x:1104.4},0).wait(1).to({x:1085.9},0).wait(1).to({x:1070.6},0).wait(1).to({x:1057.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1037.1},0).wait(1).to({x:1028.8},0).wait(1).to({x:1021.4},0).wait(1).to({x:1014.9},0).wait(1).to({x:1009.1},0).wait(1).to({x:1004},0).wait(1).to({x:999.4},0).wait(1).to({x:995.2},0).wait(1).to({x:991.5},0).wait(1).to({x:988.1},0).wait(1).to({x:985},0).wait(1).to({x:982.3},0).wait(1).to({x:979.8},0).wait(1).to({x:977.5},0).wait(1).to({x:975.5},0).wait(1).to({x:973.7},0).wait(1).to({x:972},0).wait(1).to({x:970.5},0).wait(1).to({x:969.2},0).wait(1).to({x:968},0).wait(1).to({x:967},0).wait(1).to({x:966.1},0).wait(1).to({x:965.3},0).wait(1).to({x:964.6},0).wait(1).to({x:964},0).wait(1).to({x:963.5},0).wait(1).to({x:963.1},0).wait(1).to({x:962.7},0).wait(1).to({x:962.5},0).wait(1).to({x:962.3},0).wait(1).to({x:962.2},0).wait(106));

	// 05_escudo
	this.instance_28 = new lib._05_escudo();
	this.instance_28.parent = this;
	this.instance_28.setTransform(1438.7,331.7,1,1,0,0,0,17.7,17.7);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(324).to({_off:false},0).wait(1).to({regX:17.5,regY:17.5,x:1409,y:331.5},0).wait(1).to({x:1377.5},0).wait(1).to({x:1343.6},0).wait(1).to({x:1306.7},0).wait(1).to({x:1266.2},0).wait(1).to({x:1221.2},0).wait(1).to({x:1170.9},0).wait(1).to({x:1115.3},0).wait(1).to({x:1056.7},0).wait(1).to({x:1001.3},0).wait(1).to({x:954.8},0).wait(1).to({x:918.2},0).wait(1).to({x:889.5},0).wait(1).to({x:866.7},0).wait(1).to({x:848.2},0).wait(1).to({x:832.9},0).wait(1).to({x:820},0).wait(1).to({x:808.9},0).wait(1).to({x:799.4},0).wait(1).to({x:791.1},0).wait(1).to({x:783.7},0).wait(1).to({x:777.2},0).wait(1).to({x:771.4},0).wait(1).to({x:766.3},0).wait(1).to({x:761.7},0).wait(1).to({x:757.5},0).wait(1).to({x:753.8},0).wait(1).to({x:750.4},0).wait(1).to({x:747.3},0).wait(1).to({x:744.6},0).wait(1).to({x:742.1},0).wait(1).to({x:739.8},0).wait(1).to({x:737.8},0).wait(1).to({x:736},0).wait(1).to({x:734.3},0).wait(1).to({x:732.8},0).wait(1).to({x:731.5},0).wait(1).to({x:730.3},0).wait(1).to({x:729.3},0).wait(1).to({x:728.4},0).wait(1).to({x:727.6},0).wait(1).to({x:726.9},0).wait(1).to({x:726.3},0).wait(1).to({x:725.8},0).wait(1).to({x:725.4},0).wait(1).to({x:725},0).wait(1).to({x:724.8},0).wait(1).to({x:724.6},0).wait(1).to({x:724.5},0).wait(1).to({regX:17.7,regY:17.7,x:724.7,y:331.7},0).wait(106));

	// 05_status
	this.instance_29 = new lib._05_status();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1382,332,1,1,0,0,0,5,5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(323).to({_off:false},0).wait(1).to({x:1352.5},0).wait(1).to({x:1321},0).wait(1).to({x:1287.1},0).wait(1).to({x:1250.2},0).wait(1).to({x:1209.7},0).wait(1).to({x:1164.7},0).wait(1).to({x:1114.4},0).wait(1).to({x:1058.8},0).wait(1).to({x:1000.2},0).wait(1).to({x:944.8},0).wait(1).to({x:898.3},0).wait(1).to({x:861.7},0).wait(1).to({x:833},0).wait(1).to({x:810.2},0).wait(1).to({x:791.7},0).wait(1).to({x:776.4},0).wait(1).to({x:763.5},0).wait(1).to({x:752.4},0).wait(1).to({x:742.9},0).wait(1).to({x:734.6},0).wait(1).to({x:727.2},0).wait(1).to({x:720.7},0).wait(1).to({x:714.9},0).wait(1).to({x:709.8},0).wait(1).to({x:705.2},0).wait(1).to({x:701},0).wait(1).to({x:697.3},0).wait(1).to({x:693.9},0).wait(1).to({x:690.8},0).wait(1).to({x:688.1},0).wait(1).to({x:685.6},0).wait(1).to({x:683.3},0).wait(1).to({x:681.3},0).wait(1).to({x:679.5},0).wait(1).to({x:677.8},0).wait(1).to({x:676.3},0).wait(1).to({x:675},0).wait(1).to({x:673.8},0).wait(1).to({x:672.8},0).wait(1).to({x:671.9},0).wait(1).to({x:671.1},0).wait(1).to({x:670.4},0).wait(1).to({x:669.8},0).wait(1).to({x:669.3},0).wait(1).to({x:668.9},0).wait(1).to({x:668.5},0).wait(1).to({x:668.3},0).wait(1).to({x:668.1},0).wait(1).to({x:668},0).wait(108));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_322 = new cjs.Graphics().p("AkYEZIAAoxIIxAAIAAIxg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(322).to({graphics:mask_4_graphics_322,x:627.5,y:331}).wait(158));

	// 05_posicao
	this.instance_30 = new lib._05_posicao();
	this.instance_30.parent = this;
	this.instance_30.setTransform(641.7,381.1,1,1,0,0,0,11.7,22.6);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	var maskedShapeInstanceList = [this.instance_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(322).to({_off:false},0).wait(1).to({regX:0,x:630,y:378.9,alpha:0.042},0).wait(1).to({y:376.5,alpha:0.087},0).wait(1).to({y:374,alpha:0.136},0).wait(1).to({y:371.2,alpha:0.189},0).wait(1).to({y:368.1,alpha:0.247},0).wait(1).to({y:364.7,alpha:0.313},0).wait(1).to({y:360.9,alpha:0.385},0).wait(1).to({y:356.6,alpha:0.466},0).wait(1).to({y:352.2,alpha:0.55},0).wait(1).to({y:348.2,alpha:0.627},0).wait(1).to({y:344.9,alpha:0.69},0).wait(1).to({y:342.3,alpha:0.74},0).wait(1).to({y:340.3,alpha:0.778},0).wait(1).to({y:338.6,alpha:0.809},0).wait(1).to({y:337.3,alpha:0.834},0).wait(1).to({y:336.2,alpha:0.854},0).wait(1).to({y:335.3,alpha:0.872},0).wait(1).to({y:334.5,alpha:0.887},0).wait(1).to({y:333.9,alpha:0.9},0).wait(1).to({y:333.3,alpha:0.911},0).wait(1).to({y:332.7,alpha:0.921},0).wait(1).to({y:332.3,alpha:0.93},0).wait(1).to({y:331.9,alpha:0.938},0).wait(1).to({y:331.5,alpha:0.945},0).wait(1).to({y:331.2,alpha:0.951},0).wait(1).to({y:330.9,alpha:0.957},0).wait(1).to({y:330.6,alpha:0.962},0).wait(1).to({y:330.4,alpha:0.966},0).wait(1).to({y:330.2,alpha:0.97},0).wait(1).to({y:330,alpha:0.974},0).wait(1).to({y:329.8,alpha:0.977},0).wait(1).to({y:329.6,alpha:0.98},0).wait(1).to({y:329.5,alpha:0.983},0).wait(1).to({y:329.4,alpha:0.986},0).wait(1).to({y:329.2,alpha:0.988},0).wait(1).to({y:329.1,alpha:0.99},0).wait(1).to({y:329,alpha:0.991},0).wait(1).to({alpha:0.993},0).wait(1).to({y:328.9,alpha:0.994},0).wait(1).to({y:328.8,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({y:328.7},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({y:328.6},0).wait(1).to({alpha:1},0).wait(3).to({regX:11.7,x:641.7},0).wait(109));

	// div
	this.instance_31 = new lib.div();
	this.instance_31.parent = this;
	this.instance_31.setTransform(617.5,361,0.001,1,0,0,0,-309.2,0);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(347).to({_off:false},0).wait(1).to({regX:0,scaleX:0.05,x:632},0).wait(1).to({scaleX:0.1,x:647.3},0).wait(1).to({scaleX:0.15,x:664},0).wait(1).to({scaleX:0.21,x:682.4},0).wait(1).to({scaleX:0.28,x:702.9},0).wait(1).to({scaleX:0.35,x:726},0).wait(1).to({scaleX:0.44,x:752.1},0).wait(1).to({scaleX:0.53,x:780.1},0).wait(1).to({scaleX:0.61,x:806.9},0).wait(1).to({scaleX:0.68,x:829},0).wait(1).to({scaleX:0.74,x:845.9},0).wait(1).to({scaleX:0.78,x:858.8},0).wait(1).to({scaleX:0.81,x:868.9},0).wait(1).to({scaleX:0.84,x:876.9},0).wait(1).to({scaleX:0.86,x:883.6},0).wait(1).to({scaleX:0.88,x:889.1},0).wait(1).to({scaleX:0.89,x:893.8},0).wait(1).to({scaleX:0.91,x:897.9},0).wait(1).to({scaleX:0.92,x:901.4},0).wait(1).to({scaleX:0.93,x:904.4},0).wait(1).to({scaleX:0.94,x:907.1},0).wait(1).to({scaleX:0.94,x:909.5},0).wait(1).to({scaleX:0.95,x:911.6},0).wait(1).to({scaleX:0.96,x:913.5},0).wait(1).to({scaleX:0.96,x:915.1},0).wait(1).to({scaleX:0.97,x:916.6},0).wait(1).to({scaleX:0.97,x:918},0).wait(1).to({scaleX:0.98,x:919.2},0).wait(1).to({scaleX:0.98,x:920.2},0).wait(1).to({scaleX:0.98,x:921.2},0).wait(1).to({scaleX:0.99,x:922},0).wait(1).to({scaleX:0.99,x:922.8},0).wait(1).to({scaleX:0.99,x:923.4},0).wait(1).to({scaleX:0.99,x:924},0).wait(1).to({scaleX:0.99,x:924.5},0).wait(1).to({scaleX:1,x:925},0).wait(1).to({scaleX:1,x:925.4},0).wait(1).to({scaleX:1,x:925.7},0).wait(1).to({scaleX:1,x:926},0).wait(1).to({x:926.2},0).wait(1).to({scaleX:1,x:926.4},0).wait(1).to({x:926.5},0).wait(1).to({scaleX:1,x:926.6},0).wait(2).to({regX:-307.5,x:617.5},0).wait(88));

	// 06_pontos
	this.instance_32 = new lib._06_pontos();
	this.instance_32.parent = this;
	this.instance_32.setTransform(1906.3,390.6,1,1,0,0,0,20.3,19.6);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(329).to({_off:false},0).wait(1).to({regX:25,x:1881.5},0).wait(1).to({x:1850},0).wait(1).to({x:1816.1},0).wait(1).to({x:1779.2},0).wait(1).to({x:1738.7},0).wait(1).to({x:1693.7},0).wait(1).to({x:1643.4},0).wait(1).to({x:1587.8},0).wait(1).to({x:1529.2},0).wait(1).to({x:1473.8},0).wait(1).to({x:1427.3},0).wait(1).to({x:1390.7},0).wait(1).to({x:1362},0).wait(1).to({x:1339.2},0).wait(1).to({x:1320.7},0).wait(1).to({x:1305.4},0).wait(1).to({x:1292.5},0).wait(1).to({x:1281.4},0).wait(1).to({x:1271.9},0).wait(1).to({x:1263.6},0).wait(1).to({x:1256.2},0).wait(1).to({x:1249.7},0).wait(1).to({x:1243.9},0).wait(1).to({x:1238.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1230},0).wait(1).to({x:1226.3},0).wait(1).to({x:1222.9},0).wait(1).to({x:1219.8},0).wait(1).to({x:1217.1},0).wait(1).to({x:1214.6},0).wait(1).to({x:1212.3},0).wait(1).to({x:1210.3},0).wait(1).to({x:1208.5},0).wait(1).to({x:1206.8},0).wait(1).to({x:1205.3},0).wait(1).to({x:1204},0).wait(1).to({x:1202.8},0).wait(1).to({x:1201.8},0).wait(1).to({x:1200.9},0).wait(1).to({x:1200.1},0).wait(1).to({x:1199.4},0).wait(1).to({x:1198.8},0).wait(1).to({x:1198.3},0).wait(1).to({x:1197.9},0).wait(1).to({x:1197.5},0).wait(1).to({x:1197.3},0).wait(1).to({x:1197.1},0).wait(1).to({x:1197},0).wait(1).to({regX:20.3,x:1192.3},0).wait(101));

	// 06_time
	this.instance_33 = new lib._06_time();
	this.instance_33.parent = this;
	this.instance_33.setTransform(1676.2,390.6,1,1,0,0,0,192.2,19.6);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(328).to({_off:false},0).wait(1).to({x:1646.7},0).wait(1).to({x:1615.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1544.4},0).wait(1).to({x:1503.9},0).wait(1).to({x:1458.9},0).wait(1).to({x:1408.6},0).wait(1).to({x:1353},0).wait(1).to({x:1294.4},0).wait(1).to({x:1239},0).wait(1).to({x:1192.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1127.2},0).wait(1).to({x:1104.4},0).wait(1).to({x:1085.9},0).wait(1).to({x:1070.6},0).wait(1).to({x:1057.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1037.1},0).wait(1).to({x:1028.8},0).wait(1).to({x:1021.4},0).wait(1).to({x:1014.9},0).wait(1).to({x:1009.1},0).wait(1).to({x:1004},0).wait(1).to({x:999.4},0).wait(1).to({x:995.2},0).wait(1).to({x:991.5},0).wait(1).to({x:988.1},0).wait(1).to({x:985},0).wait(1).to({x:982.3},0).wait(1).to({x:979.8},0).wait(1).to({x:977.5},0).wait(1).to({x:975.5},0).wait(1).to({x:973.7},0).wait(1).to({x:972},0).wait(1).to({x:970.5},0).wait(1).to({x:969.2},0).wait(1).to({x:968},0).wait(1).to({x:967},0).wait(1).to({x:966.1},0).wait(1).to({x:965.3},0).wait(1).to({x:964.6},0).wait(1).to({x:964},0).wait(1).to({x:963.5},0).wait(1).to({x:963.1},0).wait(1).to({x:962.7},0).wait(1).to({x:962.5},0).wait(1).to({x:962.3},0).wait(1).to({x:962.2},0).wait(103));

	// 06_escudo
	this.instance_34 = new lib._06_escudo();
	this.instance_34.parent = this;
	this.instance_34.setTransform(1438.7,391.7,1,1,0,0,0,17.7,17.7);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(327).to({_off:false},0).wait(1).to({regX:17.5,regY:17.5,x:1409,y:391.5},0).wait(1).to({x:1377.5},0).wait(1).to({x:1343.6},0).wait(1).to({x:1306.7},0).wait(1).to({x:1266.2},0).wait(1).to({x:1221.2},0).wait(1).to({x:1170.9},0).wait(1).to({x:1115.3},0).wait(1).to({x:1056.7},0).wait(1).to({x:1001.3},0).wait(1).to({x:954.8},0).wait(1).to({x:918.2},0).wait(1).to({x:889.5},0).wait(1).to({x:866.7},0).wait(1).to({x:848.2},0).wait(1).to({x:832.9},0).wait(1).to({x:820},0).wait(1).to({x:808.9},0).wait(1).to({x:799.4},0).wait(1).to({x:791.1},0).wait(1).to({x:783.7},0).wait(1).to({x:777.2},0).wait(1).to({x:771.4},0).wait(1).to({x:766.3},0).wait(1).to({x:761.7},0).wait(1).to({x:757.5},0).wait(1).to({x:753.8},0).wait(1).to({x:750.4},0).wait(1).to({x:747.3},0).wait(1).to({x:744.6},0).wait(1).to({x:742.1},0).wait(1).to({x:739.8},0).wait(1).to({x:737.8},0).wait(1).to({x:736},0).wait(1).to({x:734.3},0).wait(1).to({x:732.8},0).wait(1).to({x:731.5},0).wait(1).to({x:730.3},0).wait(1).to({x:729.3},0).wait(1).to({x:728.4},0).wait(1).to({x:727.6},0).wait(1).to({x:726.9},0).wait(1).to({x:726.3},0).wait(1).to({x:725.8},0).wait(1).to({x:725.4},0).wait(1).to({x:725},0).wait(1).to({x:724.8},0).wait(1).to({x:724.6},0).wait(1).to({x:724.5},0).wait(1).to({regX:17.7,regY:17.7,x:724.7,y:391.7},0).wait(103));

	// 06_status
	this.instance_35 = new lib._06_status();
	this.instance_35.parent = this;
	this.instance_35.setTransform(1382,391,1,1,0,0,0,5,5);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(326).to({_off:false},0).wait(1).to({x:1352.5},0).wait(1).to({x:1321},0).wait(1).to({x:1287.1},0).wait(1).to({x:1250.2},0).wait(1).to({x:1209.7},0).wait(1).to({x:1164.7},0).wait(1).to({x:1114.4},0).wait(1).to({x:1058.8},0).wait(1).to({x:1000.2},0).wait(1).to({x:944.8},0).wait(1).to({x:898.3},0).wait(1).to({x:861.7},0).wait(1).to({x:833},0).wait(1).to({x:810.2},0).wait(1).to({x:791.7},0).wait(1).to({x:776.4},0).wait(1).to({x:763.5},0).wait(1).to({x:752.4},0).wait(1).to({x:742.9},0).wait(1).to({x:734.6},0).wait(1).to({x:727.2},0).wait(1).to({x:720.7},0).wait(1).to({x:714.9},0).wait(1).to({x:709.8},0).wait(1).to({x:705.2},0).wait(1).to({x:701},0).wait(1).to({x:697.3},0).wait(1).to({x:693.9},0).wait(1).to({x:690.8},0).wait(1).to({x:688.1},0).wait(1).to({x:685.6},0).wait(1).to({x:683.3},0).wait(1).to({x:681.3},0).wait(1).to({x:679.5},0).wait(1).to({x:677.8},0).wait(1).to({x:676.3},0).wait(1).to({x:675},0).wait(1).to({x:673.8},0).wait(1).to({x:672.8},0).wait(1).to({x:671.9},0).wait(1).to({x:671.1},0).wait(1).to({x:670.4},0).wait(1).to({x:669.8},0).wait(1).to({x:669.3},0).wait(1).to({x:668.9},0).wait(1).to({x:668.5},0).wait(1).to({x:668.3},0).wait(1).to({x:668.1},0).wait(1).to({x:668},0).wait(105));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_325 = new cjs.Graphics().p("AkiEjIAApFIJFAAIAAJFg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(325).to({graphics:mask_5_graphics_325,x:629.6,y:391.3}).wait(155));

	// 06_posicao
	this.instance_36 = new lib._06_posicao();
	this.instance_36.parent = this;
	this.instance_36.setTransform(641.7,443.1,1,1,0,0,0,11.7,22.6);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(325).to({_off:false},0).wait(1).to({regX:0,x:630,y:440.9,alpha:0.041},0).wait(1).to({y:438.6,alpha:0.085},0).wait(1).to({y:436.1,alpha:0.133},0).wait(1).to({y:433.4,alpha:0.185},0).wait(1).to({y:430.4,alpha:0.241},0).wait(1).to({y:427.1,alpha:0.304},0).wait(1).to({y:423.4,alpha:0.375},0).wait(1).to({y:419.3,alpha:0.453},0).wait(1).to({y:415,alpha:0.535},0).wait(1).to({y:411,alpha:0.612},0).wait(1).to({y:407.5,alpha:0.677},0).wait(1).to({y:404.8,alpha:0.729},0).wait(1).to({y:402.7,alpha:0.769},0).wait(1).to({y:401.1,alpha:0.801},0).wait(1).to({y:399.7,alpha:0.827},0).wait(1).to({y:398.6,alpha:0.848},0).wait(1).to({y:397.6,alpha:0.866},0).wait(1).to({y:396.8,alpha:0.882},0).wait(1).to({y:396.1,alpha:0.895},0).wait(1).to({y:395.5,alpha:0.907},0).wait(1).to({y:395,alpha:0.917},0).wait(1).to({y:394.5,alpha:0.926},0).wait(1).to({y:394.1,alpha:0.934},0).wait(1).to({y:393.7,alpha:0.941},0).wait(1).to({y:393.3,alpha:0.948},0).wait(1).to({y:393,alpha:0.954},0).wait(1).to({y:392.8,alpha:0.959},0).wait(1).to({y:392.5,alpha:0.964},0).wait(1).to({y:392.3,alpha:0.968},0).wait(1).to({y:392.1,alpha:0.972},0).wait(1).to({y:391.9,alpha:0.975},0).wait(1).to({y:391.7,alpha:0.979},0).wait(1).to({y:391.6,alpha:0.981},0).wait(1).to({y:391.4,alpha:0.984},0).wait(1).to({y:391.3,alpha:0.986},0).wait(1).to({y:391.2,alpha:0.988},0).wait(1).to({y:391.1,alpha:0.99},0).wait(1).to({y:391,alpha:0.992},0).wait(1).to({alpha:0.993},0).wait(1).to({y:390.9,alpha:0.995},0).wait(1).to({y:390.8,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({y:390.7,alpha:0.998},0).wait(2).to({alpha:0.999},0).wait(1).to({y:390.6},0).wait(1).to({alpha:1},0).wait(3).to({regX:11.7,x:641.7},0).wait(105));

	// div
	this.instance_37 = new lib.div();
	this.instance_37.parent = this;
	this.instance_37.setTransform(617.5,420,0.001,1,0,0,0,-309.2,0);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(350).to({_off:false},0).wait(1).to({regX:0,scaleX:0.05,x:632.3},0).wait(1).to({scaleX:0.1,x:648},0).wait(1).to({scaleX:0.15,x:665.2},0).wait(1).to({scaleX:0.22,x:684.1},0).wait(1).to({scaleX:0.28,x:705.3},0).wait(1).to({scaleX:0.36,x:729.4},0).wait(1).to({scaleX:0.45,x:756.4},0).wait(1).to({scaleX:0.54,x:785.2},0).wait(1).to({scaleX:0.63,x:811.8},0).wait(1).to({scaleX:0.7,x:833.2},0).wait(1).to({scaleX:0.75,x:849.4},0).wait(1).to({scaleX:0.79,x:861.8},0).wait(1).to({scaleX:0.82,x:871.4},0).wait(1).to({scaleX:0.85,x:879.2},0).wait(1).to({scaleX:0.87,x:885.6},0).wait(1).to({scaleX:0.88,x:890.9},0).wait(1).to({scaleX:0.9,x:895.4},0).wait(1).to({scaleX:0.91,x:899.3},0).wait(1).to({scaleX:0.92,x:902.7},0).wait(1).to({scaleX:0.93,x:905.7},0).wait(1).to({scaleX:0.94,x:908.3},0).wait(1).to({scaleX:0.95,x:910.6},0).wait(1).to({scaleX:0.96,x:912.6},0).wait(1).to({scaleX:0.96,x:914.4},0).wait(1).to({scaleX:0.97,x:916},0).wait(1).to({scaleX:0.97,x:917.4},0).wait(1).to({scaleX:0.97,x:918.7},0).wait(1).to({scaleX:0.98,x:919.8},0).wait(1).to({scaleX:0.98,x:920.9},0).wait(1).to({scaleX:0.98,x:921.8},0).wait(1).to({scaleX:0.99,x:922.6},0).wait(1).to({scaleX:0.99,x:923.3},0).wait(1).to({scaleX:0.99,x:923.9},0).wait(1).to({scaleX:0.99,x:924.4},0).wait(1).to({scaleX:0.99,x:924.9},0).wait(1).to({scaleX:1,x:925.3},0).wait(1).to({scaleX:1,x:925.6},0).wait(1).to({scaleX:1,x:925.9},0).wait(1).to({x:926.2},0).wait(1).to({scaleX:1,x:926.3},0).wait(1).to({x:926.5},0).wait(1).to({scaleX:1,x:926.6},0).wait(2).to({regX:-307.5,x:617.5},0).wait(86));

	// 07_pontos
	this.instance_38 = new lib._07_pontos();
	this.instance_38.parent = this;
	this.instance_38.setTransform(1906.3,449.6,1,1,0,0,0,20.3,19.6);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(332).to({_off:false},0).wait(1).to({regX:25,x:1881.5},0).wait(1).to({x:1850},0).wait(1).to({x:1816.1},0).wait(1).to({x:1779.2},0).wait(1).to({x:1738.7},0).wait(1).to({x:1693.7},0).wait(1).to({x:1643.4},0).wait(1).to({x:1587.8},0).wait(1).to({x:1529.2},0).wait(1).to({x:1473.8},0).wait(1).to({x:1427.3},0).wait(1).to({x:1390.7},0).wait(1).to({x:1362},0).wait(1).to({x:1339.2},0).wait(1).to({x:1320.7},0).wait(1).to({x:1305.4},0).wait(1).to({x:1292.5},0).wait(1).to({x:1281.4},0).wait(1).to({x:1271.9},0).wait(1).to({x:1263.6},0).wait(1).to({x:1256.2},0).wait(1).to({x:1249.7},0).wait(1).to({x:1243.9},0).wait(1).to({x:1238.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1230},0).wait(1).to({x:1226.3},0).wait(1).to({x:1222.9},0).wait(1).to({x:1219.8},0).wait(1).to({x:1217.1},0).wait(1).to({x:1214.6},0).wait(1).to({x:1212.3},0).wait(1).to({x:1210.3},0).wait(1).to({x:1208.5},0).wait(1).to({x:1206.8},0).wait(1).to({x:1205.3},0).wait(1).to({x:1204},0).wait(1).to({x:1202.8},0).wait(1).to({x:1201.8},0).wait(1).to({x:1200.9},0).wait(1).to({x:1200.1},0).wait(1).to({x:1199.4},0).wait(1).to({x:1198.8},0).wait(1).to({x:1198.3},0).wait(1).to({x:1197.9},0).wait(1).to({x:1197.5},0).wait(1).to({x:1197.3},0).wait(1).to({x:1197.1},0).wait(1).to({x:1197},0).wait(1).to({regX:20.3,x:1192.3},0).wait(98));

	// 07_time
	this.instance_39 = new lib._07_time();
	this.instance_39.parent = this;
	this.instance_39.setTransform(1676.2,449.6,1,1,0,0,0,192.2,19.6);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(331).to({_off:false},0).wait(1).to({x:1646.7},0).wait(1).to({x:1615.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1544.4},0).wait(1).to({x:1503.9},0).wait(1).to({x:1458.9},0).wait(1).to({x:1408.6},0).wait(1).to({x:1353},0).wait(1).to({x:1294.4},0).wait(1).to({x:1239},0).wait(1).to({x:1192.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1127.2},0).wait(1).to({x:1104.4},0).wait(1).to({x:1085.9},0).wait(1).to({x:1070.6},0).wait(1).to({x:1057.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1037.1},0).wait(1).to({x:1028.8},0).wait(1).to({x:1021.4},0).wait(1).to({x:1014.9},0).wait(1).to({x:1009.1},0).wait(1).to({x:1004},0).wait(1).to({x:999.4},0).wait(1).to({x:995.2},0).wait(1).to({x:991.5},0).wait(1).to({x:988.1},0).wait(1).to({x:985},0).wait(1).to({x:982.3},0).wait(1).to({x:979.8},0).wait(1).to({x:977.5},0).wait(1).to({x:975.5},0).wait(1).to({x:973.7},0).wait(1).to({x:972},0).wait(1).to({x:970.5},0).wait(1).to({x:969.2},0).wait(1).to({x:968},0).wait(1).to({x:967},0).wait(1).to({x:966.1},0).wait(1).to({x:965.3},0).wait(1).to({x:964.6},0).wait(1).to({x:964},0).wait(1).to({x:963.5},0).wait(1).to({x:963.1},0).wait(1).to({x:962.7},0).wait(1).to({x:962.5},0).wait(1).to({x:962.3},0).wait(1).to({x:962.2},0).wait(100));

	// 07_escudo
	this.instance_40 = new lib._07_escudo();
	this.instance_40.parent = this;
	this.instance_40.setTransform(1438.7,449.7,1,1,0,0,0,17.7,17.7);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(330).to({_off:false},0).wait(1).to({regX:17.5,regY:17.5,x:1409,y:449.5},0).wait(1).to({x:1377.5},0).wait(1).to({x:1343.6},0).wait(1).to({x:1306.7},0).wait(1).to({x:1266.2},0).wait(1).to({x:1221.2},0).wait(1).to({x:1170.9},0).wait(1).to({x:1115.3},0).wait(1).to({x:1056.7},0).wait(1).to({x:1001.3},0).wait(1).to({x:954.8},0).wait(1).to({x:918.2},0).wait(1).to({x:889.5},0).wait(1).to({x:866.7},0).wait(1).to({x:848.2},0).wait(1).to({x:832.9},0).wait(1).to({x:820},0).wait(1).to({x:808.9},0).wait(1).to({x:799.4},0).wait(1).to({x:791.1},0).wait(1).to({x:783.7},0).wait(1).to({x:777.2},0).wait(1).to({x:771.4},0).wait(1).to({x:766.3},0).wait(1).to({x:761.7},0).wait(1).to({x:757.5},0).wait(1).to({x:753.8},0).wait(1).to({x:750.4},0).wait(1).to({x:747.3},0).wait(1).to({x:744.6},0).wait(1).to({x:742.1},0).wait(1).to({x:739.8},0).wait(1).to({x:737.8},0).wait(1).to({x:736},0).wait(1).to({x:734.3},0).wait(1).to({x:732.8},0).wait(1).to({x:731.5},0).wait(1).to({x:730.3},0).wait(1).to({x:729.3},0).wait(1).to({x:728.4},0).wait(1).to({x:727.6},0).wait(1).to({x:726.9},0).wait(1).to({x:726.3},0).wait(1).to({x:725.8},0).wait(1).to({x:725.4},0).wait(1).to({x:725},0).wait(1).to({x:724.8},0).wait(1).to({x:724.6},0).wait(1).to({x:724.5},0).wait(1).to({regX:17.7,regY:17.7,x:724.7,y:449.7},0).wait(100));

	// 07_status
	this.instance_41 = new lib._07_status();
	this.instance_41.parent = this;
	this.instance_41.setTransform(1382,450,1,1,0,0,0,5,5);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(329).to({_off:false},0).wait(1).to({x:1352.5},0).wait(1).to({x:1321},0).wait(1).to({x:1287.1},0).wait(1).to({x:1250.2},0).wait(1).to({x:1209.7},0).wait(1).to({x:1164.7},0).wait(1).to({x:1114.4},0).wait(1).to({x:1058.8},0).wait(1).to({x:1000.2},0).wait(1).to({x:944.8},0).wait(1).to({x:898.3},0).wait(1).to({x:861.7},0).wait(1).to({x:833},0).wait(1).to({x:810.2},0).wait(1).to({x:791.7},0).wait(1).to({x:776.4},0).wait(1).to({x:763.5},0).wait(1).to({x:752.4},0).wait(1).to({x:742.9},0).wait(1).to({x:734.6},0).wait(1).to({x:727.2},0).wait(1).to({x:720.7},0).wait(1).to({x:714.9},0).wait(1).to({x:709.8},0).wait(1).to({x:705.2},0).wait(1).to({x:701},0).wait(1).to({x:697.3},0).wait(1).to({x:693.9},0).wait(1).to({x:690.8},0).wait(1).to({x:688.1},0).wait(1).to({x:685.6},0).wait(1).to({x:683.3},0).wait(1).to({x:681.3},0).wait(1).to({x:679.5},0).wait(1).to({x:677.8},0).wait(1).to({x:676.3},0).wait(1).to({x:675},0).wait(1).to({x:673.8},0).wait(1).to({x:672.8},0).wait(1).to({x:671.9},0).wait(1).to({x:671.1},0).wait(1).to({x:670.4},0).wait(1).to({x:669.8},0).wait(1).to({x:669.3},0).wait(1).to({x:668.9},0).wait(1).to({x:668.5},0).wait(1).to({x:668.3},0).wait(1).to({x:668.1},0).wait(1).to({x:668},0).wait(102));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_328 = new cjs.Graphics().p("AkYEZIAAoxIIxAAIAAIxg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(328).to({graphics:mask_6_graphics_328,x:626.5,y:449.5}).wait(152));

	// 07_posicao
	this.instance_42 = new lib._07_posicao();
	this.instance_42.parent = this;
	this.instance_42.setTransform(641.7,498.1,1,1,0,0,0,11.7,22.6);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	var maskedShapeInstanceList = [this.instance_42];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(328).to({_off:false},0).wait(1).to({regX:0,x:630,y:495.9,alpha:0.041},0).wait(1).to({y:493.6,alpha:0.085},0).wait(1).to({y:491.1,alpha:0.133},0).wait(1).to({y:488.4,alpha:0.185},0).wait(1).to({y:485.4,alpha:0.241},0).wait(1).to({y:482.1,alpha:0.304},0).wait(1).to({y:478.4,alpha:0.375},0).wait(1).to({y:474.3,alpha:0.453},0).wait(1).to({y:470,alpha:0.535},0).wait(1).to({y:466,alpha:0.612},0).wait(1).to({y:462.5,alpha:0.677},0).wait(1).to({y:459.8,alpha:0.729},0).wait(1).to({y:457.7,alpha:0.769},0).wait(1).to({y:456.1,alpha:0.801},0).wait(1).to({y:454.7,alpha:0.827},0).wait(1).to({y:453.6,alpha:0.848},0).wait(1).to({y:452.6,alpha:0.866},0).wait(1).to({y:451.8,alpha:0.882},0).wait(1).to({y:451.1,alpha:0.895},0).wait(1).to({y:450.5,alpha:0.907},0).wait(1).to({y:450,alpha:0.917},0).wait(1).to({y:449.5,alpha:0.926},0).wait(1).to({y:449.1,alpha:0.934},0).wait(1).to({y:448.7,alpha:0.941},0).wait(1).to({y:448.3,alpha:0.948},0).wait(1).to({y:448,alpha:0.954},0).wait(1).to({y:447.8,alpha:0.959},0).wait(1).to({y:447.5,alpha:0.964},0).wait(1).to({y:447.3,alpha:0.968},0).wait(1).to({y:447.1,alpha:0.972},0).wait(1).to({y:446.9,alpha:0.975},0).wait(1).to({y:446.7,alpha:0.979},0).wait(1).to({y:446.6,alpha:0.981},0).wait(1).to({y:446.4,alpha:0.984},0).wait(1).to({y:446.3,alpha:0.986},0).wait(1).to({y:446.2,alpha:0.988},0).wait(1).to({y:446.1,alpha:0.99},0).wait(1).to({y:446,alpha:0.992},0).wait(1).to({alpha:0.993},0).wait(1).to({y:445.9,alpha:0.995},0).wait(1).to({y:445.8,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({y:445.7,alpha:0.998},0).wait(2).to({alpha:0.999},0).wait(1).to({y:445.6},0).wait(1).to({alpha:1},0).wait(3).to({regX:11.7,x:641.7},0).wait(102));

	// div
	this.instance_43 = new lib.div();
	this.instance_43.parent = this;
	this.instance_43.setTransform(617.5,478,0.001,1,0,0,0,-309.2,0);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(353).to({_off:false},0).wait(1).to({regX:0,scaleX:0.05,x:632.7},0).wait(1).to({scaleX:0.1,x:648.8},0).wait(1).to({scaleX:0.16,x:666.4},0).wait(1).to({scaleX:0.22,x:686},0).wait(1).to({scaleX:0.29,x:708},0).wait(1).to({scaleX:0.37,x:733},0).wait(1).to({scaleX:0.46,x:761.1},0).wait(1).to({scaleX:0.56,x:790.4},0).wait(1).to({scaleX:0.65,x:816.8},0).wait(1).to({scaleX:0.71,x:837.4},0).wait(1).to({scaleX:0.76,x:852.9},0).wait(1).to({scaleX:0.8,x:864.7},0).wait(1).to({scaleX:0.83,x:873.9},0).wait(1).to({scaleX:0.85,x:881.4},0).wait(1).to({scaleX:0.87,x:887.5},0).wait(1).to({scaleX:0.89,x:892.7},0).wait(1).to({scaleX:0.9,x:897.1},0).wait(1).to({scaleX:0.92,x:900.8},0).wait(1).to({scaleX:0.93,x:904.1},0).wait(1).to({scaleX:0.94,x:906.9},0).wait(1).to({scaleX:0.94,x:909.4},0).wait(1).to({scaleX:0.95,x:911.6},0).wait(1).to({scaleX:0.96,x:913.6},0).wait(1).to({scaleX:0.96,x:915.3},0).wait(1).to({scaleX:0.97,x:916.9},0).wait(1).to({scaleX:0.97,x:918.2},0).wait(1).to({scaleX:0.98,x:919.4},0).wait(1).to({scaleX:0.98,x:920.5},0).wait(1).to({scaleX:0.98,x:921.5},0).wait(1).to({scaleX:0.99,x:922.3},0).wait(1).to({scaleX:0.99,x:923.1},0).wait(1).to({scaleX:0.99,x:923.7},0).wait(1).to({scaleX:0.99,x:924.3},0).wait(1).to({scaleX:0.99,x:924.8},0).wait(1).to({scaleX:1,x:925.2},0).wait(1).to({scaleX:1,x:925.6},0).wait(1).to({scaleX:1,x:925.9},0).wait(1).to({x:926.1},0).wait(1).to({scaleX:1,x:926.3},0).wait(1).to({x:926.5},0).wait(1).to({scaleX:1,x:926.6},0).wait(2).to({regX:-307.5,x:617.5},0).wait(84));

	// 08_pontos
	this.instance_44 = new lib._08_pontos();
	this.instance_44.parent = this;
	this.instance_44.setTransform(1906.3,506.6,1,1,0,0,0,20.3,19.6);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(335).to({_off:false},0).wait(1).to({regX:25,x:1881.5},0).wait(1).to({x:1850},0).wait(1).to({x:1816.1},0).wait(1).to({x:1779.2},0).wait(1).to({x:1738.7},0).wait(1).to({x:1693.7},0).wait(1).to({x:1643.4},0).wait(1).to({x:1587.8},0).wait(1).to({x:1529.2},0).wait(1).to({x:1473.8},0).wait(1).to({x:1427.3},0).wait(1).to({x:1390.7},0).wait(1).to({x:1362},0).wait(1).to({x:1339.2},0).wait(1).to({x:1320.7},0).wait(1).to({x:1305.4},0).wait(1).to({x:1292.5},0).wait(1).to({x:1281.4},0).wait(1).to({x:1271.9},0).wait(1).to({x:1263.6},0).wait(1).to({x:1256.2},0).wait(1).to({x:1249.7},0).wait(1).to({x:1243.9},0).wait(1).to({x:1238.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1230},0).wait(1).to({x:1226.3},0).wait(1).to({x:1222.9},0).wait(1).to({x:1219.8},0).wait(1).to({x:1217.1},0).wait(1).to({x:1214.6},0).wait(1).to({x:1212.3},0).wait(1).to({x:1210.3},0).wait(1).to({x:1208.5},0).wait(1).to({x:1206.8},0).wait(1).to({x:1205.3},0).wait(1).to({x:1204},0).wait(1).to({x:1202.8},0).wait(1).to({x:1201.8},0).wait(1).to({x:1200.9},0).wait(1).to({x:1200.1},0).wait(1).to({x:1199.4},0).wait(1).to({x:1198.8},0).wait(1).to({x:1198.3},0).wait(1).to({x:1197.9},0).wait(1).to({x:1197.5},0).wait(1).to({x:1197.3},0).wait(1).to({x:1197.1},0).wait(1).to({x:1197},0).wait(1).to({regX:20.3,x:1192.3},0).wait(95));

	// 08_time
	this.instance_45 = new lib._08_time();
	this.instance_45.parent = this;
	this.instance_45.setTransform(1676.2,506.6,1,1,0,0,0,192.2,19.6);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(334).to({_off:false},0).wait(1).to({x:1646.7},0).wait(1).to({x:1615.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1544.4},0).wait(1).to({x:1503.9},0).wait(1).to({x:1458.9},0).wait(1).to({x:1408.6},0).wait(1).to({x:1353},0).wait(1).to({x:1294.4},0).wait(1).to({x:1239},0).wait(1).to({x:1192.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1127.2},0).wait(1).to({x:1104.4},0).wait(1).to({x:1085.9},0).wait(1).to({x:1070.6},0).wait(1).to({x:1057.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1037.1},0).wait(1).to({x:1028.8},0).wait(1).to({x:1021.4},0).wait(1).to({x:1014.9},0).wait(1).to({x:1009.1},0).wait(1).to({x:1004},0).wait(1).to({x:999.4},0).wait(1).to({x:995.2},0).wait(1).to({x:991.5},0).wait(1).to({x:988.1},0).wait(1).to({x:985},0).wait(1).to({x:982.3},0).wait(1).to({x:979.8},0).wait(1).to({x:977.5},0).wait(1).to({x:975.5},0).wait(1).to({x:973.7},0).wait(1).to({x:972},0).wait(1).to({x:970.5},0).wait(1).to({x:969.2},0).wait(1).to({x:968},0).wait(1).to({x:967},0).wait(1).to({x:966.1},0).wait(1).to({x:965.3},0).wait(1).to({x:964.6},0).wait(1).to({x:964},0).wait(1).to({x:963.5},0).wait(1).to({x:963.1},0).wait(1).to({x:962.7},0).wait(1).to({x:962.5},0).wait(1).to({x:962.3},0).wait(1).to({x:962.2},0).wait(97));

	// 08_escudo
	this.instance_46 = new lib._08_escudo();
	this.instance_46.parent = this;
	this.instance_46.setTransform(1438.7,506.7,1,1,0,0,0,17.7,17.7);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(333).to({_off:false},0).wait(1).to({regX:17.5,regY:17.5,x:1409,y:506.5},0).wait(1).to({x:1377.5},0).wait(1).to({x:1343.6},0).wait(1).to({x:1306.7},0).wait(1).to({x:1266.2},0).wait(1).to({x:1221.2},0).wait(1).to({x:1170.9},0).wait(1).to({x:1115.3},0).wait(1).to({x:1056.7},0).wait(1).to({x:1001.3},0).wait(1).to({x:954.8},0).wait(1).to({x:918.2},0).wait(1).to({x:889.5},0).wait(1).to({x:866.7},0).wait(1).to({x:848.2},0).wait(1).to({x:832.9},0).wait(1).to({x:820},0).wait(1).to({x:808.9},0).wait(1).to({x:799.4},0).wait(1).to({x:791.1},0).wait(1).to({x:783.7},0).wait(1).to({x:777.2},0).wait(1).to({x:771.4},0).wait(1).to({x:766.3},0).wait(1).to({x:761.7},0).wait(1).to({x:757.5},0).wait(1).to({x:753.8},0).wait(1).to({x:750.4},0).wait(1).to({x:747.3},0).wait(1).to({x:744.6},0).wait(1).to({x:742.1},0).wait(1).to({x:739.8},0).wait(1).to({x:737.8},0).wait(1).to({x:736},0).wait(1).to({x:734.3},0).wait(1).to({x:732.8},0).wait(1).to({x:731.5},0).wait(1).to({x:730.3},0).wait(1).to({x:729.3},0).wait(1).to({x:728.4},0).wait(1).to({x:727.6},0).wait(1).to({x:726.9},0).wait(1).to({x:726.3},0).wait(1).to({x:725.8},0).wait(1).to({x:725.4},0).wait(1).to({x:725},0).wait(1).to({x:724.8},0).wait(1).to({x:724.6},0).wait(1).to({x:724.5},0).wait(1).to({regX:17.7,regY:17.7,x:724.7,y:506.7},0).wait(97));

	// 08_status
	this.instance_47 = new lib._08_status();
	this.instance_47.parent = this;
	this.instance_47.setTransform(1382,507,1,1,0,0,0,5,5);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(332).to({_off:false},0).wait(1).to({x:1352.5},0).wait(1).to({x:1321},0).wait(1).to({x:1287.1},0).wait(1).to({x:1250.2},0).wait(1).to({x:1209.7},0).wait(1).to({x:1164.7},0).wait(1).to({x:1114.4},0).wait(1).to({x:1058.8},0).wait(1).to({x:1000.2},0).wait(1).to({x:944.8},0).wait(1).to({x:898.3},0).wait(1).to({x:861.7},0).wait(1).to({x:833},0).wait(1).to({x:810.2},0).wait(1).to({x:791.7},0).wait(1).to({x:776.4},0).wait(1).to({x:763.5},0).wait(1).to({x:752.4},0).wait(1).to({x:742.9},0).wait(1).to({x:734.6},0).wait(1).to({x:727.2},0).wait(1).to({x:720.7},0).wait(1).to({x:714.9},0).wait(1).to({x:709.8},0).wait(1).to({x:705.2},0).wait(1).to({x:701},0).wait(1).to({x:697.3},0).wait(1).to({x:693.9},0).wait(1).to({x:690.8},0).wait(1).to({x:688.1},0).wait(1).to({x:685.6},0).wait(1).to({x:683.3},0).wait(1).to({x:681.3},0).wait(1).to({x:679.5},0).wait(1).to({x:677.8},0).wait(1).to({x:676.3},0).wait(1).to({x:675},0).wait(1).to({x:673.8},0).wait(1).to({x:672.8},0).wait(1).to({x:671.9},0).wait(1).to({x:671.1},0).wait(1).to({x:670.4},0).wait(1).to({x:669.8},0).wait(1).to({x:669.3},0).wait(1).to({x:668.9},0).wait(1).to({x:668.5},0).wait(1).to({x:668.3},0).wait(1).to({x:668.1},0).wait(1).to({x:668},0).wait(99));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_331 = new cjs.Graphics().p("AkXEYIAAowIIvAAIAAIwg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(331).to({graphics:mask_7_graphics_331,x:631.8,y:507.9}).wait(149));

	// 08_posicao
	this.instance_48 = new lib._08_posicao();
	this.instance_48.parent = this;
	this.instance_48.setTransform(641.7,559.1,1,1,0,0,0,11.7,22.6);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	var maskedShapeInstanceList = [this.instance_48];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(331).to({_off:false},0).wait(1).to({regX:0,x:630,y:556.9,alpha:0.041},0).wait(1).to({y:554.6,alpha:0.085},0).wait(1).to({y:552.1,alpha:0.133},0).wait(1).to({y:549.4,alpha:0.185},0).wait(1).to({y:546.4,alpha:0.241},0).wait(1).to({y:543.1,alpha:0.304},0).wait(1).to({y:539.4,alpha:0.375},0).wait(1).to({y:535.3,alpha:0.453},0).wait(1).to({y:531,alpha:0.535},0).wait(1).to({y:527,alpha:0.612},0).wait(1).to({y:523.5,alpha:0.677},0).wait(1).to({y:520.8,alpha:0.729},0).wait(1).to({y:518.7,alpha:0.769},0).wait(1).to({y:517.1,alpha:0.801},0).wait(1).to({y:515.7,alpha:0.827},0).wait(1).to({y:514.6,alpha:0.848},0).wait(1).to({y:513.6,alpha:0.866},0).wait(1).to({y:512.8,alpha:0.882},0).wait(1).to({y:512.1,alpha:0.895},0).wait(1).to({y:511.5,alpha:0.907},0).wait(1).to({y:511,alpha:0.917},0).wait(1).to({y:510.5,alpha:0.926},0).wait(1).to({y:510.1,alpha:0.934},0).wait(1).to({y:509.7,alpha:0.941},0).wait(1).to({y:509.3,alpha:0.948},0).wait(1).to({y:509,alpha:0.954},0).wait(1).to({y:508.8,alpha:0.959},0).wait(1).to({y:508.5,alpha:0.964},0).wait(1).to({y:508.3,alpha:0.968},0).wait(1).to({y:508.1,alpha:0.972},0).wait(1).to({y:507.9,alpha:0.975},0).wait(1).to({y:507.7,alpha:0.979},0).wait(1).to({y:507.6,alpha:0.981},0).wait(1).to({y:507.4,alpha:0.984},0).wait(1).to({y:507.3,alpha:0.986},0).wait(1).to({y:507.2,alpha:0.988},0).wait(1).to({y:507.1,alpha:0.99},0).wait(1).to({y:507,alpha:0.992},0).wait(1).to({alpha:0.993},0).wait(1).to({y:506.9,alpha:0.995},0).wait(1).to({y:506.8,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({y:506.7,alpha:0.998},0).wait(2).to({alpha:0.999},0).wait(1).to({y:506.6},0).wait(1).to({alpha:1},0).wait(3).to({regX:11.7,x:641.7},0).wait(99));

	// div
	this.instance_49 = new lib.div();
	this.instance_49.parent = this;
	this.instance_49.setTransform(617.5,536,0.001,1,0,0,0,-309.2,0);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(356).to({_off:false},0).wait(1).to({regX:0,scaleX:0.05,x:633},0).wait(1).to({scaleX:0.1,x:649.6},0).wait(1).to({scaleX:0.16,x:667.8},0).wait(1).to({scaleX:0.23,x:688},0).wait(1).to({scaleX:0.3,x:710.8},0).wait(1).to({scaleX:0.39,x:736.8},0).wait(1).to({scaleX:0.48,x:766},0).wait(1).to({scaleX:0.58,x:795.8},0).wait(1).to({scaleX:0.66,x:821.7},0).wait(1).to({scaleX:0.73,x:841.5},0).wait(1).to({scaleX:0.77,x:856.3},0).wait(1).to({scaleX:0.81,x:867.6},0).wait(1).to({scaleX:0.84,x:876.4},0).wait(1).to({scaleX:0.86,x:883.6},0).wait(1).to({scaleX:0.88,x:889.5},0).wait(1).to({scaleX:0.9,x:894.4},0).wait(1).to({scaleX:0.91,x:898.6},0).wait(1).to({scaleX:0.92,x:902.3},0).wait(1).to({scaleX:0.93,x:905.4},0).wait(1).to({scaleX:0.94,x:908.2},0).wait(1).to({scaleX:0.95,x:910.6},0).wait(1).to({scaleX:0.96,x:912.7},0).wait(1).to({scaleX:0.96,x:914.6},0).wait(1).to({scaleX:0.97,x:916.2},0).wait(1).to({scaleX:0.97,x:917.7},0).wait(1).to({scaleX:0.98,x:919},0).wait(1).to({scaleX:0.98,x:920.1},0).wait(1).to({scaleX:0.98,x:921.2},0).wait(1).to({scaleX:0.99,x:922.1},0).wait(1).to({scaleX:0.99,x:922.9},0).wait(1).to({scaleX:0.99,x:923.6},0).wait(1).to({scaleX:0.99,x:924.2},0).wait(1).to({scaleX:0.99,x:924.7},0).wait(1).to({scaleX:1,x:925.1},0).wait(1).to({scaleX:1,x:925.5},0).wait(1).to({scaleX:1,x:925.8},0).wait(1).to({scaleX:1,x:926.1},0).wait(1).to({scaleX:1,x:926.3},0).wait(1).to({x:926.5},0).wait(1).to({scaleX:1,x:926.6},0).wait(2).to({regX:-307.5,x:617.5},0).wait(82));

	// 09_pontos
	this.instance_50 = new lib._09_pontos();
	this.instance_50.parent = this;
	this.instance_50.setTransform(1906.3,564.6,1,1,0,0,0,20.3,19.6);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(338).to({_off:false},0).wait(1).to({regX:25,x:1881.5},0).wait(1).to({x:1850},0).wait(1).to({x:1816.1},0).wait(1).to({x:1779.2},0).wait(1).to({x:1738.7},0).wait(1).to({x:1693.7},0).wait(1).to({x:1643.4},0).wait(1).to({x:1587.8},0).wait(1).to({x:1529.2},0).wait(1).to({x:1473.8},0).wait(1).to({x:1427.3},0).wait(1).to({x:1390.7},0).wait(1).to({x:1362},0).wait(1).to({x:1339.2},0).wait(1).to({x:1320.7},0).wait(1).to({x:1305.4},0).wait(1).to({x:1292.5},0).wait(1).to({x:1281.4},0).wait(1).to({x:1271.9},0).wait(1).to({x:1263.6},0).wait(1).to({x:1256.2},0).wait(1).to({x:1249.7},0).wait(1).to({x:1243.9},0).wait(1).to({x:1238.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1230},0).wait(1).to({x:1226.3},0).wait(1).to({x:1222.9},0).wait(1).to({x:1219.8},0).wait(1).to({x:1217.1},0).wait(1).to({x:1214.6},0).wait(1).to({x:1212.3},0).wait(1).to({x:1210.3},0).wait(1).to({x:1208.5},0).wait(1).to({x:1206.8},0).wait(1).to({x:1205.3},0).wait(1).to({x:1204},0).wait(1).to({x:1202.8},0).wait(1).to({x:1201.8},0).wait(1).to({x:1200.9},0).wait(1).to({x:1200.1},0).wait(1).to({x:1199.4},0).wait(1).to({x:1198.8},0).wait(1).to({x:1198.3},0).wait(1).to({x:1197.9},0).wait(1).to({x:1197.5},0).wait(1).to({x:1197.3},0).wait(1).to({x:1197.1},0).wait(1).to({x:1197},0).wait(1).to({regX:20.3,x:1192.3},0).wait(92));

	// 09_time
	this.instance_51 = new lib._09_time();
	this.instance_51.parent = this;
	this.instance_51.setTransform(1676.2,564.6,1,1,0,0,0,192.2,19.6);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(337).to({_off:false},0).wait(1).to({x:1646.7},0).wait(1).to({x:1615.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1544.4},0).wait(1).to({x:1503.9},0).wait(1).to({x:1458.9},0).wait(1).to({x:1408.6},0).wait(1).to({x:1353},0).wait(1).to({x:1294.4},0).wait(1).to({x:1239},0).wait(1).to({x:1192.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1127.2},0).wait(1).to({x:1104.4},0).wait(1).to({x:1085.9},0).wait(1).to({x:1070.6},0).wait(1).to({x:1057.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1037.1},0).wait(1).to({x:1028.8},0).wait(1).to({x:1021.4},0).wait(1).to({x:1014.9},0).wait(1).to({x:1009.1},0).wait(1).to({x:1004},0).wait(1).to({x:999.4},0).wait(1).to({x:995.2},0).wait(1).to({x:991.5},0).wait(1).to({x:988.1},0).wait(1).to({x:985},0).wait(1).to({x:982.3},0).wait(1).to({x:979.8},0).wait(1).to({x:977.5},0).wait(1).to({x:975.5},0).wait(1).to({x:973.7},0).wait(1).to({x:972},0).wait(1).to({x:970.5},0).wait(1).to({x:969.2},0).wait(1).to({x:968},0).wait(1).to({x:967},0).wait(1).to({x:966.1},0).wait(1).to({x:965.3},0).wait(1).to({x:964.6},0).wait(1).to({x:964},0).wait(1).to({x:963.5},0).wait(1).to({x:963.1},0).wait(1).to({x:962.7},0).wait(1).to({x:962.5},0).wait(1).to({x:962.3},0).wait(1).to({x:962.2},0).wait(94));

	// 09_escudo
	this.instance_52 = new lib._09_escudo();
	this.instance_52.parent = this;
	this.instance_52.setTransform(1438.7,565.7,1,1,0,0,0,17.7,17.7);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(336).to({_off:false},0).wait(1).to({regX:17.5,regY:17.5,x:1409,y:565.5},0).wait(1).to({x:1377.5},0).wait(1).to({x:1343.6},0).wait(1).to({x:1306.7},0).wait(1).to({x:1266.2},0).wait(1).to({x:1221.2},0).wait(1).to({x:1170.9},0).wait(1).to({x:1115.3},0).wait(1).to({x:1056.7},0).wait(1).to({x:1001.3},0).wait(1).to({x:954.8},0).wait(1).to({x:918.2},0).wait(1).to({x:889.5},0).wait(1).to({x:866.7},0).wait(1).to({x:848.2},0).wait(1).to({x:832.9},0).wait(1).to({x:820},0).wait(1).to({x:808.9},0).wait(1).to({x:799.4},0).wait(1).to({x:791.1},0).wait(1).to({x:783.7},0).wait(1).to({x:777.2},0).wait(1).to({x:771.4},0).wait(1).to({x:766.3},0).wait(1).to({x:761.7},0).wait(1).to({x:757.5},0).wait(1).to({x:753.8},0).wait(1).to({x:750.4},0).wait(1).to({x:747.3},0).wait(1).to({x:744.6},0).wait(1).to({x:742.1},0).wait(1).to({x:739.8},0).wait(1).to({x:737.8},0).wait(1).to({x:736},0).wait(1).to({x:734.3},0).wait(1).to({x:732.8},0).wait(1).to({x:731.5},0).wait(1).to({x:730.3},0).wait(1).to({x:729.3},0).wait(1).to({x:728.4},0).wait(1).to({x:727.6},0).wait(1).to({x:726.9},0).wait(1).to({x:726.3},0).wait(1).to({x:725.8},0).wait(1).to({x:725.4},0).wait(1).to({x:725},0).wait(1).to({x:724.8},0).wait(1).to({x:724.6},0).wait(1).to({x:724.5},0).wait(1).to({regX:17.7,regY:17.7,x:724.7,y:565.7},0).wait(94));

	// 09_status
	this.instance_53 = new lib._09_status();
	this.instance_53.parent = this;
	this.instance_53.setTransform(1382,565,1,1,0,0,0,5,5);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(335).to({_off:false},0).wait(1).to({x:1352.5},0).wait(1).to({x:1321},0).wait(1).to({x:1287.1},0).wait(1).to({x:1250.2},0).wait(1).to({x:1209.7},0).wait(1).to({x:1164.7},0).wait(1).to({x:1114.4},0).wait(1).to({x:1058.8},0).wait(1).to({x:1000.2},0).wait(1).to({x:944.8},0).wait(1).to({x:898.3},0).wait(1).to({x:861.7},0).wait(1).to({x:833},0).wait(1).to({x:810.2},0).wait(1).to({x:791.7},0).wait(1).to({x:776.4},0).wait(1).to({x:763.5},0).wait(1).to({x:752.4},0).wait(1).to({x:742.9},0).wait(1).to({x:734.6},0).wait(1).to({x:727.2},0).wait(1).to({x:720.7},0).wait(1).to({x:714.9},0).wait(1).to({x:709.8},0).wait(1).to({x:705.2},0).wait(1).to({x:701},0).wait(1).to({x:697.3},0).wait(1).to({x:693.9},0).wait(1).to({x:690.8},0).wait(1).to({x:688.1},0).wait(1).to({x:685.6},0).wait(1).to({x:683.3},0).wait(1).to({x:681.3},0).wait(1).to({x:679.5},0).wait(1).to({x:677.8},0).wait(1).to({x:676.3},0).wait(1).to({x:675},0).wait(1).to({x:673.8},0).wait(1).to({x:672.8},0).wait(1).to({x:671.9},0).wait(1).to({x:671.1},0).wait(1).to({x:670.4},0).wait(1).to({x:669.8},0).wait(1).to({x:669.3},0).wait(1).to({x:668.9},0).wait(1).to({x:668.5},0).wait(1).to({x:668.3},0).wait(1).to({x:668.1},0).wait(1).to({x:668},0).wait(96));

	// mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_334 = new cjs.Graphics().p("AkSETIAAolIIlAAIAAIlg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(334).to({graphics:mask_8_graphics_334,x:628,y:565.6}).wait(146));

	// 09_posicao
	this.instance_54 = new lib._09_posicao();
	this.instance_54.parent = this;
	this.instance_54.setTransform(641.7,613.1,1,1,0,0,0,11.7,22.6);
	this.instance_54.alpha = 0;
	this.instance_54._off = true;

	var maskedShapeInstanceList = [this.instance_54];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(334).to({_off:false},0).wait(1).to({regX:0,x:630,y:610.9,alpha:0.041},0).wait(1).to({y:608.6,alpha:0.085},0).wait(1).to({y:606.1,alpha:0.133},0).wait(1).to({y:603.4,alpha:0.185},0).wait(1).to({y:600.4,alpha:0.241},0).wait(1).to({y:597.1,alpha:0.304},0).wait(1).to({y:593.4,alpha:0.375},0).wait(1).to({y:589.3,alpha:0.453},0).wait(1).to({y:585,alpha:0.535},0).wait(1).to({y:581,alpha:0.612},0).wait(1).to({y:577.5,alpha:0.677},0).wait(1).to({y:574.8,alpha:0.729},0).wait(1).to({y:572.7,alpha:0.769},0).wait(1).to({y:571.1,alpha:0.801},0).wait(1).to({y:569.7,alpha:0.827},0).wait(1).to({y:568.6,alpha:0.848},0).wait(1).to({y:567.6,alpha:0.866},0).wait(1).to({y:566.8,alpha:0.882},0).wait(1).to({y:566.1,alpha:0.895},0).wait(1).to({y:565.5,alpha:0.907},0).wait(1).to({y:565,alpha:0.917},0).wait(1).to({y:564.5,alpha:0.926},0).wait(1).to({y:564.1,alpha:0.934},0).wait(1).to({y:563.7,alpha:0.941},0).wait(1).to({y:563.3,alpha:0.948},0).wait(1).to({y:563,alpha:0.954},0).wait(1).to({y:562.8,alpha:0.959},0).wait(1).to({y:562.5,alpha:0.964},0).wait(1).to({y:562.3,alpha:0.968},0).wait(1).to({y:562.1,alpha:0.972},0).wait(1).to({y:561.9,alpha:0.975},0).wait(1).to({y:561.7,alpha:0.979},0).wait(1).to({y:561.6,alpha:0.981},0).wait(1).to({y:561.4,alpha:0.984},0).wait(1).to({y:561.3,alpha:0.986},0).wait(1).to({y:561.2,alpha:0.988},0).wait(1).to({y:561.1,alpha:0.99},0).wait(1).to({y:561,alpha:0.992},0).wait(1).to({alpha:0.993},0).wait(1).to({y:560.9,alpha:0.995},0).wait(1).to({y:560.8,alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({y:560.7,alpha:0.998},0).wait(2).to({alpha:0.999},0).wait(1).to({y:560.6},0).wait(1).to({alpha:1},0).wait(3).to({regX:11.7,x:641.7},0).wait(96));

	// div
	this.instance_55 = new lib.div();
	this.instance_55.parent = this;
	this.instance_55.setTransform(617.5,595,0.001,1,0,0,0,-309.2,0);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(359).to({_off:false},0).wait(1).to({regX:0,scaleX:0.05,x:633.4},0).wait(1).to({scaleX:0.11,x:650.4},0).wait(1).to({scaleX:0.17,x:669.2},0).wait(1).to({scaleX:0.24,x:690.1},0).wait(1).to({scaleX:0.31,x:713.8},0).wait(1).to({scaleX:0.4,x:740.9},0).wait(1).to({scaleX:0.5,x:771.2},0).wait(1).to({scaleX:0.6,x:801.3},0).wait(1).to({scaleX:0.68,x:826.6},0).wait(1).to({scaleX:0.74,x:845.5},0).wait(1).to({scaleX:0.78,x:859.6},0).wait(1).to({scaleX:0.82,x:870.4},0).wait(1).to({scaleX:0.85,x:878.8},0).wait(1).to({scaleX:0.87,x:885.7},0).wait(1).to({scaleX:0.89,x:891.4},0).wait(1).to({scaleX:0.9,x:896.2},0).wait(1).to({scaleX:0.92,x:900.2},0).wait(1).to({scaleX:0.93,x:903.7},0).wait(1).to({scaleX:0.94,x:906.7},0).wait(1).to({scaleX:0.94,x:909.4},0).wait(1).to({scaleX:0.95,x:911.7},0).wait(1).to({scaleX:0.96,x:913.7},0).wait(1).to({scaleX:0.96,x:915.5},0).wait(1).to({scaleX:0.97,x:917.1},0).wait(1).to({scaleX:0.97,x:918.5},0).wait(1).to({scaleX:0.98,x:919.7},0).wait(1).to({scaleX:0.98,x:920.8},0).wait(1).to({scaleX:0.98,x:921.8},0).wait(1).to({scaleX:0.99,x:922.6},0).wait(1).to({scaleX:0.99,x:923.4},0).wait(1).to({scaleX:0.99,x:924},0).wait(1).to({scaleX:0.99,x:924.6},0).wait(1).to({scaleX:1,x:925.1},0).wait(1).to({scaleX:1,x:925.5},0).wait(1).to({scaleX:1,x:925.8},0).wait(1).to({scaleX:1,x:926.1},0).wait(1).to({scaleX:1,x:926.3},0).wait(1).to({x:926.5},0).wait(1).to({scaleX:1,x:926.6},0).wait(2).to({regX:-307.5,x:617.5},0).wait(80));

	// 10_pontos
	this.instance_56 = new lib._10_pontos();
	this.instance_56.parent = this;
	this.instance_56.setTransform(1906.3,622.6,1,1,0,0,0,20.3,19.6);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(341).to({_off:false},0).wait(1).to({regX:25,x:1881.5},0).wait(1).to({x:1850},0).wait(1).to({x:1816.1},0).wait(1).to({x:1779.2},0).wait(1).to({x:1738.7},0).wait(1).to({x:1693.7},0).wait(1).to({x:1643.4},0).wait(1).to({x:1587.8},0).wait(1).to({x:1529.2},0).wait(1).to({x:1473.8},0).wait(1).to({x:1427.3},0).wait(1).to({x:1390.7},0).wait(1).to({x:1362},0).wait(1).to({x:1339.2},0).wait(1).to({x:1320.7},0).wait(1).to({x:1305.4},0).wait(1).to({x:1292.5},0).wait(1).to({x:1281.4},0).wait(1).to({x:1271.9},0).wait(1).to({x:1263.6},0).wait(1).to({x:1256.2},0).wait(1).to({x:1249.7},0).wait(1).to({x:1243.9},0).wait(1).to({x:1238.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1230},0).wait(1).to({x:1226.3},0).wait(1).to({x:1222.9},0).wait(1).to({x:1219.8},0).wait(1).to({x:1217.1},0).wait(1).to({x:1214.6},0).wait(1).to({x:1212.3},0).wait(1).to({x:1210.3},0).wait(1).to({x:1208.5},0).wait(1).to({x:1206.8},0).wait(1).to({x:1205.3},0).wait(1).to({x:1204},0).wait(1).to({x:1202.8},0).wait(1).to({x:1201.8},0).wait(1).to({x:1200.9},0).wait(1).to({x:1200.1},0).wait(1).to({x:1199.4},0).wait(1).to({x:1198.8},0).wait(1).to({x:1198.3},0).wait(1).to({x:1197.9},0).wait(1).to({x:1197.5},0).wait(1).to({x:1197.3},0).wait(1).to({x:1197.1},0).wait(1).to({x:1197},0).wait(1).to({regX:20.3,x:1192.3},0).wait(89));

	// 10_time
	this.instance_57 = new lib._10_time();
	this.instance_57.parent = this;
	this.instance_57.setTransform(1676.2,622.6,1,1,0,0,0,192.2,19.6);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(340).to({_off:false},0).wait(1).to({x:1646.7},0).wait(1).to({x:1615.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1544.4},0).wait(1).to({x:1503.9},0).wait(1).to({x:1458.9},0).wait(1).to({x:1408.6},0).wait(1).to({x:1353},0).wait(1).to({x:1294.4},0).wait(1).to({x:1239},0).wait(1).to({x:1192.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1127.2},0).wait(1).to({x:1104.4},0).wait(1).to({x:1085.9},0).wait(1).to({x:1070.6},0).wait(1).to({x:1057.7},0).wait(1).to({x:1046.6},0).wait(1).to({x:1037.1},0).wait(1).to({x:1028.8},0).wait(1).to({x:1021.4},0).wait(1).to({x:1014.9},0).wait(1).to({x:1009.1},0).wait(1).to({x:1004},0).wait(1).to({x:999.4},0).wait(1).to({x:995.2},0).wait(1).to({x:991.5},0).wait(1).to({x:988.1},0).wait(1).to({x:985},0).wait(1).to({x:982.3},0).wait(1).to({x:979.8},0).wait(1).to({x:977.5},0).wait(1).to({x:975.5},0).wait(1).to({x:973.7},0).wait(1).to({x:972},0).wait(1).to({x:970.5},0).wait(1).to({x:969.2},0).wait(1).to({x:968},0).wait(1).to({x:967},0).wait(1).to({x:966.1},0).wait(1).to({x:965.3},0).wait(1).to({x:964.6},0).wait(1).to({x:964},0).wait(1).to({x:963.5},0).wait(1).to({x:963.1},0).wait(1).to({x:962.7},0).wait(1).to({x:962.5},0).wait(1).to({x:962.3},0).wait(1).to({x:962.2},0).wait(91));

	// 10_escudo
	this.instance_58 = new lib._10_escudo();
	this.instance_58.parent = this;
	this.instance_58.setTransform(1438.7,622.7,1,1,0,0,0,17.7,17.7);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(339).to({_off:false},0).wait(1).to({regX:17.5,regY:17.5,x:1409,y:622.5},0).wait(1).to({x:1377.5},0).wait(1).to({x:1343.6},0).wait(1).to({x:1306.7},0).wait(1).to({x:1266.2},0).wait(1).to({x:1221.2},0).wait(1).to({x:1170.9},0).wait(1).to({x:1115.3},0).wait(1).to({x:1056.7},0).wait(1).to({x:1001.3},0).wait(1).to({x:954.8},0).wait(1).to({x:918.2},0).wait(1).to({x:889.5},0).wait(1).to({x:866.7},0).wait(1).to({x:848.2},0).wait(1).to({x:832.9},0).wait(1).to({x:820},0).wait(1).to({x:808.9},0).wait(1).to({x:799.4},0).wait(1).to({x:791.1},0).wait(1).to({x:783.7},0).wait(1).to({x:777.2},0).wait(1).to({x:771.4},0).wait(1).to({x:766.3},0).wait(1).to({x:761.7},0).wait(1).to({x:757.5},0).wait(1).to({x:753.8},0).wait(1).to({x:750.4},0).wait(1).to({x:747.3},0).wait(1).to({x:744.6},0).wait(1).to({x:742.1},0).wait(1).to({x:739.8},0).wait(1).to({x:737.8},0).wait(1).to({x:736},0).wait(1).to({x:734.3},0).wait(1).to({x:732.8},0).wait(1).to({x:731.5},0).wait(1).to({x:730.3},0).wait(1).to({x:729.3},0).wait(1).to({x:728.4},0).wait(1).to({x:727.6},0).wait(1).to({x:726.9},0).wait(1).to({x:726.3},0).wait(1).to({x:725.8},0).wait(1).to({x:725.4},0).wait(1).to({x:725},0).wait(1).to({x:724.8},0).wait(1).to({x:724.6},0).wait(1).to({x:724.5},0).wait(1).to({regX:17.7,regY:17.7,x:724.7,y:622.7},0).wait(91));

	// 10_status
	this.instance_59 = new lib._10_status();
	this.instance_59.parent = this;
	this.instance_59.setTransform(1382,623,1,1,0,0,0,5,5);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(338).to({_off:false},0).wait(1).to({x:1352.5},0).wait(1).to({x:1321},0).wait(1).to({x:1287.1},0).wait(1).to({x:1250.2},0).wait(1).to({x:1209.7},0).wait(1).to({x:1164.7},0).wait(1).to({x:1114.4},0).wait(1).to({x:1058.8},0).wait(1).to({x:1000.2},0).wait(1).to({x:944.8},0).wait(1).to({x:898.3},0).wait(1).to({x:861.7},0).wait(1).to({x:833},0).wait(1).to({x:810.2},0).wait(1).to({x:791.7},0).wait(1).to({x:776.4},0).wait(1).to({x:763.5},0).wait(1).to({x:752.4},0).wait(1).to({x:742.9},0).wait(1).to({x:734.6},0).wait(1).to({x:727.2},0).wait(1).to({x:720.7},0).wait(1).to({x:714.9},0).wait(1).to({x:709.8},0).wait(1).to({x:705.2},0).wait(1).to({x:701},0).wait(1).to({x:697.3},0).wait(1).to({x:693.9},0).wait(1).to({x:690.8},0).wait(1).to({x:688.1},0).wait(1).to({x:685.6},0).wait(1).to({x:683.3},0).wait(1).to({x:681.3},0).wait(1).to({x:679.5},0).wait(1).to({x:677.8},0).wait(1).to({x:676.3},0).wait(1).to({x:675},0).wait(1).to({x:673.8},0).wait(1).to({x:672.8},0).wait(1).to({x:671.9},0).wait(1).to({x:671.1},0).wait(1).to({x:670.4},0).wait(1).to({x:669.8},0).wait(1).to({x:669.3},0).wait(1).to({x:668.9},0).wait(1).to({x:668.5},0).wait(1).to({x:668.3},0).wait(1).to({x:668.1},0).wait(1).to({x:668},0).wait(93));

	// mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_337 = new cjs.Graphics().p("AkCEDIAAoFIIFAAIAAIFg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(337).to({graphics:mask_9_graphics_337,x:625.4,y:620.1}).wait(143));

	// 10_posicao
	this.instance_60 = new lib._10_posicao();
	this.instance_60.parent = this;
	this.instance_60.setTransform(641.7,664.6,1,1,0,0,0,11.7,22.6);
	this.instance_60.alpha = 0;
	this.instance_60._off = true;

	var maskedShapeInstanceList = [this.instance_60];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(337).to({_off:false},0).wait(1).to({regX:0,x:630,y:662.9,alpha:0.041},0).wait(1).to({y:661,alpha:0.085},0).wait(1).to({y:659,alpha:0.133},0).wait(1).to({y:656.8,alpha:0.185},0).wait(1).to({y:654.5,alpha:0.241},0).wait(1).to({y:651.8,alpha:0.304},0).wait(1).to({y:648.9,alpha:0.375},0).wait(1).to({y:645.6,alpha:0.453},0).wait(1).to({y:642.1,alpha:0.535},0).wait(1).to({y:638.9,alpha:0.612},0).wait(1).to({y:636.1,alpha:0.677},0).wait(1).to({y:634,alpha:0.729},0).wait(1).to({y:632.3,alpha:0.769},0).wait(1).to({y:631,alpha:0.801},0).wait(1).to({y:629.9,alpha:0.827},0).wait(1).to({y:629,alpha:0.848},0).wait(1).to({y:628.2,alpha:0.866},0).wait(1).to({y:627.6,alpha:0.882},0).wait(1).to({y:627,alpha:0.895},0).wait(1).to({y:626.5,alpha:0.907},0).wait(1).to({y:626.1,alpha:0.917},0).wait(1).to({y:625.7,alpha:0.926},0).wait(1).to({y:625.4,alpha:0.934},0).wait(1).to({y:625.1,alpha:0.941},0).wait(1).to({y:624.8,alpha:0.948},0).wait(1).to({y:624.5,alpha:0.954},0).wait(1).to({y:624.3,alpha:0.959},0).wait(1).to({y:624.1,alpha:0.964},0).wait(1).to({y:623.9,alpha:0.968},0).wait(1).to({y:623.8,alpha:0.972},0).wait(1).to({y:623.6,alpha:0.975},0).wait(1).to({y:623.5,alpha:0.979},0).wait(1).to({y:623.4,alpha:0.981},0).wait(1).to({y:623.3,alpha:0.984},0).wait(1).to({y:623.2,alpha:0.986},0).wait(1).to({y:623.1,alpha:0.988},0).wait(1).to({y:623,alpha:0.99},0).wait(1).to({y:622.9,alpha:0.992},0).wait(1).to({alpha:0.993},0).wait(1).to({y:622.8,alpha:0.995},0).wait(1).to({alpha:0.996},0).wait(1).to({y:622.7,alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(2).to({alpha:0.999},0).wait(1).to({y:622.6},0).wait(1).to({alpha:1},0).wait(3).to({regX:11.7,x:641.7},0).wait(93));

	// mask (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_334 = new cjs.Graphics().p("Eg4+AGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_335 = new cjs.Graphics().p("Eg4+AGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_336 = new cjs.Graphics().p("Eg4+AGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_337 = new cjs.Graphics().p("Eg4+AGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_338 = new cjs.Graphics().p("Eg4+AGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_339 = new cjs.Graphics().p("Eg4+AGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_340 = new cjs.Graphics().p("Eg4+AGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_341 = new cjs.Graphics().p("Eg2vAGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_342 = new cjs.Graphics().p("EgzaAGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_343 = new cjs.Graphics().p("EgvxAGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_344 = new cjs.Graphics().p("Egr4AGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_345 = new cjs.Graphics().p("Egn5AGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_346 = new cjs.Graphics().p("EgkKAGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_347 = new cjs.Graphics().p("Egg8AGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_348 = new cjs.Graphics().p("A+TGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_349 = new cjs.Graphics().p("A8JGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_350 = new cjs.Graphics().p("A6YGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_351 = new cjs.Graphics().p("A46GsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_352 = new cjs.Graphics().p("A3rGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_353 = new cjs.Graphics().p("A2oGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_354 = new cjs.Graphics().p("A1tGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_355 = new cjs.Graphics().p("A06GsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_356 = new cjs.Graphics().p("A0NGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_357 = new cjs.Graphics().p("AzlGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_358 = new cjs.Graphics().p("AzBGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_359 = new cjs.Graphics().p("AyhGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_360 = new cjs.Graphics().p("AyEGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_361 = new cjs.Graphics().p("AxpGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_362 = new cjs.Graphics().p("AxRGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_363 = new cjs.Graphics().p("Aw7GsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_364 = new cjs.Graphics().p("AwnGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_365 = new cjs.Graphics().p("AwVGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_366 = new cjs.Graphics().p("AwFGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_367 = new cjs.Graphics().p("Av1GsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_368 = new cjs.Graphics().p("AvnGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_369 = new cjs.Graphics().p("AvaGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_370 = new cjs.Graphics().p("AvOGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_371 = new cjs.Graphics().p("AvDGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_372 = new cjs.Graphics().p("Au5GsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_373 = new cjs.Graphics().p("AuwGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_374 = new cjs.Graphics().p("AuoGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_375 = new cjs.Graphics().p("AugGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_376 = new cjs.Graphics().p("AuZGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_377 = new cjs.Graphics().p("AuSGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_378 = new cjs.Graphics().p("AuMGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_379 = new cjs.Graphics().p("AuHGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_380 = new cjs.Graphics().p("AuCGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_381 = new cjs.Graphics().p("At+GsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_382 = new cjs.Graphics().p("At6GsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_383 = new cjs.Graphics().p("At2GsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_384 = new cjs.Graphics().p("AtzGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_385 = new cjs.Graphics().p("AtwGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_386 = new cjs.Graphics().p("AtuGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_387 = new cjs.Graphics().p("AtsGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_388 = new cjs.Graphics().p("AtqGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_389 = new cjs.Graphics().p("AtpGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_390 = new cjs.Graphics().p("AtnGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_391 = new cjs.Graphics().p("AtnGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_392 = new cjs.Graphics().p("AtmGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_393 = new cjs.Graphics().p("AtmGsIAAtXMBx9AAAIAANXg");
	var mask_10_graphics_394 = new cjs.Graphics().p("AtmGsIAAtXMBx9AAAIAANXg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(334).to({graphics:mask_10_graphics_334,x:174.7,y:30}).wait(1).to({graphics:mask_10_graphics_335,x:200.2,y:30}).wait(1).to({graphics:mask_10_graphics_336,x:227.1,y:30}).wait(1).to({graphics:mask_10_graphics_337,x:255.7,y:30}).wait(1).to({graphics:mask_10_graphics_338,x:286.2,y:30}).wait(1).to({graphics:mask_10_graphics_339,x:319,y:30}).wait(1).to({graphics:mask_10_graphics_340,x:354.6,y:30}).wait(1).to({graphics:mask_10_graphics_341,x:379,y:30}).wait(1).to({graphics:mask_10_graphics_342,x:400.3,y:30}).wait(1).to({graphics:mask_10_graphics_343,x:423.6,y:30}).wait(1).to({graphics:mask_10_graphics_344,x:448.5,y:30}).wait(1).to({graphics:mask_10_graphics_345,x:474,y:30}).wait(1).to({graphics:mask_10_graphics_346,x:497.9,y:30}).wait(1).to({graphics:mask_10_graphics_347,x:518.5,y:30}).wait(1).to({graphics:mask_10_graphics_348,x:535.4,y:30}).wait(1).to({graphics:mask_10_graphics_349,x:549.2,y:30}).wait(1).to({graphics:mask_10_graphics_350,x:560.5,y:30}).wait(1).to({graphics:mask_10_graphics_351,x:569.9,y:30}).wait(1).to({graphics:mask_10_graphics_352,x:577.8,y:30}).wait(1).to({graphics:mask_10_graphics_353,x:584.5,y:30}).wait(1).to({graphics:mask_10_graphics_354,x:590.4,y:30}).wait(1).to({graphics:mask_10_graphics_355,x:595.5,y:30}).wait(1).to({graphics:mask_10_graphics_356,x:600,y:30}).wait(1).to({graphics:mask_10_graphics_357,x:604,y:30}).wait(1).to({graphics:mask_10_graphics_358,x:607.6,y:30}).wait(1).to({graphics:mask_10_graphics_359,x:610.8,y:30}).wait(1).to({graphics:mask_10_graphics_360,x:613.7,y:30}).wait(1).to({graphics:mask_10_graphics_361,x:616.4,y:30}).wait(1).to({graphics:mask_10_graphics_362,x:618.8,y:30}).wait(1).to({graphics:mask_10_graphics_363,x:621,y:30}).wait(1).to({graphics:mask_10_graphics_364,x:623,y:30}).wait(1).to({graphics:mask_10_graphics_365,x:624.8,y:30}).wait(1).to({graphics:mask_10_graphics_366,x:626.4,y:30}).wait(1).to({graphics:mask_10_graphics_367,x:628,y:30}).wait(1).to({graphics:mask_10_graphics_368,x:629.4,y:30}).wait(1).to({graphics:mask_10_graphics_369,x:630.7,y:30}).wait(1).to({graphics:mask_10_graphics_370,x:631.9,y:30}).wait(1).to({graphics:mask_10_graphics_371,x:633,y:30}).wait(1).to({graphics:mask_10_graphics_372,x:634,y:30}).wait(1).to({graphics:mask_10_graphics_373,x:634.9,y:30}).wait(1).to({graphics:mask_10_graphics_374,x:635.7,y:30}).wait(1).to({graphics:mask_10_graphics_375,x:636.5,y:30}).wait(1).to({graphics:mask_10_graphics_376,x:637.2,y:30}).wait(1).to({graphics:mask_10_graphics_377,x:637.9,y:30}).wait(1).to({graphics:mask_10_graphics_378,x:638.5,y:30}).wait(1).to({graphics:mask_10_graphics_379,x:639,y:30}).wait(1).to({graphics:mask_10_graphics_380,x:639.5,y:30}).wait(1).to({graphics:mask_10_graphics_381,x:639.9,y:30}).wait(1).to({graphics:mask_10_graphics_382,x:640.3,y:30}).wait(1).to({graphics:mask_10_graphics_383,x:640.7,y:30}).wait(1).to({graphics:mask_10_graphics_384,x:641,y:30}).wait(1).to({graphics:mask_10_graphics_385,x:641.3,y:30}).wait(1).to({graphics:mask_10_graphics_386,x:641.5,y:30}).wait(1).to({graphics:mask_10_graphics_387,x:641.7,y:30}).wait(1).to({graphics:mask_10_graphics_388,x:641.9,y:30}).wait(1).to({graphics:mask_10_graphics_389,x:642,y:30}).wait(1).to({graphics:mask_10_graphics_390,x:642.2,y:30}).wait(1).to({graphics:mask_10_graphics_391,x:642.2,y:30}).wait(1).to({graphics:mask_10_graphics_392,x:642.3,y:30}).wait(1).to({graphics:mask_10_graphics_393,x:642.3,y:30}).wait(1).to({graphics:mask_10_graphics_394,x:642.4,y:30}).wait(86));

	// backgroundVerde
	this.instance_61 = new lib.backgroundVerdeInterna();
	this.instance_61.parent = this;
	this.instance_61.setTransform(565.5,35,1,1,0,0,0,-357.5,0);
	this.instance_61._off = true;

	var maskedShapeInstanceList = [this.instance_61];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(334).to({_off:false},0).wait(146));

	// backgroundBranco
	this.instance_62 = new lib.backgroundBranco();
	this.instance_62.parent = this;
	this.instance_62.setTransform(2234,360);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(279).to({_off:false},0).wait(1).to({x:2189.9},0).wait(1).to({x:2143.4},0).wait(1).to({x:2094.1},0).wait(1).to({x:2041.4},0).wait(1).to({x:1985},0).wait(1).to({x:1924},0).wait(1).to({x:1857.5},0).wait(1).to({x:1784.8},0).wait(1).to({x:1705.2},0).wait(1).to({x:1619.6},0).wait(1).to({x:1531.3},0).wait(1).to({x:1447.1},0).wait(1).to({x:1373.2},0).wait(1).to({x:1311.8},0).wait(1).to({x:1261.7},0).wait(1).to({x:1220.7},0).wait(1).to({x:1186.7},0).wait(1).to({x:1158},0).wait(1).to({x:1133.5},0).wait(1).to({x:1112.3},0).wait(1).to({x:1093.8},0).wait(1).to({x:1077.4},0).wait(1).to({x:1062.9},0).wait(1).to({x:1050},0).wait(1).to({x:1038.4},0).wait(1).to({x:1027.9},0).wait(1).to({x:1018.3},0).wait(1).to({x:1009.7},0).wait(1).to({x:1001.8},0).wait(1).to({x:994.6},0).wait(1).to({x:988},0).wait(1).to({x:982},0).wait(1).to({x:976.4},0).wait(1).to({x:971.3},0).wait(1).to({x:966.6},0).wait(1).to({x:962.3},0).wait(1).to({x:958.3},0).wait(1).to({x:954.6},0).wait(1).to({x:951.3},0).wait(1).to({x:948.2},0).wait(1).to({x:945.3},0).wait(1).to({x:942.7},0).wait(1).to({x:940.3},0).wait(1).to({x:938.1},0).wait(1).to({x:936.1},0).wait(1).to({x:934.3},0).wait(1).to({x:932.7},0).wait(1).to({x:931.2},0).wait(1).to({x:929.9},0).wait(1).to({x:928.7},0).wait(1).to({x:927.6},0).wait(1).to({x:926.7},0).wait(1).to({x:925.8},0).wait(1).to({x:925.1},0).wait(1).to({x:924.5},0).wait(1).to({x:924.1},0).wait(1).to({x:923.7},0).wait(1).to({x:923.4},0).wait(1).to({x:923.2},0).wait(1).to({x:923},0).wait(141));

	// dia
	this.instance_63 = new lib.confrontoTxt();
	this.instance_63.parent = this;
	this.instance_63.setTransform(1412.1,205.6,1,1,0,0,0,128.1,22.6);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(285).to({_off:false},0).wait(1).to({regX:250,x:1490.9},0).wait(1).to({x:1445.3},0).wait(1).to({x:1396.8},0).wait(1).to({x:1345},0).wait(1).to({x:1289.2},0).wait(1).to({x:1228.7},0).wait(1).to({x:1162.5},0).wait(1).to({x:1089.7},0).wait(1).to({x:1010.1},0).wait(1).to({x:925},0).wait(1).to({x:839.4},0).wait(1).to({x:760.5},0).wait(1).to({x:693.4},0).wait(1).to({x:638.8},0).wait(1).to({x:594.5},0).wait(1).to({x:558.2},0).wait(1).to({x:528},0).wait(1).to({x:502.5},0).wait(1).to({x:480.7},0).wait(1).to({x:461.8},0).wait(1).to({x:445.2},0).wait(1).to({x:430.6},0).wait(1).to({x:417.6},0).wait(1).to({x:406},0).wait(1).to({x:395.6},0).wait(1).to({x:386.1},0).wait(1).to({x:377.6},0).wait(1).to({x:369.8},0).wait(1).to({x:362.8},0).wait(1).to({x:356.3},0).wait(1).to({x:350.4},0).wait(1).to({x:345},0).wait(1).to({x:340.1},0).wait(1).to({x:335.6},0).wait(1).to({x:331.4},0).wait(1).to({x:327.6},0).wait(1).to({x:324.1},0).wait(1).to({x:320.9},0).wait(1).to({x:317.9},0).wait(1).to({x:315.2},0).wait(1).to({x:312.7},0).wait(1).to({x:310.5},0).wait(1).to({x:308.4},0).wait(1).to({x:306.6},0).wait(1).to({x:304.9},0).wait(1).to({x:303.3},0).wait(1).to({x:302},0).wait(1).to({x:300.7},0).wait(1).to({x:299.7},0).wait(1).to({x:298.7},0).wait(1).to({x:297.9},0).wait(1).to({x:297.2},0).wait(1).to({x:296.6},0).wait(1).to({x:296.1},0).wait(1).to({x:295.7},0).wait(1).to({x:295.4},0).wait(1).to({x:295.2},0).wait(1).to({x:295},0).wait(1).to({regX:128.1,x:173.1},0).wait(136));

	// time1
	this.instance_64 = new lib.confrontoTxtTime1();
	this.instance_64.parent = this;
	this.instance_64.setTransform(1484.8,268.1,1,1,0,0,0,200.8,43.1);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(288).to({_off:false},0).wait(1).to({regX:250,x:1490.9},0).wait(1).to({x:1445.3},0).wait(1).to({x:1396.8},0).wait(1).to({x:1345},0).wait(1).to({x:1289.2},0).wait(1).to({x:1228.7},0).wait(1).to({x:1162.5},0).wait(1).to({x:1089.7},0).wait(1).to({x:1010.1},0).wait(1).to({x:925},0).wait(1).to({x:839.4},0).wait(1).to({x:760.5},0).wait(1).to({x:693.4},0).wait(1).to({x:638.8},0).wait(1).to({x:594.5},0).wait(1).to({x:558.2},0).wait(1).to({x:528},0).wait(1).to({x:502.5},0).wait(1).to({x:480.7},0).wait(1).to({x:461.8},0).wait(1).to({x:445.2},0).wait(1).to({x:430.6},0).wait(1).to({x:417.6},0).wait(1).to({x:406},0).wait(1).to({x:395.6},0).wait(1).to({x:386.1},0).wait(1).to({x:377.6},0).wait(1).to({x:369.8},0).wait(1).to({x:362.8},0).wait(1).to({x:356.3},0).wait(1).to({x:350.4},0).wait(1).to({x:345},0).wait(1).to({x:340.1},0).wait(1).to({x:335.6},0).wait(1).to({x:331.4},0).wait(1).to({x:327.6},0).wait(1).to({x:324.1},0).wait(1).to({x:320.9},0).wait(1).to({x:317.9},0).wait(1).to({x:315.2},0).wait(1).to({x:312.7},0).wait(1).to({x:310.5},0).wait(1).to({x:308.4},0).wait(1).to({x:306.6},0).wait(1).to({x:304.9},0).wait(1).to({x:303.3},0).wait(1).to({x:302},0).wait(1).to({x:300.7},0).wait(1).to({x:299.7},0).wait(1).to({x:298.7},0).wait(1).to({x:297.9},0).wait(1).to({x:297.2},0).wait(1).to({x:296.6},0).wait(1).to({x:296.1},0).wait(1).to({x:295.7},0).wait(1).to({x:295.4},0).wait(1).to({x:295.2},0).wait(1).to({x:295},0).wait(1).to({regX:200.8,x:245.8},0).wait(133));

	// x
	this.instance_65 = new lib.confrontoTxtX();
	this.instance_65.parent = this;
	this.instance_65.setTransform(1302.9,333.1,1,1,0,0,0,18.9,43.1);
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(291).to({_off:false},0).wait(1).to({regY:49.6,x:1259.8,y:339.6},0).wait(1).to({x:1214.2},0).wait(1).to({x:1165.7},0).wait(1).to({x:1113.9},0).wait(1).to({x:1058.1},0).wait(1).to({x:997.6},0).wait(1).to({x:931.4},0).wait(1).to({x:858.6},0).wait(1).to({x:779},0).wait(1).to({x:693.9},0).wait(1).to({x:608.3},0).wait(1).to({x:529.4},0).wait(1).to({x:462.3},0).wait(1).to({x:407.7},0).wait(1).to({x:363.4},0).wait(1).to({x:327.1},0).wait(1).to({x:296.9},0).wait(1).to({x:271.4},0).wait(1).to({x:249.6},0).wait(1).to({x:230.7},0).wait(1).to({x:214.1},0).wait(1).to({x:199.5},0).wait(1).to({x:186.5},0).wait(1).to({x:174.9},0).wait(1).to({x:164.5},0).wait(1).to({x:155},0).wait(1).to({x:146.5},0).wait(1).to({x:138.7},0).wait(1).to({x:131.7},0).wait(1).to({x:125.2},0).wait(1).to({x:119.3},0).wait(1).to({x:113.9},0).wait(1).to({x:109},0).wait(1).to({x:104.5},0).wait(1).to({x:100.3},0).wait(1).to({x:96.5},0).wait(1).to({x:93},0).wait(1).to({x:89.8},0).wait(1).to({x:86.8},0).wait(1).to({x:84.1},0).wait(1).to({x:81.6},0).wait(1).to({x:79.4},0).wait(1).to({x:77.3},0).wait(1).to({x:75.5},0).wait(1).to({x:73.8},0).wait(1).to({x:72.2},0).wait(1).to({x:70.9},0).wait(1).to({x:69.6},0).wait(1).to({x:68.6},0).wait(1).to({x:67.6},0).wait(1).to({x:66.8},0).wait(1).to({x:66.1},0).wait(1).to({x:65.5},0).wait(1).to({x:65},0).wait(1).to({x:64.6},0).wait(1).to({x:64.3},0).wait(1).to({x:64.1},0).wait(1).to({x:63.9},0).wait(1).to({regY:43.1,y:333.1},0).wait(130));

	// time2
	this.instance_66 = new lib.confrontoTxtTime2();
	this.instance_66.parent = this;
	this.instance_66.setTransform(1520.6,414.1,1,1,0,0,0,236.6,43.1);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(294).to({_off:false},0).wait(1).to({regX:250,x:1490.9},0).wait(1).to({x:1445.3},0).wait(1).to({x:1396.8},0).wait(1).to({x:1345},0).wait(1).to({x:1289.2},0).wait(1).to({x:1228.7},0).wait(1).to({x:1162.5},0).wait(1).to({x:1089.7},0).wait(1).to({x:1010.1},0).wait(1).to({x:925},0).wait(1).to({x:839.4},0).wait(1).to({x:760.5},0).wait(1).to({x:693.4},0).wait(1).to({x:638.8},0).wait(1).to({x:594.5},0).wait(1).to({x:558.2},0).wait(1).to({x:528},0).wait(1).to({x:502.5},0).wait(1).to({x:480.7},0).wait(1).to({x:461.8},0).wait(1).to({x:445.2},0).wait(1).to({x:430.6},0).wait(1).to({x:417.6},0).wait(1).to({x:406},0).wait(1).to({x:395.6},0).wait(1).to({x:386.1},0).wait(1).to({x:377.6},0).wait(1).to({x:369.8},0).wait(1).to({x:362.8},0).wait(1).to({x:356.3},0).wait(1).to({x:350.4},0).wait(1).to({x:345},0).wait(1).to({x:340.1},0).wait(1).to({x:335.6},0).wait(1).to({x:331.4},0).wait(1).to({x:327.6},0).wait(1).to({x:324.1},0).wait(1).to({x:320.9},0).wait(1).to({x:317.9},0).wait(1).to({x:315.2},0).wait(1).to({x:312.7},0).wait(1).to({x:310.5},0).wait(1).to({x:308.4},0).wait(1).to({x:306.6},0).wait(1).to({x:304.9},0).wait(1).to({x:303.3},0).wait(1).to({x:302},0).wait(1).to({x:300.7},0).wait(1).to({x:299.7},0).wait(1).to({x:298.7},0).wait(1).to({x:297.9},0).wait(1).to({x:297.2},0).wait(1).to({x:296.6},0).wait(1).to({x:296.1},0).wait(1).to({x:295.7},0).wait(1).to({x:295.4},0).wait(1).to({x:295.2},0).wait(1).to({x:295},0).wait(1).to({regX:236.6,x:281.6},0).wait(127));

	// estádio
	this.instance_67 = new lib.confrontoTxtEstadio();
	this.instance_67.parent = this;
	this.instance_67.setTransform(1443.8,484.6,1,1,0,0,0,159.8,19.6);
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(297).to({_off:false},0).wait(1).to({regX:250,x:1490.9},0).wait(1).to({x:1445.3},0).wait(1).to({x:1396.8},0).wait(1).to({x:1345},0).wait(1).to({x:1289.2},0).wait(1).to({x:1228.7},0).wait(1).to({x:1162.5},0).wait(1).to({x:1089.7},0).wait(1).to({x:1010.1},0).wait(1).to({x:925},0).wait(1).to({x:839.4},0).wait(1).to({x:760.5},0).wait(1).to({x:693.4},0).wait(1).to({x:638.8},0).wait(1).to({x:594.5},0).wait(1).to({x:558.2},0).wait(1).to({x:528},0).wait(1).to({x:502.5},0).wait(1).to({x:480.7},0).wait(1).to({x:461.8},0).wait(1).to({x:445.2},0).wait(1).to({x:430.6},0).wait(1).to({x:417.6},0).wait(1).to({x:406},0).wait(1).to({x:395.6},0).wait(1).to({x:386.1},0).wait(1).to({x:377.6},0).wait(1).to({x:369.8},0).wait(1).to({x:362.8},0).wait(1).to({x:356.3},0).wait(1).to({x:350.4},0).wait(1).to({x:345},0).wait(1).to({x:340.1},0).wait(1).to({x:335.6},0).wait(1).to({x:331.4},0).wait(1).to({x:327.6},0).wait(1).to({x:324.1},0).wait(1).to({x:320.9},0).wait(1).to({x:317.9},0).wait(1).to({x:315.2},0).wait(1).to({x:312.7},0).wait(1).to({x:310.5},0).wait(1).to({x:308.4},0).wait(1).to({x:306.6},0).wait(1).to({x:304.9},0).wait(1).to({x:303.3},0).wait(1).to({x:302},0).wait(1).to({x:300.7},0).wait(1).to({x:299.7},0).wait(1).to({x:298.7},0).wait(1).to({x:297.9},0).wait(1).to({x:297.2},0).wait(1).to({x:296.6},0).wait(1).to({x:296.1},0).wait(1).to({x:295.7},0).wait(1).to({x:295.4},0).wait(1).to({x:295.2},0).wait(1).to({x:295},0).wait(1).to({regX:159.8,x:204.8},0).wait(124));

	// confrontoEscudo2
	this.instance_68 = new lib.confrontoEscudo2();
	this.instance_68.parent = this;
	this.instance_68.setTransform(954.5,542.5,1,1,0,0,0,17.5,17.5);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(312).to({_off:false},0).wait(1).to({regX:32.5,regY:32.5,x:933,y:557.5},0).wait(1).to({x:893.2},0).wait(1).to({x:849.3},0).wait(1).to({x:800.1},0).wait(1).to({x:744},0).wait(1).to({x:679.7},0).wait(1).to({x:608.5},0).wait(1).to({x:539.7},0).wait(1).to({x:484.1},0).wait(1).to({x:443},0).wait(1).to({x:412.5},0).wait(1).to({x:389.2},0).wait(1).to({x:370.7},0).wait(1).to({x:355.8},0).wait(1).to({x:343.4},0).wait(1).to({x:332.9},0).wait(1).to({x:324.1},0).wait(1).to({x:316.4},0).wait(1).to({x:309.8},0).wait(1).to({x:304},0).wait(1).to({x:299},0).wait(1).to({x:294.6},0).wait(1).to({x:290.7},0).wait(1).to({x:287.2},0).wait(1).to({x:284.2},0).wait(1).to({x:281.5},0).wait(1).to({x:279.2},0).wait(1).to({x:277.2},0).wait(1).to({x:275.4},0).wait(1).to({x:273.8},0).wait(1).to({x:272.5},0).wait(1).to({x:271.3},0).wait(1).to({x:270.3},0).wait(1).to({x:269.5},0).wait(1).to({x:268.9},0).wait(1).to({x:268.4},0).wait(1).to({x:268},0).wait(1).to({x:267.7},0).wait(1).to({x:267.5},0).wait(1).to({regX:17.5,regY:17.5,x:252.5,y:542.5},0).wait(128));

	// confrontoPlacar2
	this.instance_69 = new lib.confrontoPlacar2();
	this.instance_69.parent = this;
	this.instance_69.setTransform(926.4,555.4,1,1,0,0,0,14.4,25.4);
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(309).to({_off:false},0).wait(1).to({regX:0,regY:25.5,x:875.5,y:555.5},0).wait(1).to({x:835.7},0).wait(1).to({x:791.8},0).wait(1).to({x:742.6},0).wait(1).to({x:686.5},0).wait(1).to({x:622.2},0).wait(1).to({x:551},0).wait(1).to({x:482.2},0).wait(1).to({x:426.6},0).wait(1).to({x:385.5},0).wait(1).to({x:355},0).wait(1).to({x:331.7},0).wait(1).to({x:313.2},0).wait(1).to({x:298.3},0).wait(1).to({x:285.9},0).wait(1).to({x:275.4},0).wait(1).to({x:266.6},0).wait(1).to({x:258.9},0).wait(1).to({x:252.3},0).wait(1).to({x:246.5},0).wait(1).to({x:241.5},0).wait(1).to({x:237.1},0).wait(1).to({x:233.2},0).wait(1).to({x:229.7},0).wait(1).to({x:226.7},0).wait(1).to({x:224},0).wait(1).to({x:221.7},0).wait(1).to({x:219.7},0).wait(1).to({x:217.9},0).wait(1).to({x:216.3},0).wait(1).to({x:215},0).wait(1).to({x:213.8},0).wait(1).to({x:212.8},0).wait(1).to({x:212},0).wait(1).to({x:211.4},0).wait(1).to({x:210.9},0).wait(1).to({x:210.5},0).wait(1).to({x:210.2},0).wait(1).to({x:210},0).wait(1).to({regX:14.4,regY:25.4,x:224.4,y:555.4},0).wait(131));

	// confrontoX
	this.instance_70 = new lib.confrontoX();
	this.instance_70.parent = this;
	this.instance_70.setTransform(876.9,559.6,1,1,0,0,0,-0.1,19.6);
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(306).to({_off:false},0).wait(1).to({regX:0,x:840.5},0).wait(1).to({x:800.7},0).wait(1).to({x:756.8},0).wait(1).to({x:707.6},0).wait(1).to({x:651.5},0).wait(1).to({x:587.2},0).wait(1).to({x:516},0).wait(1).to({x:447.2},0).wait(1).to({x:391.6},0).wait(1).to({x:350.5},0).wait(1).to({x:320},0).wait(1).to({x:296.7},0).wait(1).to({x:278.2},0).wait(1).to({x:263.3},0).wait(1).to({x:250.9},0).wait(1).to({x:240.4},0).wait(1).to({x:231.6},0).wait(1).to({x:223.9},0).wait(1).to({x:217.3},0).wait(1).to({x:211.5},0).wait(1).to({x:206.5},0).wait(1).to({x:202.1},0).wait(1).to({x:198.2},0).wait(1).to({x:194.7},0).wait(1).to({x:191.7},0).wait(1).to({x:189},0).wait(1).to({x:186.7},0).wait(1).to({x:184.7},0).wait(1).to({x:182.9},0).wait(1).to({x:181.3},0).wait(1).to({x:180},0).wait(1).to({x:178.8},0).wait(1).to({x:177.8},0).wait(1).to({x:177},0).wait(1).to({x:176.4},0).wait(1).to({x:175.9},0).wait(1).to({x:175.5},0).wait(1).to({x:175.2},0).wait(1).to({x:175},0).wait(1).to({regX:-0.1,x:174.9},0).wait(134));

	// confrontoPlacar1
	this.instance_71 = new lib.confrontoPlacar1();
	this.instance_71.parent = this;
	this.instance_71.setTransform(856.4,555.4,1,1,0,0,0,14.4,25.4);
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(303).to({_off:false},0).wait(1).to({regX:0,regY:25.5,x:805.5,y:555.5},0).wait(1).to({x:765.7},0).wait(1).to({x:721.8},0).wait(1).to({x:672.6},0).wait(1).to({x:616.5},0).wait(1).to({x:552.2},0).wait(1).to({x:481},0).wait(1).to({x:412.2},0).wait(1).to({x:356.6},0).wait(1).to({x:315.5},0).wait(1).to({x:285},0).wait(1).to({x:261.7},0).wait(1).to({x:243.2},0).wait(1).to({x:228.3},0).wait(1).to({x:215.9},0).wait(1).to({x:205.4},0).wait(1).to({x:196.6},0).wait(1).to({x:188.9},0).wait(1).to({x:182.3},0).wait(1).to({x:176.5},0).wait(1).to({x:171.5},0).wait(1).to({x:167.1},0).wait(1).to({x:163.2},0).wait(1).to({x:159.7},0).wait(1).to({x:156.7},0).wait(1).to({x:154},0).wait(1).to({x:151.7},0).wait(1).to({x:149.7},0).wait(1).to({x:147.9},0).wait(1).to({x:146.3},0).wait(1).to({x:145},0).wait(1).to({x:143.8},0).wait(1).to({x:142.8},0).wait(1).to({x:142},0).wait(1).to({x:141.4},0).wait(1).to({x:140.9},0).wait(1).to({x:140.5},0).wait(1).to({x:140.2},0).wait(1).to({x:140},0).wait(1).to({regX:14.4,regY:25.4,x:154.4,y:555.4},0).wait(137));

	// confrontoEscudo1
	this.instance_72 = new lib.confrontoEscudo1();
	this.instance_72.parent = this;
	this.instance_72.setTransform(769.5,542.5,1,1,0,0,0,17.5,17.5);
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(300).to({_off:false},0).wait(1).to({regX:32.5,regY:32.5,x:748,y:557.5},0).wait(1).to({x:708.2},0).wait(1).to({x:664.3},0).wait(1).to({x:615.1},0).wait(1).to({x:559},0).wait(1).to({x:494.7},0).wait(1).to({x:423.5},0).wait(1).to({x:354.7},0).wait(1).to({x:299.1},0).wait(1).to({x:258},0).wait(1).to({x:227.5},0).wait(1).to({x:204.2},0).wait(1).to({x:185.7},0).wait(1).to({x:170.8},0).wait(1).to({x:158.4},0).wait(1).to({x:147.9},0).wait(1).to({x:139.1},0).wait(1).to({x:131.4},0).wait(1).to({x:124.8},0).wait(1).to({x:119},0).wait(1).to({x:114},0).wait(1).to({x:109.6},0).wait(1).to({x:105.7},0).wait(1).to({x:102.2},0).wait(1).to({x:99.2},0).wait(1).to({x:96.5},0).wait(1).to({x:94.2},0).wait(1).to({x:92.2},0).wait(1).to({x:90.4},0).wait(1).to({x:88.8},0).wait(1).to({x:87.5},0).wait(1).to({x:86.3},0).wait(1).to({x:85.3},0).wait(1).to({x:84.5},0).wait(1).to({x:83.9},0).wait(1).to({x:83.4},0).wait(1).to({x:83},0).wait(1).to({x:82.7},0).wait(1).to({x:82.5},0).wait(1).to({regX:17.5,regY:17.5,x:67.5,y:542.5},0).wait(140));

	// txtBrasileiro
	this.instance_73 = new lib.txtBrasileiro();
	this.instance_73.parent = this;
	this.instance_73.setTransform(1953,363);
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(28).to({_off:false},0).wait(1).to({regX:3.6,regY:-1.2,x:1907.1,y:361.8},0).wait(1).to({x:1854.1},0).wait(1).to({x:1797.1},0).wait(1).to({x:1735.1},0).wait(1).to({x:1667},0).wait(1).to({x:1591.4},0).wait(1).to({x:1506.9},0).wait(1).to({x:1413.4},0).wait(1).to({x:1315},0).wait(1).to({x:1221.9},0).wait(1).to({x:1143.7},0).wait(1).to({x:1082.1},0).wait(1).to({x:1033.9},0).wait(1).to({x:995.7},0).wait(1).to({x:964.6},0).wait(1).to({x:938.8},0).wait(1).to({x:917.1},0).wait(1).to({x:898.5},0).wait(1).to({x:882.5},0).wait(1).to({x:868.5},0).wait(1).to({x:856.1},0).wait(1).to({x:845.2},0).wait(1).to({x:835.5},0).wait(1).to({x:826.8},0).wait(1).to({x:819.1},0).wait(1).to({x:812.1},0).wait(1).to({x:805.8},0).wait(1).to({x:800.1},0).wait(1).to({x:795},0).wait(1).to({x:790.3},0).wait(1).to({x:786.1},0).wait(1).to({x:782.4},0).wait(1).to({x:778.9},0).wait(1).to({x:775.9},0).wait(1).to({x:773.1},0).wait(1).to({x:770.6},0).wait(1).to({x:768.4},0).wait(1).to({x:766.4},0).wait(1).to({x:764.7},0).wait(1).to({x:763.1},0).wait(1).to({x:761.8},0).wait(1).to({x:760.6},0).wait(1).to({x:759.6},0).wait(1).to({x:758.8},0).wait(1).to({x:758.1},0).wait(1).to({x:757.5},0).wait(1).to({x:757.1},0).wait(1).to({x:756.8},0).wait(1).to({x:756.7},0).wait(1).to({regX:0,regY:0,x:753,y:363},0).to({x:675.4},196).wait(1).to({regX:3.6,regY:-1.2,x:633.2,y:361.8},0).wait(1).to({x:584.2},0).wait(1).to({x:531.5},0).wait(1).to({x:474.1},0).wait(1).to({x:411.2},0).wait(1).to({x:341.3},0).wait(1).to({x:263.2},0).wait(1).to({x:176.7},0).wait(1).to({x:85.8},0).wait(1).to({x:-0.3},0).wait(1).to({x:-72.6},0).wait(1).to({x:-129.5},0).wait(1).to({x:-174.1},0).wait(1).to({x:-209.4},0).wait(1).to({x:-238.2},0).wait(1).to({x:-262},0).wait(1).to({x:-282.1},0).wait(1).to({x:-299.2},0).wait(1).to({x:-314.1},0).wait(1).to({x:-327},0).wait(1).to({x:-338.4},0).wait(1).to({x:-348.5},0).wait(1).to({x:-357.5},0).wait(1).to({x:-365.5},0).wait(1).to({x:-372.7},0).wait(1).to({x:-379.2},0).wait(1).to({x:-385},0).wait(1).to({x:-390.2},0).wait(1).to({x:-395},0).wait(1).to({x:-399.3},0).wait(1).to({x:-403.1},0).wait(1).to({x:-406.6},0).wait(1).to({x:-409.8},0).wait(1).to({x:-412.6},0).wait(1).to({x:-415.2},0).wait(1).to({x:-417.5},0).wait(1).to({x:-419.6},0).wait(1).to({x:-421.4},0).wait(1).to({x:-423},0).wait(1).to({x:-424.4},0).wait(1).to({x:-425.7},0).wait(1).to({x:-426.8},0).wait(1).to({x:-427.7},0).wait(1).to({x:-428.5},0).wait(1).to({x:-429.1},0).wait(1).to({x:-429.6},0).wait(1).to({x:-430},0).wait(1).to({x:-430.2},0).wait(1).to({x:-430.4},0).wait(1).to({regX:0,regY:0,x:-434.1,y:363},0).wait(156));

	// txtCampeonato
	this.instance_74 = new lib.txtCampeonato();
	this.instance_74.parent = this;
	this.instance_74.setTransform(-808,286);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(23).to({_off:false},0).wait(1).to({regX:0.1,regY:9.4,x:-758.3,y:295.4},0).wait(1).to({x:-705.4},0).wait(1).to({x:-648.3},0).wait(1).to({x:-586.3},0).wait(1).to({x:-518.2},0).wait(1).to({x:-442.6},0).wait(1).to({x:-358.1},0).wait(1).to({x:-264.7},0).wait(1).to({x:-166.2},0).wait(1).to({x:-73.1},0).wait(1).to({x:5},0).wait(1).to({x:66.6},0).wait(1).to({x:114.8},0).wait(1).to({x:153},0).wait(1).to({x:184.1},0).wait(1).to({x:209.9},0).wait(1).to({x:231.6},0).wait(1).to({x:250.2},0).wait(1).to({x:266.2},0).wait(1).to({x:280.2},0).wait(1).to({x:292.6},0).wait(1).to({x:303.5},0).wait(1).to({x:313.2},0).wait(1).to({x:321.9},0).wait(1).to({x:329.6},0).wait(1).to({x:336.6},0).wait(1).to({x:342.9},0).wait(1).to({x:348.6},0).wait(1).to({x:353.7},0).wait(1).to({x:358.4},0).wait(1).to({x:362.6},0).wait(1).to({x:366.3},0).wait(1).to({x:369.8},0).wait(1).to({x:372.8},0).wait(1).to({x:375.6},0).wait(1).to({x:378.1},0).wait(1).to({x:380.3},0).wait(1).to({x:382.3},0).wait(1).to({x:384},0).wait(1).to({x:385.6},0).wait(1).to({x:386.9},0).wait(1).to({x:388.1},0).wait(1).to({x:389.1},0).wait(1).to({x:389.9},0).wait(1).to({x:390.6},0).wait(1).to({x:391.2},0).wait(1).to({x:391.6},0).wait(1).to({x:391.9},0).wait(1).to({x:392},0).wait(1).to({regX:0,regY:0,y:286},0).to({x:454.7},196).wait(1).to({regX:0.1,regY:9.4,x:403.2,y:295.4},0).wait(1).to({x:348.1},0).wait(1).to({x:288.7},0).wait(1).to({x:224.1},0).wait(1).to({x:153.1},0).wait(1).to({x:74.4},0).wait(1).to({x:-13.5},0).wait(1).to({x:-110.9},0).wait(1).to({x:-213.4},0).wait(1).to({x:-310.4},0).wait(1).to({x:-391.8},0).wait(1).to({x:-456},0).wait(1).to({x:-506.1},0).wait(1).to({x:-546},0).wait(1).to({x:-578.3},0).wait(1).to({x:-605.2},0).wait(1).to({x:-627.8},0).wait(1).to({x:-647.1},0).wait(1).to({x:-663.9},0).wait(1).to({x:-678.5},0).wait(1).to({x:-691.3},0).wait(1).to({x:-702.7},0).wait(1).to({x:-712.8},0).wait(1).to({x:-721.8},0).wait(1).to({x:-729.9},0).wait(1).to({x:-737.2},0).wait(1).to({x:-743.7},0).wait(1).to({x:-749.6},0).wait(1).to({x:-755},0).wait(1).to({x:-759.8},0).wait(1).to({x:-764.2},0).wait(1).to({x:-768.1},0).wait(1).to({x:-771.7},0).wait(1).to({x:-774.9},0).wait(1).to({x:-777.8},0).wait(1).to({x:-780.4},0).wait(1).to({x:-782.7},0).wait(1).to({x:-784.7},0).wait(1).to({x:-786.6},0).wait(1).to({x:-788.2},0).wait(1).to({x:-789.6},0).wait(1).to({x:-790.8},0).wait(1).to({x:-791.8},0).wait(1).to({x:-792.7},0).wait(1).to({x:-793.4},0).wait(1).to({x:-794},0).wait(1).to({x:-794.4},0).wait(1).to({x:-794.7},0).wait(1).to({x:-794.9},0).wait(1).to({regX:0,regY:0,x:-795.1,y:286},0).wait(161));

	// barraVerde
	this.instance_75 = new lib.barra();
	this.instance_75.parent = this;
	this.instance_75.setTransform(854.8,461,0.002,1,0,0,0,140.1,0);
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(76).to({_off:false},0).wait(1).to({regX:0,scaleX:0.13,x:836.9},0).wait(1).to({scaleX:0.27,x:817.2},0).wait(1).to({scaleX:0.43,x:794.5},0).wait(1).to({scaleX:0.62,x:767.7},0).wait(1).to({scaleX:0.85,x:736},0).wait(1).to({scaleX:1.09,x:702.2},0).wait(1).to({scaleX:1.28,x:674.9},0).wait(1).to({scaleX:1.42,x:656.4},0).wait(1).to({scaleX:1.51,x:643.6},0).wait(1).to({scaleX:1.57,x:634.3},0).wait(1).to({scaleX:1.62,x:627.2},0).wait(1).to({scaleX:1.66,x:621.7},0).wait(1).to({scaleX:1.7,x:617.2},0).wait(1).to({scaleX:1.72,x:613.5},0).wait(1).to({scaleX:1.74,x:610.5},0).wait(1).to({scaleX:1.76,x:607.9},0).wait(1).to({scaleX:1.78,x:605.7},0).wait(1).to({scaleX:1.79,x:603.9},0).wait(1).to({scaleX:1.8,x:602.3},0).wait(1).to({scaleX:1.81,x:601},0).wait(1).to({scaleX:1.82,x:599.9},0).wait(1).to({scaleX:1.83,x:598.9},0).wait(1).to({scaleX:1.83,x:598.2},0).wait(1).to({scaleX:1.84,x:597.5},0).wait(1).to({scaleX:1.84,x:597},0).wait(1).to({scaleX:1.84,x:596.5},0).wait(1).to({scaleX:1.85,x:596.2},0).wait(1).to({scaleX:1.85,x:596},0).wait(1).to({scaleX:1.85,x:595.8},0).wait(1).to({scaleX:1.85,x:595.7},0).wait(1).to({regX:140,x:854.8},0).wait(1).to({regX:0,scaleX:1.8,x:589.4},0).wait(1).to({scaleX:1.74,x:582.4},0).wait(1).to({scaleX:1.67,x:574.5},0).wait(1).to({scaleX:1.6,x:565.3},0).wait(1).to({scaleX:1.51,x:554.5},0).wait(1).to({scaleX:1.41,x:542.3},0).wait(1).to({scaleX:1.31,x:530.7},0).wait(1).to({scaleX:1.24,x:522},0).wait(1).to({scaleX:1.19,x:515.9},0).wait(1).to({scaleX:1.15,x:511.5},0).wait(1).to({scaleX:1.13,x:508.3},0).wait(1).to({scaleX:1.11,x:505.7},0).wait(1).to({scaleX:1.09,x:503.6},0).wait(1).to({scaleX:1.07,x:501.9},0).wait(1).to({scaleX:1.06,x:500.5},0).wait(1).to({scaleX:1.05,x:499.4},0).wait(1).to({scaleX:1.04,x:498.3},0).wait(1).to({scaleX:1.04,x:497.5},0).wait(1).to({scaleX:1.03,x:496.8},0).wait(1).to({scaleX:1.03,x:496.1},0).wait(1).to({scaleX:1.02,x:495.6},0).wait(1).to({scaleX:1.02,x:495.1},0).wait(1).to({scaleX:1.01,x:494.7},0).wait(1).to({scaleX:1.01,x:494.3},0).wait(1).to({scaleX:1.01,x:494.1},0).wait(1).to({scaleX:1.01,x:493.8},0).wait(1).to({scaleX:1,x:493.6},0).wait(1).to({scaleX:1,x:493.4},0).wait(1).to({scaleX:1,x:493.3},0).wait(1).to({scaleX:1,x:493.2},0).wait(1).to({x:493.1},0).wait(1).to({scaleX:1,x:493},0).wait(2).to({regX:140,x:633},0).wait(133).to({regX:-140,x:323},0).wait(1).to({regX:0,scaleX:0.95,x:457},0).wait(1).to({scaleX:0.91,x:450.6},0).wait(1).to({scaleX:0.85,x:443.6},0).wait(1).to({scaleX:0.79,x:435.9},0).wait(1).to({scaleX:0.73,x:427.3},0).wait(1).to({scaleX:0.65,x:417.5},0).wait(1).to({scaleX:0.57,x:406.6},0).wait(1).to({scaleX:0.48,x:394.8},0).wait(1).to({scaleX:0.39,x:383.6},0).wait(1).to({scaleX:0.32,x:374.3},0).wait(1).to({scaleX:0.26,x:367.2},0).wait(1).to({scaleX:0.22,x:361.8},0).wait(1).to({scaleX:0.19,x:357.5},0).wait(1).to({scaleX:0.16,x:354.1},0).wait(1).to({scaleX:0.14,x:351.3},0).wait(1).to({scaleX:0.12,x:349},0).wait(1).to({scaleX:0.11,x:347},0).wait(1).to({scaleX:0.1,x:345.3},0).wait(1).to({scaleX:0.08,x:343.9},0).wait(1).to({scaleX:0.07,x:342.6},0).wait(1).to({scaleX:0.07,x:341.5},0).wait(1).to({scaleX:0.06,x:340.5},0).wait(1).to({scaleX:0.05,x:339.6},0).wait(1).to({scaleX:0.04,x:338.8},0).wait(1).to({scaleX:0.04,x:338.1},0).wait(1).to({scaleX:0.03,x:337.5},0).wait(1).to({scaleX:0.03,x:336.9},0).wait(1).to({scaleX:0.03,x:336.4},0).wait(1).to({scaleX:0.02,x:336},0).wait(1).to({scaleX:0.02,x:335.6},0).wait(1).to({scaleX:0.02,x:335.2},0).wait(1).to({scaleX:0.01,x:334.9},0).wait(1).to({scaleX:0.01,x:334.6},0).wait(1).to({scaleX:0.01,x:334.4},0).wait(1).to({scaleX:0.01,x:334.1},0).wait(1).to({scaleX:0.01,x:334},0).wait(1).to({scaleX:0.01,x:333.8},0).wait(1).to({scaleX:0.01,x:333.7},0).wait(1).to({scaleX:0,x:333.5},0).wait(1).to({scaleX:0,x:333.4},0).wait(2).to({scaleX:0,x:333.3},0).wait(3).to({regX:-140.1,x:333},0).to({_off:true},1).wait(160));

	// txtSerie
	this.instance_76 = new lib.txtSerie();
	this.instance_76.parent = this;
	this.instance_76.setTransform(584.8,460.9);
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(117).to({_off:false},0).to({x:715.3},50,cjs.Ease.get(1)).to({x:735.3},79).wait(1).to({regY:2.9,x:716.7,y:463.8},0).wait(1).to({x:696.1},0).wait(1).to({x:672.9},0).wait(1).to({x:646.3},0).wait(1).to({x:615.2},0).wait(1).to({x:579.6},0).wait(1).to({x:544.5},0).wait(1).to({x:516.8,y:463.9},0).wait(1).to({x:497.2},0).wait(1).to({x:483.2},0).wait(1).to({x:472.7},0).wait(1).to({x:464.6},0).wait(1).to({x:458},0).wait(1).to({x:452.7},0).wait(1).to({x:448.2},0).wait(1).to({x:444.4},0).wait(1).to({x:441.2},0).wait(1).to({x:438.5},0).wait(1).to({x:436.2},0).wait(1).to({x:434.1},0).wait(1).to({x:432.4},0).wait(1).to({x:430.8},0).wait(1).to({x:429.5},0).wait(1).to({x:428.4},0).wait(1).to({x:427.4},0).wait(1).to({x:426.6},0).wait(1).to({x:425.9},0).wait(1).to({x:425.3},0).wait(1).to({x:424.8},0).wait(1).to({x:424.4},0).wait(1).to({x:424.1},0).wait(1).to({x:423.9},0).wait(1).to({x:423.7},0).wait(1).to({x:423.6},0).wait(1).to({regY:0,y:461},0).to({_off:true},1).wait(198));

	// noiseInterna
	this.instance_77 = new lib.noiseInterna();
	this.instance_77.parent = this;
	this.instance_77.setTransform(640,360);
	this.instance_77.alpha = 0;
	this.instance_77._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(275).to({_off:false},0).to({alpha:1},49).wait(156));

	// noise
	this.instance_78 = new lib.noise_1();
	this.instance_78.parent = this;
	this.instance_78.setTransform(640,360);
	this.instance_78.alpha = 0;
	this.instance_78._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(4).to({_off:false},0).to({alpha:1},49).wait(222).to({alpha:0},49).wait(156));

	// faixaBranca
	this.instance_79 = new lib.faixaBranca();
	this.instance_79.parent = this;
	this.instance_79.setTransform(-551.5,360);
	this.instance_79.alpha = 0.328;
	this.instance_79._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(21).to({_off:false},0).wait(1).to({x:-453.1},0).wait(1).to({x:-347.7},0).wait(1).to({x:-233.9},0).wait(1).to({x:-110},0).wait(1).to({x:26.6},0).wait(1).to({x:178.6},0).wait(1).to({x:348.9},0).wait(1).to({x:536.9},0).wait(1).to({x:732.2},0).wait(1).to({x:912.5},0).wait(1).to({x:1060.5},0).wait(1).to({x:1175.9},0).wait(1).to({x:1265.9},0).wait(1).to({x:1337.6},0).wait(1).to({x:1395.9},0).wait(1).to({x:1444.3},0).wait(1).to({x:1485.1},0).wait(1).to({x:1520.1},0).wait(1).to({x:1550.4},0).wait(1).to({x:1576.8},0).wait(1).to({x:1600.1},0).wait(1).to({x:1620.7},0).wait(1).to({x:1639},0).wait(1).to({x:1655.3},0).wait(1).to({x:1669.9},0).wait(1).to({x:1683.1},0).wait(1).to({x:1694.9},0).wait(1).to({x:1705.6},0).wait(1).to({x:1715.2},0).wait(1).to({x:1723.8},0).wait(1).to({x:1731.6},0).wait(1).to({x:1738.7},0).wait(1).to({x:1745},0).wait(1).to({x:1750.7},0).wait(1).to({x:1755.8},0).wait(1).to({x:1760.4},0).wait(1).to({x:1764.4},0).wait(1).to({x:1768},0).wait(1).to({x:1771.2},0).wait(1).to({x:1773.9},0).wait(1).to({x:1776.3},0).wait(1).to({x:1778.3},0).wait(1).to({x:1780},0).wait(1).to({x:1781.4},0).wait(1).to({x:1782.5},0).wait(1).to({x:1783.4},0).wait(1).to({x:1784},0).wait(1).to({x:1784.3},0).wait(1).to({x:1784.4},0).wait(206).to({x:1688.9},0).wait(1).to({x:1586.7},0).wait(1).to({x:1476.4},0).wait(1).to({x:1356.2},0).wait(1).to({x:1223.7},0).wait(1).to({x:1076.3},0).wait(1).to({x:911.1},0).wait(1).to({x:728.8},0).wait(1).to({x:539.4},0).wait(1).to({x:364.5},0).wait(1).to({x:221},0).wait(1).to({x:109},0).wait(1).to({x:21.7},0).wait(1).to({x:-47.7},0).wait(1).to({x:-104.3},0).wait(1).to({x:-151.2},0).wait(1).to({x:-190.9},0).wait(1).to({x:-224.8},0).wait(1).to({x:-254.2},0).wait(1).to({x:-279.8},0).wait(1).to({x:-302.3},0).wait(1).to({x:-322.3},0).wait(1).to({x:-340},0).wait(1).to({x:-355.9},0).wait(1).to({x:-370.1},0).wait(1).to({x:-382.8},0).wait(1).to({x:-394.3},0).wait(1).to({x:-404.6},0).wait(1).to({x:-413.9},0).wait(1).to({x:-422.3},0).wait(1).to({x:-429.9},0).wait(1).to({x:-436.7},0).wait(1).to({x:-442.9},0).wait(1).to({x:-448.4},0).wait(1).to({x:-453.4},0).wait(1).to({x:-457.8},0).wait(1).to({x:-461.7},0).wait(1).to({x:-465.2},0).wait(1).to({x:-468.3},0).wait(1).to({x:-470.9},0).wait(1).to({x:-473.2},0).wait(1).to({x:-475.2},0).wait(1).to({x:-476.9},0).wait(1).to({x:-478.2},0).wait(1).to({x:-479.3},0).wait(1).to({x:-480.1},0).wait(1).to({x:-480.7},0).wait(1).to({x:-481},0).wait(1).to({x:-481.1},0).wait(156));

	// faixaVerde
	this.instance_80 = new lib.faixaVerde();
	this.instance_80.parent = this;
	this.instance_80.setTransform(-543.4,360);
	this.instance_80.alpha = 0.328;
	this.instance_80._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(19).to({_off:false},0).wait(1).to({x:-445.9},0).wait(1).to({x:-341.4},0).wait(1).to({x:-228.6},0).wait(1).to({x:-105.7},0).wait(1).to({x:29.7},0).wait(1).to({x:180.4},0).wait(1).to({x:349.2},0).wait(1).to({x:535.5},0).wait(1).to({x:729.2},0).wait(1).to({x:907.9},0).wait(1).to({x:1054.6},0).wait(1).to({x:1169},0).wait(1).to({x:1258.3},0).wait(1).to({x:1329.3},0).wait(1).to({x:1387.1},0).wait(1).to({x:1435.1},0).wait(1).to({x:1475.6},0).wait(1).to({x:1510.3},0).wait(1).to({x:1540.3},0).wait(1).to({x:1566.5},0).wait(1).to({x:1589.5},0).wait(1).to({x:1609.9},0).wait(1).to({x:1628.1},0).wait(1).to({x:1644.3},0).wait(1).to({x:1658.8},0).wait(1).to({x:1671.8},0).wait(1).to({x:1683.5},0).wait(1).to({x:1694.1},0).wait(1).to({x:1703.6},0).wait(1).to({x:1712.2},0).wait(1).to({x:1719.9},0).wait(1).to({x:1726.9},0).wait(1).to({x:1733.2},0).wait(1).to({x:1738.8},0).wait(1).to({x:1743.9},0).wait(1).to({x:1748.4},0).wait(1).to({x:1752.4},0).wait(1).to({x:1756},0).wait(1).to({x:1759.1},0).wait(1).to({x:1761.9},0).wait(1).to({x:1764.2},0).wait(1).to({x:1766.2},0).wait(1).to({x:1767.9},0).wait(1).to({x:1769.3},0).wait(1).to({x:1770.4},0).wait(1).to({x:1771.2},0).wait(1).to({x:1771.8},0).wait(1).to({x:1772.1},0).wait(1).to({x:1772.3},0).wait(206).to({x:1678.7},0).wait(1).to({x:1578.8},0).wait(1).to({x:1471.1},0).wait(1).to({x:1354},0).wait(1).to({x:1225.4},0).wait(1).to({x:1082.7},0).wait(1).to({x:923.2},0).wait(1).to({x:746.7},0).wait(1).to({x:560.9},0).wait(1).to({x:385.1},0).wait(1).to({x:237.5},0).wait(1).to({x:121.2},0).wait(1).to({x:30.3},0).wait(1).to({x:-41.9},0).wait(1).to({x:-100.6},0).wait(1).to({x:-149.2},0).wait(1).to({x:-190.2},0).wait(1).to({x:-225.3},0).wait(1).to({x:-255.6},0).wait(1).to({x:-282.1},0).wait(1).to({x:-305.4},0).wait(1).to({x:-326},0).wait(1).to({x:-344.3},0).wait(1).to({x:-360.7},0).wait(1).to({x:-375.3},0).wait(1).to({x:-388.5},0).wait(1).to({x:-400.4},0).wait(1).to({x:-411.1},0).wait(1).to({x:-420.8},0).wait(1).to({x:-429.6},0).wait(1).to({x:-437.5},0).wait(1).to({x:-444.6},0).wait(1).to({x:-451.1},0).wait(1).to({x:-456.9},0).wait(1).to({x:-462.1},0).wait(1).to({x:-466.8},0).wait(1).to({x:-471},0).wait(1).to({x:-474.7},0).wait(1).to({x:-478.1},0).wait(1).to({x:-481},0).wait(1).to({x:-483.5},0).wait(1).to({x:-485.7},0).wait(1).to({x:-487.6},0).wait(1).to({x:-489.2},0).wait(1).to({x:-490.5},0).wait(1).to({x:-491.5},0).wait(1).to({x:-492.3},0).wait(1).to({x:-492.8},0).wait(1).to({x:-493.1},0).wait(1).to({x:-493.2},0).wait(157));

	// corteAmarelo
	this.instance_81 = new lib.corteAmarelo();
	this.instance_81.parent = this;
	this.instance_81.setTransform(-842.6,422);
	this.instance_81._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(8).to({_off:false},0).wait(1).to({x:-767.1},0).wait(1).to({x:-687.2},0).wait(1).to({x:-602},0).wait(1).to({x:-510.6},0).wait(1).to({x:-411.8},0).wait(1).to({x:-304.2},0).wait(1).to({x:-186},0).wait(1).to({x:-55.6},0).wait(1).to({x:86.9},0).wait(1).to({x:237.2},0).wait(1).to({x:384},0).wait(1).to({x:514.2},0).wait(1).to({x:621.6},0).wait(1).to({x:708.1},0).wait(1).to({x:777.9},0).wait(1).to({x:835.2},0).wait(1).to({x:883},0).wait(1).to({x:923.4},0).wait(1).to({x:958.2},0).wait(1).to({x:988.3},0).wait(1).to({x:1014.8},0).wait(1).to({x:1038.1},0).wait(1).to({x:1058.9},0).wait(1).to({x:1077.5},0).wait(1).to({x:1094.2},0).wait(1).to({x:1109.3},0).wait(1).to({x:1122.9},0).wait(1).to({x:1135.3},0).wait(1).to({x:1146.6},0).wait(1).to({x:1156.9},0).wait(1).to({x:1166.2},0).wait(1).to({x:1174.8},0).wait(1).to({x:1182.6},0).wait(1).to({x:1189.8},0).wait(1).to({x:1196.4},0).wait(1).to({x:1202.4},0).wait(1).to({x:1207.9},0).wait(1).to({x:1212.9},0).wait(1).to({x:1217.5},0).wait(1).to({x:1221.6},0).wait(1).to({x:1225.4},0).wait(1).to({x:1228.9},0).wait(1).to({x:1232},0).wait(1).to({x:1234.8},0).wait(1).to({x:1237.3},0).wait(1).to({x:1239.5},0).wait(1).to({x:1241.5},0).wait(1).to({x:1243.2},0).wait(1).to({x:1244.8},0).wait(1).to({x:1246.1},0).wait(1).to({x:1247.2},0).wait(1).to({x:1248.1},0).wait(1).to({x:1248.8},0).wait(1).to({x:1249.3},0).wait(1).to({x:1249.7},0).wait(1).to({x:1249.9},0).wait(1).to({x:1250},0).to({x:1135.1},204).wait(1).to({x:1056.1},0).wait(1).to({x:971.7},0).wait(1).to({x:880.8},0).wait(1).to({x:781.9},0).wait(1).to({x:673.4},0).wait(1).to({x:552.8},0).wait(1).to({x:418.2},0).wait(1).to({x:269.2},0).wait(1).to({x:112.3},0).wait(1).to({x:-36.1},0).wait(1).to({x:-160.8},0).wait(1).to({x:-259},0).wait(1).to({x:-335.7},0).wait(1).to({x:-396.7},0).wait(1).to({x:-446.2},0).wait(1).to({x:-487.3},0).wait(1).to({x:-521.9},0).wait(1).to({x:-551.5},0).wait(1).to({x:-577.1},0).wait(1).to({x:-599.5},0).wait(1).to({x:-619.1},0).wait(1).to({x:-636.5},0).wait(1).to({x:-652},0).wait(1).to({x:-665.8},0).wait(1).to({x:-678.2},0).wait(1).to({x:-689.3},0).wait(1).to({x:-699.4},0).wait(1).to({x:-708.4},0).wait(1).to({x:-716.6},0).wait(1).to({x:-724},0).wait(1).to({x:-730.7},0).wait(1).to({x:-736.7},0).wait(1).to({x:-742.1},0).wait(1).to({x:-747},0).wait(1).to({x:-751.5},0).wait(1).to({x:-755.4},0).wait(1).to({x:-759},0).wait(1).to({x:-762.1},0).wait(1).to({x:-764.9},0).wait(1).to({x:-767.4},0).wait(1).to({x:-769.5},0).wait(1).to({x:-771.4},0).wait(1).to({x:-773},0).wait(1).to({x:-774.3},0).wait(1).to({x:-775.4},0).wait(1).to({x:-776.3},0).wait(1).to({x:-776.9},0).wait(1).to({x:-777.4},0).wait(1).to({x:-777.7},0).wait(1).to({_off:true},1).wait(160));

	// faixaAmarela
	this.instance_82 = new lib.faixaAmarela();
	this.instance_82.parent = this;
	this.instance_82.setTransform(-546.5,360);
	this.instance_82.alpha = 0.328;
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(6).to({_off:false},0).wait(1).to({x:-462.5},0).wait(1).to({x:-373.4},0).wait(1).to({x:-278.5},0).wait(1).to({x:-176.7},0).wait(1).to({x:-66.7},0).wait(1).to({x:53.2},0).wait(1).to({x:184.9},0).wait(1).to({x:330.1},0).wait(1).to({x:488.9},0).wait(1).to({x:656.3},0).wait(1).to({x:819.9},0).wait(1).to({x:964.9},0).wait(1).to({x:1084.6},0).wait(1).to({x:1180.9},0).wait(1).to({x:1258.8},0).wait(1).to({x:1322.6},0).wait(1).to({x:1375.8},0).wait(1).to({x:1420.8},0).wait(1).to({x:1459.5},0).wait(1).to({x:1493.2},0).wait(1).to({x:1522.6},0).wait(1).to({x:1548.6},0).wait(1).to({x:1571.8},0).wait(1).to({x:1592.5},0).wait(1).to({x:1611.1},0).wait(1).to({x:1627.9},0).wait(1).to({x:1643.1},0).wait(1).to({x:1656.9},0).wait(1).to({x:1669.4},0).wait(1).to({x:1680.9},0).wait(1).to({x:1691.3},0).wait(1).to({x:1700.9},0).wait(1).to({x:1709.6},0).wait(1).to({x:1717.6},0).wait(1).to({x:1724.9},0).wait(1).to({x:1731.6},0).wait(1).to({x:1737.7},0).wait(1).to({x:1743.3},0).wait(1).to({x:1748.4},0).wait(1).to({x:1753},0).wait(1).to({x:1757.3},0).wait(1).to({x:1761.1},0).wait(1).to({x:1764.6},0).wait(1).to({x:1767.7},0).wait(1).to({x:1770.5},0).wait(1).to({x:1773},0).wait(1).to({x:1775.2},0).wait(1).to({x:1777.1},0).wait(1).to({x:1778.8},0).wait(1).to({x:1780.3},0).wait(1).to({x:1781.5},0).wait(1).to({x:1782.5},0).wait(1).to({x:1783.3},0).wait(1).to({x:1783.9},0).wait(1).to({x:1784.3},0).wait(1).to({x:1784.6},0).wait(1).to({x:1784.7},0).wait(209).to({x:1691.1},0).wait(1).to({x:1591.2},0).wait(1).to({x:1483.5},0).wait(1).to({x:1366.4},0).wait(1).to({x:1237.8},0).wait(1).to({x:1095.1},0).wait(1).to({x:935.6},0).wait(1).to({x:759.1},0).wait(1).to({x:573.3},0).wait(1).to({x:397.5},0).wait(1).to({x:249.9},0).wait(1).to({x:133.6},0).wait(1).to({x:42.7},0).wait(1).to({x:-29.5},0).wait(1).to({x:-88.2},0).wait(1).to({x:-136.8},0).wait(1).to({x:-177.8},0).wait(1).to({x:-212.9},0).wait(1).to({x:-243.2},0).wait(1).to({x:-269.7},0).wait(1).to({x:-293},0).wait(1).to({x:-313.6},0).wait(1).to({x:-331.9},0).wait(1).to({x:-348.3},0).wait(1).to({x:-362.9},0).wait(1).to({x:-376.1},0).wait(1).to({x:-388},0).wait(1).to({x:-398.7},0).wait(1).to({x:-408.4},0).wait(1).to({x:-417.2},0).wait(1).to({x:-425.1},0).wait(1).to({x:-432.2},0).wait(1).to({x:-438.7},0).wait(1).to({x:-444.5},0).wait(1).to({x:-449.7},0).wait(1).to({x:-454.4},0).wait(1).to({x:-458.6},0).wait(1).to({x:-462.3},0).wait(1).to({x:-465.7},0).wait(1).to({x:-468.6},0).wait(1).to({x:-471.1},0).wait(1).to({x:-473.3},0).wait(1).to({x:-475.2},0).wait(1).to({x:-476.8},0).wait(1).to({x:-478.1},0).wait(1).to({x:-479.1},0).wait(1).to({x:-479.9},0).wait(1).to({x:-480.4},0).wait(1).to({x:-480.7},0).wait(1).to({x:-480.8},0).wait(159));

	// faixaAmarela
	this.instance_83 = new lib.faixaAmarela();
	this.instance_83.parent = this;
	this.instance_83.setTransform(-546.5,360);
	this.instance_83.alpha = 0.328;
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(4).to({_off:false},0).wait(1).to({x:-462.5},0).wait(1).to({x:-373.4},0).wait(1).to({x:-278.5},0).wait(1).to({x:-176.7},0).wait(1).to({x:-66.7},0).wait(1).to({x:53.2},0).wait(1).to({x:184.9},0).wait(1).to({x:330.1},0).wait(1).to({x:488.9},0).wait(1).to({x:656.3},0).wait(1).to({x:819.9},0).wait(1).to({x:964.9},0).wait(1).to({x:1084.6},0).wait(1).to({x:1180.9},0).wait(1).to({x:1258.8},0).wait(1).to({x:1322.6},0).wait(1).to({x:1375.8},0).wait(1).to({x:1420.8},0).wait(1).to({x:1459.5},0).wait(1).to({x:1493.2},0).wait(1).to({x:1522.6},0).wait(1).to({x:1548.6},0).wait(1).to({x:1571.8},0).wait(1).to({x:1592.5},0).wait(1).to({x:1611.1},0).wait(1).to({x:1627.9},0).wait(1).to({x:1643.1},0).wait(1).to({x:1656.9},0).wait(1).to({x:1669.4},0).wait(1).to({x:1680.9},0).wait(1).to({x:1691.3},0).wait(1).to({x:1700.9},0).wait(1).to({x:1709.6},0).wait(1).to({x:1717.6},0).wait(1).to({x:1724.9},0).wait(1).to({x:1731.6},0).wait(1).to({x:1737.7},0).wait(1).to({x:1743.3},0).wait(1).to({x:1748.4},0).wait(1).to({x:1753},0).wait(1).to({x:1757.3},0).wait(1).to({x:1761.1},0).wait(1).to({x:1764.6},0).wait(1).to({x:1767.7},0).wait(1).to({x:1770.5},0).wait(1).to({x:1773},0).wait(1).to({x:1775.2},0).wait(1).to({x:1777.1},0).wait(1).to({x:1778.8},0).wait(1).to({x:1780.3},0).wait(1).to({x:1781.5},0).wait(1).to({x:1782.5},0).wait(1).to({x:1783.3},0).wait(1).to({x:1783.9},0).wait(1).to({x:1784.3},0).wait(1).to({x:1784.6},0).wait(1).to({x:1784.7},0).wait(209).to({x:1691.1},0).wait(1).to({x:1591.2},0).wait(1).to({x:1483.5},0).wait(1).to({x:1366.4},0).wait(1).to({x:1237.8},0).wait(1).to({x:1095.1},0).wait(1).to({x:935.6},0).wait(1).to({x:759.1},0).wait(1).to({x:573.3},0).wait(1).to({x:397.5},0).wait(1).to({x:249.9},0).wait(1).to({x:133.6},0).wait(1).to({x:42.7},0).wait(1).to({x:-29.5},0).wait(1).to({x:-88.2},0).wait(1).to({x:-136.8},0).wait(1).to({x:-177.8},0).wait(1).to({x:-212.9},0).wait(1).to({x:-243.2},0).wait(1).to({x:-269.7},0).wait(1).to({x:-293},0).wait(1).to({x:-313.6},0).wait(1).to({x:-331.9},0).wait(1).to({x:-348.3},0).wait(1).to({x:-362.9},0).wait(1).to({x:-376.1},0).wait(1).to({x:-388},0).wait(1).to({x:-398.7},0).wait(1).to({x:-408.4},0).wait(1).to({x:-417.2},0).wait(1).to({x:-425.1},0).wait(1).to({x:-432.2},0).wait(1).to({x:-438.7},0).wait(1).to({x:-444.5},0).wait(1).to({x:-449.7},0).wait(1).to({x:-454.4},0).wait(1).to({x:-458.6},0).wait(1).to({x:-462.3},0).wait(1).to({x:-465.7},0).wait(1).to({x:-468.6},0).wait(1).to({x:-471.1},0).wait(1).to({x:-473.3},0).wait(1).to({x:-475.2},0).wait(1).to({x:-476.8},0).wait(1).to({x:-478.1},0).wait(1).to({x:-479.1},0).wait(1).to({x:-479.9},0).wait(1).to({x:-480.4},0).wait(1).to({x:-480.7},0).wait(1).to({x:-480.8},0).wait(161));

	// mask (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_1 = new cjs.Graphics().p("EijRA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_2 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_3 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_4 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_5 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_6 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_7 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_8 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_9 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_10 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_11 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_12 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_13 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_14 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_15 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_16 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_17 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_18 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_19 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_20 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_21 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_22 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_23 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_24 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_25 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_26 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_27 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_28 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_29 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_30 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_31 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_32 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_33 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_34 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_35 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_36 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_37 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_38 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_39 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_40 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_41 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_42 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_43 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_44 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_45 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_46 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_47 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_48 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_49 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_50 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_269 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_270 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_271 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_272 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_273 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_274 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_275 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_276 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_277 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_278 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_279 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_280 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_281 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_282 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_283 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_284 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_285 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_286 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_287 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_288 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_289 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_290 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_291 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_292 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_293 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_294 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_295 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_296 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_297 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_298 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_299 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_300 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_301 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_302 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_303 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_304 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_305 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_306 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_307 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_308 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_309 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_310 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_311 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_312 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_313 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_314 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_315 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_316 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_317 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_318 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");
	var mask_11_graphics_319 = new cjs.Graphics().p("EiisA7QMAAAh2fMFFZAAAMh21B2fg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_11_graphics_1,x:-1045,y:358.9}).wait(1).to({graphics:mask_11_graphics_2,x:-962.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_3,x:-869.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_4,x:-769.8,y:358.9}).wait(1).to({graphics:mask_11_graphics_5,x:-661,y:358.9}).wait(1).to({graphics:mask_11_graphics_6,x:-541.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_7,x:-407.6,y:358.9}).wait(1).to({graphics:mask_11_graphics_8,x:-258.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_9,x:-93,y:358.9}).wait(1).to({graphics:mask_11_graphics_10,x:78.5,y:358.9}).wait(1).to({graphics:mask_11_graphics_11,x:236.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_12,x:366.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_13,x:468.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_14,x:547.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_15,x:610,y:358.9}).wait(1).to({graphics:mask_11_graphics_16,x:661.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_17,x:703.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_18,x:739.6,y:358.9}).wait(1).to({graphics:mask_11_graphics_19,x:770.3,y:358.9}).wait(1).to({graphics:mask_11_graphics_20,x:796.9,y:358.9}).wait(1).to({graphics:mask_11_graphics_21,x:820.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_22,x:840.5,y:358.9}).wait(1).to({graphics:mask_11_graphics_23,x:858.6,y:358.9}).wait(1).to({graphics:mask_11_graphics_24,x:874.6,y:358.9}).wait(1).to({graphics:mask_11_graphics_25,x:889,y:358.9}).wait(1).to({graphics:mask_11_graphics_26,x:901.8,y:358.9}).wait(1).to({graphics:mask_11_graphics_27,x:913.4,y:358.9}).wait(1).to({graphics:mask_11_graphics_28,x:923.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_29,x:933.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_30,x:941.5,y:358.9}).wait(1).to({graphics:mask_11_graphics_31,x:949.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_32,x:956,y:358.9}).wait(1).to({graphics:mask_11_graphics_33,x:962.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_34,x:967.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_35,x:972.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_36,x:977.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_37,x:981.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_38,x:984.8,y:358.9}).wait(1).to({graphics:mask_11_graphics_39,x:987.9,y:358.9}).wait(1).to({graphics:mask_11_graphics_40,x:990.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_41,x:993.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_42,x:995.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_43,x:997,y:358.9}).wait(1).to({graphics:mask_11_graphics_44,x:998.5,y:358.9}).wait(1).to({graphics:mask_11_graphics_45,x:999.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_46,x:1000.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_47,x:1001.4,y:358.9}).wait(1).to({graphics:mask_11_graphics_48,x:1001.9,y:358.9}).wait(1).to({graphics:mask_11_graphics_49,x:1002.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_50,x:1002.3,y:358.9}).wait(219).to({graphics:mask_11_graphics_269,x:1002.3,y:358.9}).wait(1).to({graphics:mask_11_graphics_270,x:918.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_271,x:828.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_272,x:731.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_273,x:625.8,y:358.9}).wait(1).to({graphics:mask_11_graphics_274,x:510,y:358.9}).wait(1).to({graphics:mask_11_graphics_275,x:381.5,y:358.9}).wait(1).to({graphics:mask_11_graphics_276,x:237.9,y:358.9}).wait(1).to({graphics:mask_11_graphics_277,x:79,y:358.9}).wait(1).to({graphics:mask_11_graphics_278,x:-88.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_279,x:-246.5,y:358.9}).wait(1).to({graphics:mask_11_graphics_280,x:-379.4,y:358.9}).wait(1).to({graphics:mask_11_graphics_281,x:-484.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_282,x:-566,y:358.9}).wait(1).to({graphics:mask_11_graphics_283,x:-631,y:358.9}).wait(1).to({graphics:mask_11_graphics_284,x:-683.8,y:358.9}).wait(1).to({graphics:mask_11_graphics_285,x:-727.6,y:358.9}).wait(1).to({graphics:mask_11_graphics_286,x:-764.5,y:358.9}).wait(1).to({graphics:mask_11_graphics_287,x:-796.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_288,x:-823.4,y:358.9}).wait(1).to({graphics:mask_11_graphics_289,x:-847.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_290,x:-868.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_291,x:-886.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_292,x:-903.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_293,x:-917.9,y:358.9}).wait(1).to({graphics:mask_11_graphics_294,x:-931.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_295,x:-943,y:358.9}).wait(1).to({graphics:mask_11_graphics_296,x:-953.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_297,x:-963.4,y:358.9}).wait(1).to({graphics:mask_11_graphics_298,x:-972.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_299,x:-980,y:358.9}).wait(1).to({graphics:mask_11_graphics_300,x:-987.1,y:358.9}).wait(1).to({graphics:mask_11_graphics_301,x:-993.5,y:358.9}).wait(1).to({graphics:mask_11_graphics_302,x:-999.3,y:358.9}).wait(1).to({graphics:mask_11_graphics_303,x:-1004.6,y:358.9}).wait(1).to({graphics:mask_11_graphics_304,x:-1009.3,y:358.9}).wait(1).to({graphics:mask_11_graphics_305,x:-1013.5,y:358.9}).wait(1).to({graphics:mask_11_graphics_306,x:-1017.3,y:358.9}).wait(1).to({graphics:mask_11_graphics_307,x:-1020.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_308,x:-1023.6,y:358.9}).wait(1).to({graphics:mask_11_graphics_309,x:-1026.3,y:358.9}).wait(1).to({graphics:mask_11_graphics_310,x:-1028.6,y:358.9}).wait(1).to({graphics:mask_11_graphics_311,x:-1030.6,y:358.9}).wait(1).to({graphics:mask_11_graphics_312,x:-1032.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_313,x:-1033.7,y:358.9}).wait(1).to({graphics:mask_11_graphics_314,x:-1034.8,y:358.9}).wait(1).to({graphics:mask_11_graphics_315,x:-1035.8,y:358.9}).wait(1).to({graphics:mask_11_graphics_316,x:-1036.5,y:358.9}).wait(1).to({graphics:mask_11_graphics_317,x:-1036.9,y:358.9}).wait(1).to({graphics:mask_11_graphics_318,x:-1037.2,y:358.9}).wait(1).to({graphics:mask_11_graphics_319,x:-1037.3,y:358.9}).wait(1).to({graphics:null,x:0,y:0}).wait(160));

	// efeitoVerde
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(131,210,100,0.549)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},319).wait(160));

	// backgroundVideo
	this.instance_84 = new lib.backgroundVideo();
	this.instance_84.parent = this;
	this.instance_84._off = true;

	var maskedShapeInstanceList = [this.instance_84];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(1).to({_off:false},0).wait(268).to({alpha:0},50).to({_off:true},1).wait(160));

	// backgroundVerde
	this.instance_85 = new lib.backgroundVerde();
	this.instance_85.parent = this;
	this.instance_85.setTransform(640,360);
	this.instance_85._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(1).to({_off:false},0).wait(479));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: 'AA6081184C415F439D2B605449180DD7',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/campeonato.brasileiro_a_atlas_.png?1539892386349", id:"campeonato.brasileiro_a_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AA6081184C415F439D2B605449180DD7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;