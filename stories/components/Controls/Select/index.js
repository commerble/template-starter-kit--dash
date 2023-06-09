import control from './select.fn.ejs';
import field from './select.field.fn.ejs';

function find(path, args) {
    if (path === 'select') {
        return control(args);
    }
    throw new Error('not supported');
}

export default function (args) {
    return field(args, null, find);
}