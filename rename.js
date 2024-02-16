const fs = require('fs');
const inputDir = './input';
const outputDir = './output';
const inputFiles = fs.readdirSync(inputDir);
let startId = process.argv[2];

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
inputFiles.forEach(file => {
	fs.renameSync(`${inputDir}/${file}`, `${outputDir}/MENU_Knowledge_${startId}.${file.split('.').pop()}`);
	startId++;
});