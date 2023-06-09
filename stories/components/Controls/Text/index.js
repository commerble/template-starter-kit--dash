import control from './text.fn.ejs';
import field from './text.field.fn.ejs';

function find(path, args) {
    if (path === 'text') {
        return control(args);
    }
    throw new Error('not supported');
}

export default function (args) {
    return field(args, null, find);
}