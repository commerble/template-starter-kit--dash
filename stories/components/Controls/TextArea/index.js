import control from './textarea.fn.ejs';
import field from './textarea.field.fn.ejs';

function find(path, args) {
    if (path === 'textarea') {
        return control(args);
    }
    throw new Error('not supported');
}

export default function (args) {
    return field(args, null, find);
}