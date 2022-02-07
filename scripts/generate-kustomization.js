const fs = require('fs');
const [, , path, destination, namespace, newTag] = process.argv;

const generate = (path, destination, namespace, tag, fs) => {
    let file = fs.readFileSync(path).toString();

    if (namespace) {
        file = file.replace('${{namespace}}', namespace);
    }
    
    if (tag) {
        file = file.replace('${{tag}}', tag);
    }

    fs.writeFileSync(destination, file);
}


generate(path, destination, newTag, namespace, fs);