import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Member/UserName',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Confirm = {
    name: '/member/username',
    render(args) {
        return layout({
            title: '登録メールアドレス変更 - 確認',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}
