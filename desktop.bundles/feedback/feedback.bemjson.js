({
    block: 'page',
    title: 'feedback',
    head: [
        { elem: 'css', url: '_feedback.css', ie: false },
        { elem: 'css', url: '_feedback', ie: true }
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
        { elem: 'js', url:'_feedback.js' }
    ]
})
