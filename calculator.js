const app = Vue.createApp({
  data() {
    return {
      total: 0,
      entry: ''
    }
  },
  methods: {
    addEntry( number) {
      this.entry += number
    },
    add() {

    },
    subtract() {

    },
    multiply() {

    },
    divide() {

    },
    finish() {

    },
    clearAll() {
      this.total = 0
      this.entry = ''
    },
    clearEntry() {
      this.entry = ''
    }
  }

})