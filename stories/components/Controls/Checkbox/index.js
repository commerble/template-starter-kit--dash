import control from './checkbox.fn.ejs';
import field from './checkbox.field.fn.ejs';

function find(path, args) {
    if (path === 'checkbox') {
        return control(args);
    }
    throw new Error('not supported');
}

export default function (args) {
    return field(args, null, find);
}