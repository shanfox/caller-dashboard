<template>
  <div id="caller_records">
    <div class="main_title">任务管理</div>      

    <div class="main_container">
      
      <!--查询条件-->
        <div class="main_container_form">
            <template>
                
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="85px" class="demo-ruleForm">
                    <div class="main_container_input">
                      <el-row>
                          <el-col :span="8">
                              <el-form-item label="线索名">
                                  <el-select v-model="ruleForm.value11" placeholder="请选择线索名">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                              </el-form-item>
                          </el-col>
                          <el-col :span="8">
                              <el-form-item  label="任务名">
                                  <el-select v-model="ruleForm.value12" placeholder="请选择任务名">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                              </el-form-item>
                          </el-col>
                      </el-row>
                      <hr>
                      <el-row>
                          <el-col :span="8">
                              <el-form-item label="拨打人">
                                  <el-select v-model="ruleForm.value13" placeholder="请选择线索名">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                              </el-form-item>
                          </el-col>
                          <el-col :span="8">
                              <el-form-item  label="完成情况">
                                  <el-select v-model="ruleForm.value14" placeholder="请选择任务名">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                              </el-form-item>
                          </el-col>
                          <el-col :span="8">
                                <el-form-item label="创建时间">
                                    <el-date-picker
                                    v-model="ruleForm.value15"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
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
                                    <el-button size="small">导出</el-button>
                                </div>
                            </el-col>
                        </el-row>
                        
                    </div>
                </el-form>

              <!--线索名称表格-->
              <div>
                  <template>
                      <el-table :data="tableData"  style="width: 100%">
                          <el-table-column property="tasksbdr" label="拨打人" width="200"></el-table-column>
                          <el-table-column property="tasksybd" label="已拨打" width="100"></el-table-column>
                          <el-table-column property="tasksyjt" label="已接通" width="100"></el-table-column>
                          <el-table-column property="tasksrwm" label="任务名" width="200"></el-table-column>
                          <el-table-column property="taskscjsj" label="创建时间" width="300"></el-table-column>
                          <el-table-column property="tasksrwdqsj" label="任务到期时间" width="200"></el-table-column>
                          <el-table-column property="taskswcqk" label="完成情况"></el-table-column>
                          <el-table-column label="操作">
                            <template scope="scope">
                              <el-button size="small">停止</el-button>
                            </template>
                          </el-table-column>
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
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        ruleForm: {
          value11: '',
          value12: '',
          value13: '',
          value14: '',
          value15: ''
        },
        rules: {
          value11: [
            { required: true, message: '请选择线索名', trigger: 'change' }
          ],
          value12: [
            { required: true, message: '请选择任务名', trigger: 'change' }
          ],
          value13: [
            { required: true, message: '请选择拨打人', trigger: 'change' }
          ],
          value14: [
            { required: true, message: '请选择完成情况', trigger: 'change' }
          ],
          value15: [
            { type: 'date', required: true, message: '请选择日期时间', trigger: 'change' }
          ]
        },
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        tableData: [
        {
            tasksbdr: '李先生',
            tasksybd: '300',
            tasksyjt: '200',
            tasksrwm: '任务名任务名',
            taskscjsj: '2015-04-25 16:30',
            tasksrwdqsj: '2015-04-25 16:30',
            taskswcqk: '已完成',
        }, {
            tasksbdr: '李先生',
            tasksybd: '300',
            tasksyjt: '200',
            tasksrwm: '任务名任务名',
            taskscjsj: '2015-04-25 16:30',
            tasksrwdqsj: '2015-04-25 16:30',
            taskswcqk: '进行中',
        }, {
            tasksbdr: '张先生',
            tasksybd: '300',
            tasksyjt: '200',
            tasksrwm: '任务名任务名',
            taskscjsj: '2015-04-25 16:30',
            tasksrwdqsj: '2015-04-25 16:30',
            taskswcqk: '已完成',
        }, {
            tasksbdr: '李先生',
            tasksybd: '300',
            tasksyjt: '200',
            tasksrwm: '任务名任务名',
            taskscjsj: '2015-04-25 16:30',
            tasksrwdqsj: '2015-04-25 16:30',
            taskswcqk: '未完成',
        }
        , {
            tasksbdr: '李先生',
            tasksybd: '300',
            tasksyjt: '200',
            tasksrwm: '任务名任务名',
            taskscjsj: '2015-04-25 16:30',
            tasksrwdqsj: '2015-04-25 16:30',
            taskswcqk: '已完成',
        }, {
            tasksbdr: '李先生',
            tasksybd: '300',
            tasksyjt: '200',
            tasksrwm: '任务名任务名',
            taskscjsj: '2015-04-25 16:30',
            tasksrwdqsj: '2015-04-25 16:30',
            taskswcqk: '已完成',
        }, {
            tasksbdr: '李先生',
            tasksybd: '300',
            tasksyjt: '200',
            tasksrwm: '任务名任务名',
            taskscjsj: '2015-04-25 16:30',
            tasksrwdqsj: '2015-04-25 16:30',
            taskswcqk: '已完成',
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
    padding: 18px 0px;
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