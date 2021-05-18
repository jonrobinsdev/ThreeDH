const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
	const files = [
		'./dist/ThreeDH/runtime.js',
		'./dist/ThreeDH/polyfills.js',
		'./dist/ThreeDH/main.js'
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