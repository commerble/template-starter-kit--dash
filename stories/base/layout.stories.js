export default {
    title: 'Base/Layout',
    parameters: {
        docs: {
            canvas: { sourceState: 'shown' },
        },
    },
};

/**
 * セクション間が適度に空きます。
 */
export const Section = {
    name: 'セクション',
    render() {
        return `
<main>
    <section class="section" style="background:gray;">セクション1</section>
    <section class="section" style="background:lightgray;">セクション2</section>
    <section class="section" style="background:lightblue;">セクション3</section>
</main>
        `
    }
}

/**
 * `$color-border`で水平線を引き、水平線の上下が適度に空きます。
 */
export const HorizontalLine = {
    name: '水平線',
    render() {
        return `
<div>
    あいうえお
    <hr/>
    かきくけこ
</div>
        `
    }
}

export const Margin = {
    name: '余白',
    render() {
        return `
<div>
    <p>あいうえお</p>
    <p class="mt">あいうえお</p>
    <p>あいうえお</p>
    <p class="mb">あいうえお</p>
    <p>あいうえお</p>
</div>
        `
    }
}

export const Hidden = {
    name: '余白',
    render() {
        return `
<div>
    <p class="pc-hide">スマホオンリー</p>
    <p class="sp-hide">PCオンリー</p>
</div>
        `
    }
}

export const Column1_1 = {
    name: 'カラム比 1:1',
    render() {
        return `
<div class="columns">
    <div class="col-1" style="border:1px solid black;">1</div>
    <div class="col-1" style="border:1px solid black;">1</div>
</div>
        `
    }
}

export const Column1_2 = {
    name: 'カラム比 1:2',
    render() {
        return `
<div class="columns">
    <div class="col-1" style="border:1px solid black;">1</div>
    <div class="col-2" style="border:1px solid black;">2</div>
</div>
        `
    }
}

export const Column1_3 = {
    name: 'カラム比 1:3',
    render() {
        return `
<div class="columns">
    <div class="col-1" style="border:1px solid black;">1</div>
    <div class="col-3" style="border:1px solid black;">3</div>
</div>
        `
    }
}

export const Column1_1_1 = {
    name: 'カラム比 1:1:1',
    render() {
        return `
<div class="columns">
    <div class="col-1" style="border:1px solid black;">1</div>
    <div class="col-1" style="border:1px solid black;">1</div>
    <div class="col-1" style="border:1px solid black;">1</div>
</div>
        `
    }
}

export const Column1 = {
    name: 'カラム 1要素',
    render() {
        return `
<div class="columns">
    <div class="col-1" style="border:1px solid black;">1</div>
</div>
        `
    }
}

export const BlockVertical = {
    name: 'ブロック 垂直',
    render() {
        return `
<div class="block block-vertical">
    <button class="btn">Button</button>
    <button class="btn">Button</button>
</div>
        `
    }
}

export const BlockVerticalFull = {
    name: 'ブロック 垂直 full',
    render() {
        return `
<div class="block block-vertical">
    <button class="btn">Button</button>
    <button class="btn full">Button</button>
</div>
        `
    }
}


export const BlockHorizontal = {
    name: 'ブロック 水平',
    render() {
        return `
<div class="block block-horizontal">
    <button class="btn">Button</button>
    <button class="btn">Button</button>
    <button class="btn">Button</button>
    <button class="btn">Button</button>
    <button class="btn">Button</button>
</div>
        `
    }
}

export const BlockHorizontalFull = {
    name: 'ブロック 水平 full',
    render() {
        return `
<div class="block block-horizontal">
    <button class="btn full">Button</button>
    <button class="btn full">Button</button>
    <button class="btn">Button</button>
    <button class="btn">Button</button>
    <button class="btn">Button</button>
</div>
        `
    }
}

export const BlockHorizontalWrap = {
    name: 'ブロック 水平 Wrap',
    render() {
        return `
<div class="block block-horizontal block-wrap">
    <button class="btn">Button</button>
    <button class="btn">Button</button>
    <button class="btn">Button</button>
    <button class="btn">Button</button>
    <button class="btn">Button</button>
    <button class="btn">Button</button>
    <button class="btn">Button</button>
</div>
        `
    }
}

export const Content = {
    name: 'コンテント',
    render() {
        return `
<div class="content" style="background: gray; height: 400px;">
</div>
        `
    }
}

export const ContentWide = {
    name: 'コンテント wide',
    render() {
        return `
<div class="content-wide" style="background: gray; height: 400px;">
</div>
        `
    }
}