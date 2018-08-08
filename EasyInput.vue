<template>
<view class="i-class i-cell i-input" :class="{'i-input-error':error, 'i-input-wrapped':mode === 'wrapped'}">
    <view v-if="title" class="i-cell-hd i-input-title">{{ title }}</view>
    <textarea v-if="type === 'textarea'" auto-height :disabled='disabled ' :focus='autofocus ' :value='value ' :placeholder='placeholder ' :maxlength='maxlength ' class="i-input-input i-cell-bd" :class="{'i-input-input-right': right}" placeholder-class="i-input-placeholder"
        @input="handleInputChange" @focus="handleInputFocus" @blur="handleInputBlur">
    </textarea>
    <input v-else :type="type" :disabled="disabled" :focus="autofocus" :value="value" :placeholder="placeholder" :maxlength="maxlength" class="i-input-input i-cell-bd" :class="{'i-input-input-right' : right }" placeholder-class="i-input-placeholder" @input="handleInputChange"
        @focus="handleInputFocus" @blur="handleInputBlur" />
</view>
</template>

<script>
export default {
  name: "EasyInput",
  props: {
    title: {
      type: String
    },
    // text || textarea || password || number
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: "normal"
    },
    right: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleInputChange(event) {
      const { detail = {} } = event;
      const { value = "" } = detail;
      this.value = value;
      console.log(event.mp.detail);
      this.$emit("change", event);
    },

    handleInputFocus(event) {
      this.$emit("focus", event);
    },

    handleInputBlur(event) {
      this.$emit("blur", event);
    }
  }
};
</script>

<style>
.i-cell {
  position: relative;
  padding: 12px 15px;
  display: flex;
  background: #fff;
  align-items: center;
  line-height: 1.4;
  font-size: 14px;
  overflow: hidden;
}

.i-cell::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  transform: scale(0.5);
  transform-origin: 0 0;
  pointer-events: none;
  box-sizing: border-box;
  border: 0 solid #e9eaec;
  border-bottom-width: 1px;
  left: 15px;
  right: 0;
}

.i-cell-last::after {
  display: none;
}

.i-cell-icon {
  margin-right: 5px;
}

.i-cell-icon:empty {
  display: none;
}

.i-cell-bd {
  flex: 1;
}

.i-cell-text {
  line-height: 24px;
  font-size: 14px;
}

.i-cell-desc {
  line-height: 1.2;
  font-size: 12px;
  color: #80848f;
}

.i-cell-ft {
  position: relative;
  text-align: right;
  color: #495060;
}

.i-cell-access .i-cell-ft {
  padding-right: 13px;
}

.i-cell-access .i-cell-ft::after {
  content: " ";
  display: inline-block;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 50%;
  right: 2px;
  border-width: 2px 2px 0 0;
  border-color: #dddee1;
  border-style: solid;
  transform: translateY(-50%) matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
}

.i-input {
  padding: 7px 15px;
  color: #495060;
}

.i-input-wrapped {
  margin: 10px 15px;
  background-color: #fff;
}

.i-input-wrapped::after {
  left: 0;
  border-width: 1px;
  border-radius: 4px;
}

.i-input-error {
  color: #ed3f14;
}

.i-input-title {
  color: #495060;
  min-width: 65px;
  padding-right: 10px;
}

.i-input-input {
  flex: 1;
  line-height: 1.6;
  padding: 4px 0;
  min-height: 22px;
  height: auto;
  font-size: 14px;
}

.i-input-placeholder {
  font-size: 14px;
}

.i-input-input-right {
  text-align: right;
}

.i-input.i-input-wrapped::after {
  display: block;
}

.i-input-wrapped.i-input-error::after {
  border-color: #ed3f14;
}
</style>
