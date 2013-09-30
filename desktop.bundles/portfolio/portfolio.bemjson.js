({
    block: 'page',
    title: 'portfolio',
    head: [
        { elem: 'css', url: '_portfolio.css', ie: false },
        { elem: 'css', url: '_portfolio', ie: true }
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
        { elem: 'js', url:'_portfolio.js' }
    ]
})
