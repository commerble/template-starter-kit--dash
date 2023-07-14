import components from '../../components';
import layout from '../../layout.fn.ejs';
import render from './index.fn.ejs';

export default {
    title: 'Pages/Member/CreateNotice',
    argTypes: {
        serverError: { control: 'boolean' },
    },
}

export const Index = {
    name: '/member/createnotices',
    render(args) {
        return layout({
            title: '次回入荷予約 - 登録確認',
            body: render(args, null, components),
        }, null, components);
    },
    args: {
    }
}
