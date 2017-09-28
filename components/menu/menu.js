(function () {
  'use strict'

  class Menu {
    constructor (el, data) {
      this.$el = el
      this.data = data
      this.$title = el.querySelector('.js-title')
      this.$menuList = el.querySelector('.js-menu-list')
    }
  };

  window.Menu = Menu
})()
