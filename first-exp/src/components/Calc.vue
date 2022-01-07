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

        <div v-if="error">
            Ошибка! {{ error }}
        </div>

        <div class="keyboard">
            <button
                v-for="operand in operands"
                @click="calc(operand)"
                :key = operand
                :title = operand
                :disabled="op1 === '' || op2 === ''"
            >
                {{ operand }}
            </button>
        </div>

        <div class="calc-control">
            <div>
                <input type="checkbox" id="checkbox" v-model="showScreenKeyboards">
                <label for="checkbox">Screen-keyboard</label>
            </div>

            <div class="calc-radio-buttons">
                <input type="radio" id="radioOne" value="1" v-model="entryField">
                <label for="radioOne">Number 1</label>
                <input type="radio" id="radioTwo" value="2" v-model="entryField">
                <label for="radioTwo">Number 2</label>
            </div>

            <div v-if="showScreenKeyboards">
                <button
                    v-for="(number, index) in screenKeyboard"
                    @click="inputPrint(number)"
                    :key="index"
                    :title="number"
                >
                    {{ number }}
                </button>

                <input
                    type="button"
                    value="Del"
                    @click="inputDel"
                >
            </div>
        </div>

        <div class="logs">
            <div
                v-for="(log, id) in logs"
                :key="id"
            >
                {{ log }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Calc',
  data: () => ({
    operands: ['+', '-', '/', '*', '^', 'int /'],
    screenKeyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    checked: 1,
    showScreenKeyboards: true,
    op1: '',
    op2: '',
    result: 0,
    error: '',
    logs: {},
    entryField: '1'
  }),
  methods: {
    add () {
      const { op1, op2 } = this
      this.result = op1 + op2
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    div () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'Делить на 0 нельзя!'
      } else {
        this.result = op1 / op2
      }
    },
    multi () {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    pow () {
      const { op1, op2 } = this
      this.result = Math.pow(op1, op2)
    },
    intDiv () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'Делить на 0 нельзя!'
      } else {
        const tempResult = op1 / op2
        this.result = tempResult >= 0
          ? Math.floor(tempResult)
          : Math.ceil(tempResult)
      }
    },
    calc (operation = '+') {
      this.error = ''

      switch (operation) {
        case '+':
          this.add()
          break
        case '-':
          this.sub()
          break
        case '*':
          this.multi()
          break
        case '/':
          this.div()
          break
        case 'int /':
          this.intDiv()
          break
        case '^':
          this.pow()
          break
      }

      const key = Date.now()

      const value = `${this.op1}${operation}${this.op2}=${this.result}`

      this.$set(this.logs, key, value)
    },

    inputPrint (number) {
      if (this.entryField === '1') {
        this.op1 = this.op1 + number
      } else {
        this.op2 = this.op2 + number
      }
    },

    inputDel () {
      if (this.entryField === '1') {
        const newNumber = this.delLastNumber(this.op1)
        if (newNumber !== null) {
          this.op1 = newNumber
        }
      } else {
        const newNumber = this.delLastNumber(this.op2)
        if (newNumber !== null) {
          this.op2 = newNumber
        }
      }
    },

    delLastNumber (value) {
      const str = value.toString()
      if (str.length < 1) {
        return null
      }
      value = +(str.slice(0, -1))
      if (isNaN(value)) {
        value = 0
      }
      return value
    }
  }
}
</script>

<style module>

</style>
