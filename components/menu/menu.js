(function() {
  'use strict';
  /**
   * @param {Object} el
   * 
   */
  class Menu {
  /**
   * @param {Object} el
   * 
   */
      constructor({el, data}) {
          this.$el = el;
          this.data = data;
          this.$title = el.querySelector('.js-title');
          this.$menuList = el.querySelector('.js-menu-list');

          this.initEvents();
      }
  /**
   * @param {Object} data
   * 
   */
      setData(data) {
        this.data = data;
        this.render();
      }
  /**
   * 
   */
      render() {
        this.$title.innerText = this.data.title;
        this.renderItems(this.data.items, this.$menuList);
      }

      /**
       * @param {Object} items
       * @param {Object} container
       */
      renderItems(items, container) {
        items.forEach((item) => {
          this._addItem(item, container);
        });
      }
  /**
   * 
   */
      initEvents() {
        this.$title.addEventListener('click',
        this.toggleDisplayMenu.bind(this));
        this.$menuList.addEventListener('click', this.removeItem.bind(this));
      }
  /**
   * 
   */
      toggleDisplayMenu() {
        this.$el.classList.toggle('_open');
      }
  /**
   * @param {Object} ev
   */
      removeItem(ev) {
        let currentRemoveIcon = ev.target;
        let currentItem;
        let currentList;

        if (currentRemoveIcon.tagName === 'SUP') {
          // для поддержки в IE11-
          currentItem = currentRemoveIcon.closest('li');
          currentList = currentItem.closest('ul');
          currentList.removeChild(currentItem);
        }
      }
      /**
       * @param {Object} item
       * @param {Object} container
       */
      _addItem(item, container) {
        let itemText = item.title;
        let ulEl = document.createElement('ul');
        let liEl = document.createElement('li');
        let spanEl = document.createElement('span');
        let removeIcon = document.createElement('sup');

        spanEl.textContent = itemText;
        removeIcon.textContent = ' x';

        liEl.append(spanEl, removeIcon);

        if (item.items) { // а здесь нужно рекурсивно вызвать renderItems,
          liEl.append(ulEl);
          this.renderItems(item.items, ulEl); // указываем, что рендерим и куда
        }

        container.append(liEl);
      }
    }

    window.Menu = Menu;
})();
