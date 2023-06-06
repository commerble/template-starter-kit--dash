export default {
    title: 'Base/Text',
    parameters: {
        docs: {
            canvas: { sourceState: 'shown' },
        },
    },
};

export const AlignCenter = {
    name: '中央寄せ',
    render() {
        return `<p class="text-center">中央寄せ</p>`
    }
}

export const AlignLeft = {
    name: '左寄せ',
    render() {
        return `<p class="text-left">左寄せ</p>`
    }
}

export const AlignRight = {
    name: '右寄せ',
    render() {
        return `<p class="text-right">右寄せ</p>`
    }
}

export const Header = {
    name: 'ヘッダー',
    render() {
        return `<h1 class="h-text">ヘッダー</h1>`
    }
}

export const HeaderBorder = {
    name: '罫線付きヘッダー',
    render() {
        return `<h1 class="h-border">罫線付きヘッダー</h1>`
    }
}

export const HeaderUnderLine = {
    name: '下線付きヘッダー',
    render() {
        return `<h1 class="h-underline">下線付きヘッダー</h1>`
    }
}

export const HeaderCenterLine = {
    name: '下線付きヘッダー',
    render() {
        return `<h1 class="h-centerline"><span>中央線付きヘッダー</span></h1>`
    }
}

export const Del = {
    name: '消去線',
    render() {
        return `<p>線で<span class="text-del">デリート</span>します。</p>`
    }
}