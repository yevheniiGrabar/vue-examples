<template>
  <el-table
    :data="filterUsers">

    <el-table-column
      align="left"
      width="300px">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          :placeholder="$t('search_employees')">
          <i slot="prefix" class="el-input__icon ri-search-2-line search"></i>
        </el-input>
      </template>
      <template slot-scope="{ row }">
        <div class="d-flex align-items-center">
          <div class="photo">
            <img :src='row.img' alt="Table image" />
          </div>
          <div class=" ml-3 d-flex flex-column justify-content-center">
            <div class="full-name font-weight-500">{{row.firstName}} {{row.lastName}}</div>
            <span class="email font-weight-500">{{row.email}}</span>
          </div>
        </div>
      </template>

    </el-table-column>

    <el-table-column
      align="left"
      :label="$t('role_in_system')"
      prop="role">
    </el-table-column>


    <el-table-column
      width="165px"
      :label="$t('login_date')"
      prop="login_date">
    </el-table-column>

    <el-table-column width="25px">

      <template slot-scope="scope" >
        <menu-card class="menu-table" :items="menuItems" :payload="(scope.row)"></menu-card>
      </template>

      <confirmation-popup :state="confirmPopupState"
                          @close="confirmPopupState = false"
                          @submit="confirmPopupState = false">
      </confirmation-popup>

    </el-table-column>
  </el-table>
</template>

<script>
import {Table, TableColumn, Button, Input} from 'element-ui';
import MenuCard from "../shared/MenuCard";
import ConfirmationPopup from "../shared/ConfirmationPopup";
import usersService from "../../services/users"


export default {
  name: "StaffList",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Button.name]: Button,
    [Input.name]: Input,
    MenuCard,
    ConfirmationPopup
  },
  data() {
    const vm = this;
    return {
      search: '',
      confirmPopupState: false,
      confirmPopupAction: () => {},
      usersData: [],
      menuItems: [
        {
          title: 'edit',
          icon: 'ri-edit-line',
          action(row) {
            vm.$router.push({name: 'edit-employee', params: {id: row.id}})
          }
        },
        {
          title: 'delete',
          icon: 'ri-delete-bin-5-line',
          action(row) {
            vm.confirmPopupState = true;
            vm.confirmPopupAction = () => {
              vm.confirmPopupState = false;
            };
          }
        }
      ],
    }
  },
  created() {
    usersService.getUsersStaff()
      .then(users => this.usersData = users)
  },
  computed: {
    filterUsers() {
      return this.usersData.filter(data => !this.search || data.firstName.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
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


.full-name{
  font-size: 14px;
  color: #7DB754;
  line-height: 15px;
}


.email {
  font-size: 12px;
  line-height: 15px;
}

</style>
