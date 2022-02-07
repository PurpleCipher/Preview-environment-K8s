const fs = require('fs');
const [, , a, b, c, path] = process.argv;

const generateIngressPatch = (hostPatch, replacementPath, baseHost) => ([{
    op: 'replace',
    path: replacementPath,
    value: `${hostPatch || ''}${baseHost}`
}]);


function run() {
    const patch = generateIngressPatch(a, b, c);
    fs.writeFileSync(path, JSON.stringify(patch));
}

run();