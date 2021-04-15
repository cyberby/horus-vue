<template>
  <b-field
    v-bind="$attrs"
    :label="label"
    :type="inputType"
    :message="errorMessage"
    :class="{ required: isRequired }"
  >
    <b-input
      v-bind="$attrs"
      v-model="innerValue"
      :type="type"
      :placeholder="placeholder"
      :loading="loading"
      :autocomplete="autocomplete"
      :password-reveal="type === 'password'"
      v-cleave="mask || {}"
    ></b-input>
  </b-field>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    placeholder: String,
    errors: Array,
    loading: Boolean,
    mask: Object,
    autocomplete: String,
    isRequired: Boolean,
    value: {
      type: null,
    },
  },
  data: () => ({
    innerValue: null,
  }),
  computed: {
    inputType() {
      if (this.errors && this.errors.length) return 'is-danger';
      return null;
    },
    errorMessage() {
      if (!this.errors || !this.errors.length) return null;
      return this.errors[0];
    },
  },
  watch: {
    innerValue(newVal) {
      this.$emit('input', newVal);
    },
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  mounted() {
    this.innerValue = this.value;
  },
};
</script>
