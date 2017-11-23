<template>
  <div class="ty-datetime-picker">
    <mt-cell :title="title" class="clear-border-top weui-cells" is-link @click.native="showPicker">
      <span v-text="value"></span>
    </mt-cell>
    <mt-datetime-picker :ref="refId" :type="type" :start-date="startDate" v-model="label"
                        @confirm="pickerHandleChange"></mt-datetime-picker>
  </div>
</template>
<script>
  export default {
    name: 'TyDatetimePicker',
    props: {
      id: {
        type: String,
        default: new Date().getTime().toString()
      },
      title: {
        type: String,
        default: '开始时间'
      },
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'datetime'
      },
      startYear: {
        type: Number,
        default: new Date().getFullYear()
      }
    },
    watch: {
      value(newValue) {
        this.label = newValue
      }
    },
    data() {
      return {
        startDate: new Date(new Date().setFullYear(this.startYear)),
        refId: this.id,
        label: this.value
      }
    },
    mounted() {
    },
    methods: {
      showPicker() {
        let handler = (e) => {
          e.preventDefault()
        }
        document.addEventListener('touchmove', handler, false)
        this.$refs[this.refId].open()
        document.addEventListener('DOMNodeRemoved', function (event) {
          if (event.target.className === 'v-modal') {
            document.removeEventListener('touchmove', handler, false)
          }
        })
      },
      pickerHandleChange(value) {
        let foramt = 'yyyy-MM-dd hh:mm'
        if (this.type === 'date') {
          foramt = 'yyyy-MM-dd'
        } else if (this.type === 'time') {
          foramt = 'hh:mm'
        }
        if (this.type === 'time') {
          this.label = value
        } else {
          this.label = new Date(value).Format(foramt)
        }
        this.$emit('input', this.label)
        document.body.style.overflow = ''
      }
    }
  }
</script>

