({
    block: 'page',
    title: 'about',
    head: [
        { elem: 'css', url: '_about.css', ie: false },
        { elem: 'css', url: '_about', ie: true }
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
        { elem: 'js', url:'_about.js' }
    ]
})
