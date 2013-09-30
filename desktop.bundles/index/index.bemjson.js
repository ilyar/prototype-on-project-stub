({
    block: 'page',
    title: 'Главная страница',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'header'
        },
        {
            block: 'content',
            content: [
                {
                    block: 'news'
                },
                {
                    block: 'feedback'
                }
            ]
        },
        {
            block: 'footer'
        },
        { elem: 'js', url: '_index.js' }
    ]
})
