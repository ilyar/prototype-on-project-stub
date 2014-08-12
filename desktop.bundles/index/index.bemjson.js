({
    block: 'page',
    title: 'Главная страница',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../assets/_assets.css', ie: false },
        { elem: 'css', url: '../assets/_assets', ie: true },
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
        { elem: 'js', url: '../assets/_assets.js' }
    ]
})
