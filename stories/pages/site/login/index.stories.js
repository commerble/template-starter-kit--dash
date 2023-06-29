import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Site/Login',
    argTypes: {
        serverError: { control: 'boolean' },
        showGuestLogin: { control: 'boolean' },
    },
}

export const Form = {
    name: '/site/login',
    render(args) {
        return layout({
            title: 'ログイン',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const BeforeCheckout = {
    name: '/site/login - returnUrl=purchase',
    render(args) {
        return layout({
            title: 'ログイン',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
        showGuestLogin: true
    }
}