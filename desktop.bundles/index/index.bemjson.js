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
            block: 'header',
            title: 'Мой супер сайт'
        },
        {
            block: 'content',
            content: [
                {
                    block: 'news',
                    count: 10
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
