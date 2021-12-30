<template>
    <div>
        <h2>Calculator</h2>

        <div class="main">
            <label for="op1">
                <input id="op1" type="number" v-model.number="op1">
            </label>

            <label for="op2">
                <input id="op2" type="number" v-model.number="op2">
            </label>

            = {{ result }}
        </div>

        <div class="keyboard">
            <button @click="add">+</button>
            <button @click="sub">-</button>
            <button @click="div">/</button>
            <button @click="multi">*</button>
            <button @click="pow">^</button>
            <button @click="intDiv">int /</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0
  }),
  methods: {
    add () {
      this.result = this.op1 + this.op2
    },
    sub () {
      this.result = this.op1 - this.op2
    },
    div () {
      this.result = this.op1 / this.op2
    },
    multi () {
      this.result = this.op1 * this.op2
    },
    pow () {
      this.result = Math.pow(this.op1, this.op2)
    },
    intDiv () {
      const tempResult = this.op1 / this.op2
      this.result = tempResult >= 0
        ? Math.floor(tempResult)
        : Math.ceil(tempResult)
    }
  }
}
</script>

<style scoped>

</style>
