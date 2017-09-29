(function() {
    'use strict';

    // import
    const Menu = window.Menu;
        /**
         * 
         */
    class App {
    /**
     *@param {Object} el 
     */
        constructor({el}) {
            this.menu = new Menu({
                el: el.querySelector('.js-menu'),
                data: {
                    title: 'Сайты',
                    items: [],
                },
            });

        this.menu.setData({
                title: 'Сайты',
                items: [
                    {title: 'Первый'},
                    {
                      title: 'Второй',
                      items: [
                        {title: 'Второй-первый'},
                        {
                          title: 'Второй-второй',
                          items: [
                            {title: 'Второй-второй-1'},
                            {title: 'Второй-второй-2'},
                            {title: 'Второй-второй-3'},
                          ],
                        },
                      ],
                    },
                    {title: 'Третий'},
                    {title: 'Четвертый'},
                  ],
            });
        }
    }

    // export
     window.App = App;
})();
