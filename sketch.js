var sequencer;
const trans_time = 120;

function setup(){
	createCanvas(1024, 640, WEBGL);

	sequencer = 14;

	background(0);
}

function draw(){
	background(0);
	if(frameCount%trans_time == trans_time-1){
		sequencer++;
	}

	sequencer%=17
	switch(sequencer){
		case 0:
			pointLight(0, 255, 0, 0, 0, 0);
			break;
		case 1:
			pointLight(0, 255, 0, 0, 0, 0);
			pointLight(255, 0, 0, 800*(cos(random()*2*Math.PI)), 0, 800*(cos(random()*2*Math.PI)));
			break;
		case 2:
			pointLight(0, 255, 0, 0, 0, 0);
			pointLight(255, 0, 0, 800, 0, 0);
			pointLight(255, 0, 0, 800*(cos(random()*2*Math.PI)), 0, 800*(cos(random()*2*Math.PI)));
			break;
		case 3:
			pointLight(0, 255, 0, 0, 0, 0);
			pointLight(255, 0, 0, 800, 0, 0);
			pointLight(255, 0, 0, -800, 0, 0);
			pointLight(255, 0, 0, 800*(cos(random()*2*Math.PI)), 0, 800*(cos(random()*2*Math.PI)));
			break;
		case 4:
			pointLight(0, 255, 0, 0, 0, 0);
			//pointLight(255, 0, 0, 800*(cos(random()*2*Math.PI)), 0, 800*(cos(random()*2*Math.PI)));
			pointLight(0, 0, 255, -1200 + (frameCount%trans_time)*6, 0, 0);
			break;
		case 5:
			pointLight(0, 255-map(frameCount%trans_time, 0, 120, 0, 255), 255, 0, 0, 0);
			break;
		case 6:
			pointLight(0, 0, 255, 0, 0, 0);
			pointLight(0, 255, 255, 400*cos(frameCount/20), 0, 400*sin(frameCount/20));
			break;
		case 7:
			pointLight(0, 0, 255, 0, 0, 0);
			pointLight(0, 255, 255, 400*sin(frameCount/20), 0, 400*cos(frameCount/20));
			break;
		case 8:
			pointLight(0, 0, 255, 0, 0, 0);
			pointLight(0, 255, 255, 400*cos(frameCount/20), 0, 400*sin(frameCount/20));
			break;
		case 9:
			pointLight(0, 0, 255, 0, 0, 0);
			pointLight(0, 255, 255, 400*sin(frameCount/20), 0, 400*cos(frameCount/20));
			break;
		case 10:
			pointLight(0, 0, 255, 0, 0, 0);
			pointLight(255, 0, 0, 400*cos(frameCount/20), 0, 400*sin(frameCount/20));
			pointLight(0, 255, 255, -400*cos(frameCount/20), 0, -400*sin(frameCount/20));
			break;
		case 11:
			pointLight(0, 0, 255, 0, 0, 0);
			pointLight(255, 0, 0, 400*sin(frameCount/20), 0, 400*cos(frameCount/20));
			pointLight(0, 255, 255, -400*sin(frameCount/20), 0, -400*cos(frameCount/20));
			break;
		case 12:
			pointLight(0, 0, 255, 0, 0, 0);
			pointLight(0, 255, 255, 400, 0, 0);
			pointLight(255, 0, 0, -((frameCount%trans_time)*10), 0, 0);
			break;
		case 13:
			pointLight(0, 0, 255, 0, 0, 0);
			pointLight(0, 255, 255, 400*cos(frameCount/20), 0, 400*sin(frameCount/20));
			break;
		case 14:
			pointLight(0, 0, 255, 0, 0, 0);
			let color_fade = map(frameCount%trans_time, 0, 120, 255, 0);
			pointLight(0, color_fade, color_fade, 400*sin(frameCount/20), 0, 400*cos(frameCount/20));
			break;
		case 15:
			pointLight(0, 0, 255, 0, 0, 0);
			break;
		case 16:
			let color_change = map(frameCount%trans_time, 0, 120, 0, 255);
			pointLight(0, color_change, 255-color_change, 0, 0, 0);
			break;
	}

	noStroke();
	translate(0, 200, 0);
	fill(150);
	box(1000, 100, 500, 100, 100);
}
