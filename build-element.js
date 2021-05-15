const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
	const files = [
		'./dist/ThreeDH-Element/runtime.js',
		'./dist/ThreeDH-Element/polyfills.js',
		'./dist/ThreeDH-Element/main.js'
	  ];
	
	  await fs.ensureDir('./dist/script-output');
	  await concat(files, './dist/script-output/three-dh.js');
	  await fs.copyFile(
		'./dist/ThreeDH-Element/styles.css',
		'./dist/script-output/styles.css'
	  );
}
build();