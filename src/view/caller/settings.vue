<template>
  <div id="caller_records">
    <div class="main_title">设置</div>
    <div class="main_container">

        <!--查询条件-->
        <div class="main_container_form">
            <template>
                <el-tabs>
                    <el-tab-pane label="意向设置">
                        <div class="call-set-main">
                            <div class="call-set-main-tit">已接通意向设置:</div>
                            <el-table :data="tableData"  style="width: 100%">
                                <el-table-column property="setsLevel" label="*意向等级" width="180"></el-table-column>
                                <el-table-column property="setsDes" label="意向描述"></el-table-column>
                                <el-table-column property="setsStats" label="描述"></el-table-column>
                                <el-table-column label="操作" width="400">
                                    <template scope="scope">
                                        <div>
                                            <el-button size="small">禁用</el-button>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div class="call-set-main-tit">未接通意向设置:</div>
                            <div>
                                <el-button>未接</el-button>
                                <el-button>关停机</el-button>
                                <el-button>空号</el-button>
                            </div>
                            <div class="call-set-main-save">
                                <el-button type="primary">保存</el-button>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="标签设置">
                        <div class="call-set-main-label" id="tab-label-tit">
                            <!--<a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">工作区域<span>X</span></a>
                            <a href="javascript:;">知晓渠道<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>
                            <a href="javascript:;">居住区域<span>X</span></a>-->
                            <a href="javascript:;"><i>+</i></a>
                            <input type="text" id="tab-label-tit-input" />
                        </div>
                        <ul class="call-set-main-label-ul">
                            <li>
                                <a>武侯区</a>
                                <span>X</span>
                            </li>
                            <li>
                                <a>高新区</a>
                                <span>X</span>
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="号码加密">
                        <div class="call-set-main">
                            <el-form>
                                <h3 class="call-set-main-number-tit">号码加密</h3>
                                <el-checkbox v-model="encryption">是否加密call客号码</el-checkbox> 
                                <div class="call-set-main-number-txt">注：加密后call客手机号后四位号码将加密</div>
                                <div>
                                    <el-button type="primary">保存</el-button>
                                </div>
                            </el-form>
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
          encryption: false,
          tableData: [
            {
            setsLevel: 'A',
            setsDes: '有意向',
            setsStats: '已启用'
            },
            {
            setsLevel: 'B',
            setsDes: '考虑中',
            setsStats: '已启用'
            },
            {
            setsLevel: 'C',
            setsDes: '一般意向',
            setsStats: '已启用'
            },
            {
            setsLevel: 'D',
            setsDes: '无意向',
            setsStats: '已启用'
            }
          ]
      };
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

.call-set-main { padding:0 15px; font-weight:600;}
.call-set-main-tit { padding: 15px 0;}
.call-set-main-save { padding:20px 0;}
.call-set-main-label {
    width:100%;
    background: #F8F8F8;
    overflow: hidden;
    clear:both;
}
.call-set-main-label a {
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: relative;
    display: inline-block;
    color: #3F3F3F;
    float:left;
}
.call-set-main-label a span {
    display: none;
    font-size:10px;
    line-height: 10px;
}
.call-set-main-label a:hover{
    color: #0E8CFF;
    background: #fff;
}
.call-set-main-label a:hover span {
    width: 10px;
    height: 10px;
    position: absolute;
    right: 2px;
    top: 2px;
    display: block;
    color: #999999;
}
.call-set-main-label a i {
    font-size: 24px;
}

.call-set-main-label input {
    width: 120px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #3F3F3F;
}

.call-set-main-label-ul li {
    width: 128px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #F8F8F8;
    margin: 10px 15px;
    float:left;
    position: relative;
}
.call-set-main-label-ul li a {
    color: #808080;
}

.call-set-main-label-ul li:hover a {
    border: 1px solid #E5E5E5;
    padding:5px 20px 5px 5px;
    border-radius:4px;
}

.call-set-main-label-ul li span {
    display: none;
    line-height: 22px;
    font-size:10px;
    width: 22px;
    height: 22px;
    position: absolute;
    right: -11px;
    top: -11px;
    background: #fff;
    border-radius:50%;
}
.call-set-main-label-ul li:hover span {
    
    display: block;
    color: #999999;
}
.call-set-main-number-tit {
    padding: 40px 0;
}
.call-set-main-number-txt {
    padding: 10px 0 100px 25px;
    font-weight: 400;
}
#tab-label-tit-input {
    display: none;
}
</style>