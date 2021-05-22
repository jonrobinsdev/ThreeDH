const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
	const files = [
		'./dist/ThreeDH-element/runtime.js',
		'./dist/ThreeDH-element/polyfills.js',
		'./dist/ThreeDH-element/main.js'
	  ];
	
	  await fs.ensureDir('./dist/script-output');
	  await concat(files, './dist/script-output/three-dh.js');
	  /*
	  await fs.copyFile(
		'./dist/ThreeDH/styles.css',
		'./dist/script-output/styles.css'
	  );
	  */
}
build();