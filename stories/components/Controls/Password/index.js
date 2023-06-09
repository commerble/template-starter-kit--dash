import control from './password.fn.ejs';
import field from './password.field.fn.ejs';

function find(path, args) {
    if (path === 'password') {
        return control(args);
    }
    throw new Error('not supported');
}

export default function (args) {
    return field(args, null, find);
}