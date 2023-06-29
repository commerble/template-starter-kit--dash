import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';
import renderForm from './form.fn.ejs';
import renderComplete from './complete.fn.ejs';

export default {
    title: 'Pages/Site/Recovery',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Resend = {
    name: '/site/recovery',
    render(args) {
        return layout({
            title: 'パスワード再設定',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Resent = {
    name: '/site/recovery - send',
    render(args) {
        return layout({
            title: 'パスワード再設定',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
        send: true
    }
}

export const Form = {
    name: '/site/recovery/{token}',
    render(args) {
        return layout({
            title: 'パスワード再設定',
            body: renderForm(args, null, components),
        }, null, components);
    },
    args: {
    }
}

export const Complete = {
    name: '/site/recovery/{token} - complete',
    render(args) {
        return layout({
            title: 'パスワード再設定',
            body: renderComplete(args, null, components),
        }, null, components);
    },
    args: {
    }
}