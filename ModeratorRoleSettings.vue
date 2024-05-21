<template>
  <div class="row mt-3">
    <div class="col-md-6 w-100">
      <label class="font-weight-500">{{$t('cards')}}:</label>
      <select-custom
        :options="courses"
        :placeholder="$t('choose_cards')"
        :multiple-select="true"
        label="title"
        :reduce="(option) => option.id"
        :value="selected"
        @input="$emit('input', $event)">
      </select-custom>
    </div>
  </div>
</template>

<script>
import SelectCustom from "../shared/SelectCustom";
export default {
  name: "ModeratorRoleSettings",
  components: {SelectCustom},
  props: {
    courses: Array,
    selected: Array
  }
}
</script>

<style scoped>

</style>
