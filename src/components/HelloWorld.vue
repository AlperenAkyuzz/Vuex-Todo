<template>
  <div>
    <input type="text" v-model="inputValue" placeholder="Bir şeyler yaz" />
    <button @click="addItem"> Add Item</button>

    <pre>
      {{ $store.state.todo.items }}
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    addItem() {
      this.inputValue === '' ? alert('boş bırakma') : ''
      this.$store.commit('todo/add', this.inputValue)
    }
  },
  computed: {
    ...mapState('todo', ['items']),
  },
  created() {
    //console.log(this.$store.getters['todo/_all'])
    this.$store.dispatch('todo/fetchData', 'bla bla')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
