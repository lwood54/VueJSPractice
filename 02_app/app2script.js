new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'http://google.com',
    class1: "bodyContainer",
    finishedLink: '<a href="http://google.com">The Googs</a>'
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello';
      return this.title;
    }
  }
});
