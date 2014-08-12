({
    block: 'page',
    title: 'about',
    head: [
        { elem: 'css', url: '../assets/_assets.css', ie: false },
        { elem: 'css', url: '../assets/_assets', ie: true }
    ],
    content: [
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
        { elem: 'js', url:'../assets/_assets.js' }
    ]
})
