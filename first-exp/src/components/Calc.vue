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

        <div>
            <label>
                <input v-model="showScreenKeyboards" type="checkbox"> Отобразить экранную клавиатуру
            </label>
            <div v-if="showScreenKeyboards">
                <button
                    v-for="screenBtn in screenKeyboard"
                    :key="screenBtn"
                    @click="keyboardHandler(checked, screenBtn)"
                >
                    {{ screenBtn }}
                </button>
                <div>
                    <label>
                        <input type="radio" name="operand" v-model="checked" value="1"> Операнд 1
                    </label>
                    <label>
                        <input type="radio" name="operand" v-model="checked" value="2"> Операнд 2
                    </label>
                </div>
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
    screenKeyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Del'],
    checked: 1,
    showScreenKeyboards: true,
    op1: [],
    op2: [],
    result: 0,
    error: '',
    logs: {}
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

    keyboardHandler (checkedOperand, button) {
      const { op1, op2 } = this
      if (+checkedOperand === 1) {
        if (button === 'Del') {
          this.op1.pop()
        } else {
          this.op1.push(button.toString())
        }
        this.op1 = +op1.join('')
      } else if (+checkedOperand === 2) {
        if (button === 'Del') {
          this.op2.pop()
        } else {
          this.op2.push(button.toString())
        }
        this.op2 = +op2.join('')
      }
    }
  }
}
</script>

<style module>

</style>
