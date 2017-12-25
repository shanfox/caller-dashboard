<template>
  <div id="caller_records">
    <div class="main_title">线索管理</div>
    <div class="main_container">

        <!--查询条件-->
        <div class="main_container_form">
            <template>
                <el-tabs :tab-position="tabPosition">
                    <el-tab-pane label="未完成">
                        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="85px" class="demo-ruleForm">

                            <div class="main_container_input">
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="线索名称" prop="name">
                                            <el-input v-model="ruleForm.name" placeholder="请输入线索名称"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="时间" prop="date">
                                            <template>
                                                <div class="block">
                                                    <el-date-picker
                                                    v-model="value3"
                                                    type="datetimerange"
                                                    range-separator="至"
                                                    start-placeholder="开始日期"
                                                    end-placeholder="结束日期">
                                                    </el-date-picker>
                                                </div>
                                            </template>
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
                                            <el-dropdown>
                                                <el-button type="primary">
                                                    新增线索<i class="el-icon-arrow-down el-icon--right"></i>
                                                </el-button>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item>模板下载</el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </div>
                                    </el-col>
                                </el-row>
                                
                            </div>
                        </el-form>

                        <!--线索名称表格-->
                        <div>
                            <template>
                                <el-table :data="tableData"  style="width: 100%">
                                    <el-table-column property="cluesName" label="线索名称"></el-table-column>
                                    <el-table-column property="cluesDate" label="创建日期"></el-table-column>
                                    <el-table-column property="cluesCount" label="总数量"></el-table-column>
                                    <el-table-column property="cluesSurplus" label="剩余号码数量"></el-table-column>
                                    <el-table-column label="操作" width="400">
                                        <template scope="scope">
                                            <div>
                                                <el-button size="small">删除</el-button>
                                                <el-button size="small">分配任务</el-button>
                                                <el-button size="small">导入线索</el-button>
                                                <el-button size="small">导入详情</el-button>
                                            </div>
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

                    </el-tab-pane>
                    <el-tab-pane label="已完成">

                        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="85px" class="demo-ruleForm">
                            <div class="main_container_input">
                                <el-row>
                                    <el-col :span="12">
                                        <el-form-item label="线索名称" prop="name">
                                            <el-input v-model="ruleForm.name" placeholder="请输入线索名称"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="时间" prop="date">
                                            <template>
                                                <div class="block">
                                                    <el-date-picker
                                                    v-model="value3"
                                                    type="datetimerange"
                                                    range-separator="至"
                                                    start-placeholder="开始日期"
                                                    end-placeholder="结束日期">
                                                    </el-date-picker>
                                                </div>
                                            </template>
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
                                    <el-table-column property="cluesName" label="线索名称"></el-table-column>
                                    <el-table-column property="cluesDate" label="创建日期"></el-table-column>
                                    <el-table-column property="cluesCount" label="总数量"></el-table-column>
                                    <el-table-column property="cluesSurplus" label="剩余号码数量"></el-table-column>
                                    <el-table-column label="操作" width="400">
                                        <template scope="scope">
                                            <div>
                                                <el-button size="small">删除</el-button>
                                                <el-button size="small">再分配</el-button>
                                                <el-button size="small">导入详情</el-button>
                                            </div>
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
                    </el-tab-pane>
                </el-tabs>
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
        },
        rules: {
          name: [
            { required: true, message: '请输入线索名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        tableData: [
        {
            cluesName: '天府软件园',
            cluesDate: '2016-05-02 12:12',
            cluesCount: '1000/1000',
            cluesSurplus: '20'
        }, {
            cluesName: '天府软件园',
            cluesDate: '2016-05-02 12:12',
            cluesCount: '1000/1000',
            cluesSurplus: '20' 
        }, {
            cluesName: '天府软件园',
            cluesDate: '2016-05-02 12:12',
            cluesCount: '1000/1000',
            cluesSurplus: '20'
        }, {
            cluesName: '天府软件园',
            cluesDate: '2016-05-02 12:12',
            cluesCount: '1000/1000',
            cluesSurplus: '20'
        }
        , {
            cluesName: '天府软件园',
            cluesDate: '2016-05-02 12:12',
            cluesCount: '1000/1000',
            cluesSurplus: '20' 
        }, {
            cluesName: '天府软件园',
            cluesDate: '2016-05-02 12:12',
            cluesCount: '1000/1000',
            cluesSurplus: '20'
        }, {
            cluesName: '天府软件园',
            cluesDate: '2016-05-02 12:12',
            cluesCount: '1000/1000',
            cluesSurplus: '20'
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