require('../sass/style.scss');

const items = document.getElementsByClassName("slider_box");

new Vue({
  el:'#vue-app',
  data:{
    position: [],
    boxWidth: 350,
  },

  methods: {
    setPosition() {
      for (let i=0; i < items.length; i++) {
        let next = window.getComputedStyle(items[i]).getPropertyValue('left');
        this.position[i] = next;
      }
    },
    
    getLeft() {
      this.setPosition();
      for (let i=0; i < items.length; i++) {
        if (i == items.length - 1) {
          items[i].style.left = this.position[0];
        } else {
          items[i].style.left = this.position[i+1];
        }
      }
    },

    getRight() {
      this.setPosition();
      for (let i=0; i < items.length; i++) {
        if (i == 0) {
          items[i].style.left = this.position[items.length - 1];
        } else {
          items[i].style.left = this.position[i-1];
        }
      }
    },

    addLeftPosition() {
      let items = document.getElementsByClassName("slider_box");
      for (let i=0; i < items.length; i++) {
        items[i].style.width = `${this.boxWidth}px`
        let leftPosition = i*this.boxWidth;
        items[i].style.left = `${leftPosition}px`
      }
    }
  },

  mounted() {
    this.addLeftPosition();
  }
});
