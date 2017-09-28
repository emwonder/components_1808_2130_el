(function () {
  'use strict'

  // import
  const Menu = window.Menu

  class App {
    constructor ({el}) {
      this.menu = new Menu({
        el: el.querySelector('.js-menu'),
        data: {
          title: 'Сайты',
          items: []
        }
      })
    }
  };

  window.App = App
})()
