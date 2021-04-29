const modal = $.modal({
    title: 'title modal window',
    closable: true,
    content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [ //массив в котором описываются параметры кнопок, которые будут находиться в footer
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked');
            modal.close();
        }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked');
            modal.close();
        }}
    ]
})