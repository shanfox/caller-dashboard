<template>
  <div id="caller_records">
    <div class="main_title">员工列表</div>      

    <div class="main_container">
      
      <!--查询条件-->
        <div class="main_container_form">
            <template>
                
                <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="85px" class="demo-ruleForm">    
                    <div class="main_container_input">
                  
                      <el-row>
                          <el-col :span="12">
                              <el-form-item label="线索名称" prop="name">
                                  <el-input v-model="ruleForm.name" placeholder="请输入线索名称"></el-input>
                              </el-form-item>
                          </el-col>
                          <el-col :span="12">
                              <el-form-item label="账号" prop="account">
                                  <el-input v-model="ruleForm.account" placeholder="请输入账号"></el-input>
                              </el-form-item>
                          </el-col>
                      </el-row>
                    </div>

                    <!--查询按钮-->
                    <div class="find-row">
                        <el-row>
                            <el-col :span="14">
                                <el-button type="primary" size="small" @click="submitForm('ruleForm')">查询</el-button>
                                <span>符合条件： 192</span>
                            </el-col>
                            <el-col :span="10">
                                <div class="right">
                                    
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>

              <!--线索名称表格-->
              <div>
                  <template>
                      <el-table :data="tableData"  style="width: 100%">
                          <el-table-column property="staffsName" label="姓名" width="200"></el-table-column>
                          <el-table-column property="staffsMob" label="手机号" width="300"></el-table-column>
                          <el-table-column property="staffsAccount" label="账号"></el-table-column>
                      </el-table>
                  </template>
              </div>

              <!--分页-->
              <div class="pagebox">
                  <template>
                      <div class="block">
                          <el-pagination
                          @size-change="handleSizeChange"
                          @current-change="handleCurrentChange"
                          :current-page="currentPage4"
                          layout="total, sizes, prev, pager, next, jumper"
                          :total="400">
                          </el-pagination>
                      </div>
                  </template>
              </div>

                    
            </template>
        </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabPosition: 'top',
        ruleForm: {
          name: '',
          account: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入线索名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        tableData: [
        {
            staffsName: '李先生',
            staffsMob: '13412455823',
            staffsAccount: 'fsdfk23rfj',
        }, {
             staffsName: '李先生',
            staffsMob: '13412455823',
            staffsAccount: 'fsdfk23rfj', 
        }, {
            staffsName: '李先生',
            staffsMob: '13412455823',
            staffsAccount: 'fsdfk23rfj',
        }, {
            staffsName: '李先生',
            staffsMob: '13412455823',
            staffsAccount: 'fsdfk23rfj', 
        }
        , {
            staffsName: '李先生',
            staffsMob: '13412455823',
            staffsAccount: 'fsdfk23rfj',
        }, {
            staffsName: '李先生',
            staffsMob: '13412455823',
            staffsAccount: 'fsdfk23rfj',
        }, {
            staffsName: '李先生',
            staffsMob: '13412455823',
            staffsAccount: 'fsdfk23rfj',
        }
        ],
        currentRow: null,
        currentPage4: 4,
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
  };
</script>

<style>
.el-tabs__nav-wrap {
    padding-left: 18px;
}
.el-form-item.is-required .el-form-item__label:before {
    content: '';
}
.main_container_input {
    padding: 32px 0px;
    background: #F8F8F8;
    clear: both;
    border-bottom: 1px solid #F0F0F0;
    position: relative;
}
.main_container_input:after {
    content: "";
    width: 0;
    height: 0;
    display: block;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    border-top: 8px solid #F0F0F0;
    position: absolute;
    bottom: -8px;
    left: 40px;
}
.el-tabs__header {
    padding: 0px;
    position: relative;
    margin: 0 0 0px;
}
.el-tabs__nav {
    padding: 5px 0;
}

.el-form-item {
    margin-bottom: 0px;
}
.el-tabs__content {
    overflow: visible;
    position: relative;
}
.find-row {
    padding: 20px 10px;
}
.find-row .right {
    text-align: right;
    padding-right: 40px;
}
.pagebox {
    text-align: right;
    padding: 15px 50px;
}

</style>