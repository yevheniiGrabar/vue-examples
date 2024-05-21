<template>
  <div>
    <div class="row mt-3 w-100">
      <div class="col-6">
        <label class="font-weight-500">{{$t('opportunity')}}</label>
        <p class="user-access">{{$t('choose_available_features_user')}}:</p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <base-checkbox class="user-access-checkbox" v-model="managerPermissions.checkEditUser">{{$t('can_edit_or_add_user')}}</base-checkbox>
        <base-checkbox class="user-access-checkbox" v-model="managerPermissions.checkEditContent">{{$t('can_edit_or_add_content')}}</base-checkbox>
        <base-checkbox class="user-access-checkbox" v-model="managerPermissions.checkPayment">{{$t('see_payments_subscriptions')}}</base-checkbox>
      </div>

      <div class="col">
        <base-checkbox class="user-access-checkbox" v-model="managerPermissions.checkStatistic">{{$t('see_statistic')}}</base-checkbox>
        <base-checkbox class="user-access-checkbox" v-model="managerPermissions.checkEditPersonalData">{{$t('can_edit_user_personal_data')}}</base-checkbox>
        <base-checkbox class="user-access-checkbox" v-model="managerPermissions.checkEditCompany">{{$t('can_edit_company_settings')}}</base-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManagerRoleSettings",
  data() {
    return {
      managerPermissions: {
        checkEditUser: false,
        checkEditContent: false,
        checkPayment: false,
        checkStatistic: false,
        checkEditPersonalData: false,
        checkEditCompany: false,
      },
    }
  },
  watch: {
    managerPermissions: {
      deep: true,
      handler(permissions) {
        this.$emit('update:permissions', permissions);
      }
    },
  },
}
</script>

<style scoped>
.user-access {
  font-size: 14px;
}

.user-access-checkbox >>> .form-check-label {
  font-size: 14px;
  color: #5F5F5F !important;
}
</style>
