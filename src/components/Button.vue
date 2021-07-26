<template>
  <button
    class="button"
    @click="clickButton"
  >{{ checkButton }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';


export default defineComponent({
  name: 'Button',
  props: {
    char: {
      type: String,
      required: true
    },
  },
  computed: {
    ...mapState<any>({
      currentLayout: (state: any): string => state.keyboardStore.currentLayout,
      beforeLayout: (state: any): string => state.keyboardStore.beforeLayout,
    }),
    checkButton() {
      let char = '';

      const firstChar = this.char[0]
      const lastChar = this.char[this.char.length - 1]

      if (
        (firstChar === '{' && lastChar === '}')
        || (firstChar === '[' && lastChar === ']')
        || (firstChar === '<' && lastChar === '>')
      ) {
        char = this.char.slice(1, this.char.length - 1);
      } else {
        char =  this.char;
      }
      return char
    },
  },
  methods: {
    clickButton(ev) {
      const firstChar = this.char[0];
      const lastChar = this.char[this.char.length - 1];
      const actionType = this.char.slice(1, this.char.length - 1);

      if (firstChar === '{' && lastChar === '}')  {
        this.$store.dispatch('setBeforeLayout', this.currentLayout);
        this.$store.dispatch('setCurrentLayout', actionType);
      } else if (firstChar === '[' && lastChar === ']') {
        this.$store.dispatch('setCurrentLayoutType', actionType);
      } else if (firstChar === '<' && lastChar === '>') {
        if (actionType === 'back') {
          this.$store.dispatch('setCurrentLayout', this.beforeLayout);
          this.$store.dispatch('setBeforeLayout', '');
        }
      } else {
        this.$store.dispatch('inputText', ev.target.textContent);
      }
    },
  }
})
</script>
