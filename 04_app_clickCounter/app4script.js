new Vue({
  el: "#app4",
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increase: function(num, event) {
      this.counter += num;
      console.log(this.counter + event.clientX);
    },
    udpateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});
