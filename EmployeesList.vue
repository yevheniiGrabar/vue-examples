<template >
  <el-table :data="companyUsers">
<!--   -->
<!--    data="companyUsers"-->
    <el-table-column
      align="left">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          :placeholder="$t('search_employees')">
          <i slot="prefix" class="el-input__icon ri-search-2-line search"></i>
        </el-input>
      </template>
        <div class="d-flex align-items-center">
          <div class="photo">
<!--            :src='row.img'-->

<!--            <img alt="Table image" />-->
          </div>
          <div class=" ml-3 d-flex flex-column justify-content-center">
            <div  class="full-name font-weight-500"></div>
            <h4 class="card-title title font-weight-normal mb-0"></h4>
            <span class="email font-weight-500" ></span>
          </div>
        </div>

    </el-table-column>

    <el-table-column
      align="left"
      :label="$t('position')"
      prop="first_name">
    </el-table-column>

    <el-table-column
      :label="$t('branch')"
      prop="affiliate_id">
    </el-table-column>

    <el-table-column
      width="110px"
      class="text-center"
      align="center"
      :label="$t('learning_progress')">
      <template slot-scope="scope">
        <span class="font-weight-500 progress-learning">{{scope.row.progress}}</span>
      </template>
    </el-table-column>

    <el-table-column width="25px">

      <template slot-scope="scope">
        <menu-card :items="menuItems" :payload="companyUsers.id" class="menu-table"></menu-card>
      </template>

      <confirmation-popup
                          :state="confirmPopupState"
                          @close="confirmPopupState = true"
                          @submit="confirmPopupAction">
      </confirmation-popup>
    </el-table-column>
  </el-table>


</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {Table, TableColumn, Button, Input} from 'element-ui';
import MenuCard from "../shared/MenuCard";
import ConfirmationPopup from "../shared/ConfirmationPopup";
import { companyUserActions, CompanyUserGetters } from "../../store/modules/user";

export default {
  name: "EmployeesList",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Button.name]: Button,
    [Input.name]: Input,
    MenuCard,
    ConfirmationPopup,

  },
  props: {
    companyUsers: {
      required: true,
      type: Array,
      defaultValue: (() => {
      }),
    },

  },
  data() {
    const vm =  this;
    return {
      companyUserPopupOpen: false,
      confirmPopupState: false,
      companyUserPopupIsEdit: false,
      selectedCompanyUser: null,
      confirmPopupAction: () => {
      },
      menuItems: [
        {
          title: 'edit',
          icon: 'ri-edit-line',
          action(user) {
            vm.selectedCompanyUser = user;
            vm.companyUserPopupOpen = true;
            vm.companyUserPopupIsEdit = true;
          }
        },
        {
          title: 'delete',
          icon: 'ri-delete-bin-5-line',
          action(user) {
            vm.confirmPopupState = true;
            vm.confirmPopupAction = () => {
              vm.confirmPopupState = false;
              vm.removeCompanyUser(user);
            }
          }
        }
      ],
      filterUsers() {
        return this.usersData.filter(data => !this.search || data.firstName.toLowerCase().includes(this.search.toLowerCase()))
      },
      methods: {

        ...mapActions('companyUsers', {
          createCompanyUser: companyUserActions.ADD_USER,
          updateCompanyUser: companyUserActions.UPDATE_USER,
          removeCompanyUser: companyUserActions.REMOVE_USER
        }),
        // resetCompanyUserPopupState() {
        //   this.companyUserPopupIsEdit = false;
        //   this.companyUserPopupOpen = false;
        //   this.selectedCompanyUser = null;
        // },
        // submitUpdateCompanyUser(companyUsers) {
        //   this.updateCompanyUser(companyUsers)
        //     .then(() => {
        //       this.resetCompanyUserPopupState();
        //     })
        //     .catch(e => {
        //       //TODO move to helper
        //       this.$notify({type: 'danger', message: this.$t('title_exists')});
        //     });
        // },
        created() {
          console.log(companyUsers)
        },
      },
    }
  }
}
</script>

<style scoped>

.menu-table >>> .dropdown {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}

.el-table {
  width: 100%;
}

.el-table table > tbody > tr > td .photo {
  width: 35px;
  height: 35px;
  margin-left: 0;
  margin-right: 0;
}
.el-table >>> table {
  margin-bottom: 0;
}

.el-table >>> .el-input__inner {
  border: 0;
  padding-left: 40px;
}

.el-table >>> .el-input__inner::placeholder {
  font-size: 14px;
}

.el-input__icon.search {
   color: #7DB754;
   font-size: 19px;
}

.el-table table > tbody > tr > td .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.el-table >>> .el-table__header-wrapper {
  box-shadow: 0 1px 14px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
}

.el-table >>> .el-table__body-wrapper {
  overflow: visible;
}

.el-table >>>  thead > tr > th{
  text-transform: none;
  font-size: 15px;
  font-weight: 500;
  color: #8E8E8E !important;
}

.el-table >>> table > tbody > tr > td {
  border-color: #F3F3F3;
}

.el-table, .el-table__append-wrapper {
  overflow: inherit;
}

.el-table >>>  table td {
  border-top: 1px solid #F3F3F3;
}

.full-name, .progress-learning{
  font-size: 14px;
  color: #7DB754;
}

.full-name {
  line-height: 15px;
}

.email {
  font-size: 12px;
  line-height: 15px;
}


</style>
