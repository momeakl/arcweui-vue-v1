<template>
  <vodal :show="show" animation="slideRight" @hide="hideVodal" measure="%" :width="100" :height="100" :duration="500"
         :closeButton="true" :mask="false" className="vodal-index">
    <div class="pageContent">
      <div class="vheader">相关人员</div>
      <Search  ref="search" v-on:search="search" v-model="serarchText" @searchCancel="searchCancel"></Search>
        <div class="vbody" v-if="showInitResult">
          <TitleCell :showBorderBottom="true">
            <template v-for="(item,index) in nodeItems">
              <div @click="switchNode(item)" :class="index + 1 != nodeItems.length && nodeItems.length!=1 ? 'nav-font' :''">
                {{item.dept.deptName}}
                <span class="weui-cell__ft jiantou" v-if="index + 1 != nodeItems.length"></span>
              </div>
            </template>
          </TitleCell>
          <div class="weui-cells weui-cells_checkbox" >
            <div v-if="curDeptNode!=null" style="display: flex;width: 100%;flex-direction: column; flex-wrap: wrap;align-content: stretch;">
              <div v-for="item in curDeptNode.children" class="weui-cell weui-check__label weui-cell_access" style="display: flex; ">
                <label class="weui-cell__hd" style="flex: 0 0 auto;" :id="item.dept.id" ref="item.dept.id" @click="checkDept(item)">
                  <input type="checkbox" v-model="item.check" :disabled="item.disabled" class="weui-check" @click.stop="checked" >
                  <i class="weui-icon-checked" v-bind:class="{'weui-icon-checked-disable' : item.disabled}"></i>
                </label>
                <div class="weui-cell__hd" style="flex:1 1 100%" @click="switchChildren(item)">
                  <img v-lazy="lazyImgObj" alt="头像" width="24" height="24" style="vertical-align: middle;border-radius: 4px;">
                  {{item.dept.deptName}}

                </div>
                <div class="weui-cell__ft"></div>
              </div>
            </div>

            <template v-if="curDeptNode!=null">
              <template v-for="emp in curDeptNode.employeeBeans">
                <div class="weui-cell weui-check__label" style="padding: 0px">
                  <label class="weui-cell weui-check__label" :id="emp.empId" @click="checkEmp(emp)">
                    <div class="weui-cell__hd">
                      <input type="checkbox" v-model="emp.check" :disabled="emp.disabled" class="weui-check"  @click.stop="checked" >
                      <i class="weui-icon-checked" v-bind:class="{'weui-icon-checked-disable' : emp.disabled}"></i>
                    </div>
                    <div class="weui-cell__hd">
                      <img v-if="emp.header" :src="emp.header"  width="24" height="24" style="vertical-align: middle;border-radius: 4px;">
                      <img v-else v-lazy="lazyHeaderObj"   width="24" height="24" style="vertical-align: middle;border-radius: 4px;">
                      {{emp.trueName}}
                    </div>
                  </label>
                </div>
              </template>
            </template>

          </div>

        </div>
        <div class="body" v-if="!showInitResult">
          <div class="weui-cells weui-cells_checkbox" >
            <div v-if="schDeptNode!=null" style="display: flex;width: 100%;flex-direction: column; flex-wrap: wrap;align-content: stretch;">
              <div v-for="item in schDeptNode.children" class="weui-cell weui-check__label weui-cell_access" style="display: flex; ">
                <label class="weui-cell__hd" style="flex: 0 0 auto;"  @click="schCheckDept(item)">
                  <input type="checkbox" v-model="item.check" :disabled="item.disabled" class="weui-check" @click.stop="checked" >
                  <i class="weui-icon-checked" v-bind:class="{'weui-icon-checked-disable' : item.disabled}"></i>
                </label>
                <div class="weui-cell__hd" style="flex:1 1 100%" @click="switchChildren(item,true)">
                  <img v-lazy="lazyImgObj" alt="头像" width="24" height="24" style="vertical-align: middle;border-radius: 4px;">
                  {{item.dept.deptName}}

                </div>
                <div class="weui-cell__ft"></div>
              </div>
            </div>

            <template v-if="schEmpList!=null">
              <template v-for="emp in schEmpList">
                <div class="weui-cell weui-check__label" style="padding: 0px">
                  <label class="weui-cell weui-check__label" :id="emp.empId" @click="checkEmp(emp,true)">
                    <div class="weui-cell__hd">
                      <input type="checkbox" v-model="emp.check" :disabled="emp.disabled" class="weui-check"  @click.stop="checked" >
                      <i class="weui-icon-checked" v-bind:class="{'weui-icon-checked-disable' : emp.disabled}"></i>
                    </div>
                    <div class="weui-cell__hd">
                      <img v-if="emp.header" :src="emp.header"  width="24" height="24" style="vertical-align: middle;border-radius: 4px;">
                      <img v-else v-lazy="lazyHeaderObj"   width="24" height="24" style="vertical-align: middle;border-radius: 4px;">
                      {{emp.trueName}}
                    </div>
                  </label>
                </div>
              </template>
            </template>

          </div>
        </div>
        <PersionFooter :selected="selected" @removeItem = "removeItem" @confirm = "confirm"></PersionFooter>
    </div>

  </vodal>
</template>
<script>
  import vodal from 'vodal'
  import Search from './Search'
  import TitleCell from './TitleCell'
  import PersionFooter from './PersionFooter'
  
  export default {
    name: 'Persion',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      contacts: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      vodal,
      Search,
      TitleCell,
      PersionFooter
    },
    data() {
      return {
        serarchText: '',
        res: this.contacts,
        curDeptNode: null,
        nodeItems: [],
        deptList: [],
        empList: [],
        selected: [],
        allDeptList: [],
        lazyImgObj: {
          src: require('../../assets/img/icon-dept.png'),
          error: require('../../assets/img/icon-dept.png'),
          loading: require('../../assets/img/icon-dept.png')
        },
        lazyHeaderObj: {
          src: require('../../assets/img/head.png'),
          error: require('../../assets/img/head.png'),
          loading: require('../../assets/img/head.png')
        },
        showInitResult: true,
        schDeptNode: {
          children: []
        },
        schEmpList: []
      }
    },
    watch: {
      contacts: {
        handler(newValue, oldValue) {
          this.res = newValue
          this.curDeptNode = this.res
          this.nodeItems[0] = this.curDeptNode
        },
        deep: true
      }
    },
    methods: {
      hideVodal() {
        this.$emit('hide-persion')
      },
      schCheckDept(item) {
        this.showInitResult = true
        this.checkDept(item)
      },
      //因为需要同时往selected(footbar 显示的数据) 中绑定值 故没有使用v-model 直接绑定的数组中
      checkDept(item) {
        if (item.disabled) {
          return
        }
        if (!this.deptList.includes(item)) {
          this.deptList.push(item)
          this.selected.push(item)
        } else {
          this.deptList.map((deptNode) => {
            if (deptNode.dept.deptId === item.dept.deptId) {
              let index = this.deptList.indexOf(deptNode)
              this.deptList.splice(index, 1)
            }
          })
          this.selected.map((deptNode) => {
            if (deptNode.dept && deptNode.dept.deptId === item.dept.deptId) {
              let index = this.selected.indexOf(deptNode)
              this.selected.splice(index, 1)
            }
          })
        }
      },
      //员工选中
      checkEmp(item, isSearch) {
        if (isSearch) {
          this.searchCancel()
        }
        if (item.disabled) {
          return
        }
        let empIds = this.empList.map((emp) => {
          return emp.empId
        })
        if (empIds.indexOf(item.empId) === -1) {
          this.empList.push(item)
          this.selected.push(item)
        } else {
          this.empList.map((emp) => {
            if (emp.empId === item.empId) {
              let index = this.empList.indexOf(emp)
              this.empList.splice(index, 1)
            }
          })
          this.selected.map((emp) => {
            if (item.empId && emp.empId === item.empId) {
              let index = this.selected.indexOf(emp)
              this.selected.splice(index, 1)
            }
          })
        }
      },
      //点击footbar 删除点击项
      removeItem(item) {
        if (item.empId) {
          if (document.getElementById(item.empId)) {
            document.getElementById(item.empId).click()
          } else {
            this.checkEmp(item)
          }
        } else {
          if (document.getElementById(item.dept.id)) {
            document.getElementById(item.dept.id).click()
          } else {
            this.checkDept(item)
          }
        }
      },
      //搜索触发
      search(newVal) {
        this.serarchText = newVal
        if ((newVal.length === 0 || /^\s+$/.test(newVal))) {
          return
        }
        let depts = this.res
        this.schDeptNode.children.splice(0, this.schDeptNode.children.length)
        this.schEmpList.splice(0, this.schEmpList.length)
        this.findSearchResult(depts)
        //面板展示
        this.showInitResult = false
      },
      //根据输入关键字搜索结果
      findSearchResult(depts) {
        if (depts && depts.dept) {
          let dept = depts.dept
          let emps = depts.employeeBeans
          let children = depts.children
          if (dept.deptName.includes(this.serarchText)) {
            this.schDeptNode.children.push(depts)
          }

          if (emps && emps.length > 0) {
            emps.forEach(emp => {
              if (emp.trueName.includes(this.serarchText)) {
                this.schEmpList.push(emp)
              }
            })
          }
          if (children && children.length > 0) {
            children.forEach(item => {
              this.findSearchResult(item)
            })
          }
        }
      },
      //searchbar 取消
      searchCancel() {
        this.showInitResult = true
        this.$refs.search.invokCancel()
      },
      checked() {
      },
      //点击部门进入部门列表
      switchChildren(item, isSearch) {
        if (isSearch) {
          this.searchCancel()
        }
        this.curDeptNode = item
        this.nodeItems.push(item)

        var depts = this.deptList.map((dept) => {
          return dept.dept.deptId
        })
        item.children.map((dept) => {
          dept.check = false
          var deptItem = dept.dept
          if (depts.length > 0 && depts.join(',').indexOf(deptItem.deptId) > -1) {
            dept.check = true
          }
          dept.disabled = false
        })

        var emps = this.empList.map((emp) => {
          return emp.empId
        })
        item.employeeBeans.map((emp) => {
          emp.check = false
          if (emps.length > 0 && emps.join(',').indexOf(emp.empId) > -1) {
            emp.check = true
          }
          emp.disabled = false
        })
        if (item.check) {
          item.children.map((dept) => {
            dept.check = true
            dept.disabled = true
          })
          item.employeeBeans.map((emp) => {
            emp.check = true
            emp.disabled = true
          })
        }
      },
      //点击面包屑
      switchNode(item) {
        this.curDeptNode = item
        let index = this.nodeItems.indexOf(item)
        this.nodeItems.splice(index + 1, this.nodeItems.length)

        var emps = this.empList.map((emp) => {
          return emp.empId
        })
        item.employeeBeans.map((emp) => {
          emp.check = false
          if (emps.length > 0 && emps.join(',').indexOf(emp.empId) > -1) {
            emp.check = true
            emp.disabled = true
          }
          emp.disabled = false
        })
      },
      //footbar 确定
      confirm() {
        let emps = this.empList.map((emp) => {
          return emp.empId
        })
        this.allDeptList.splice(0, this.allDeptList.length)
        this.getDeptIds(this.deptList)
        this.$emit('hide-persion')
        this.$emit('getContactsBaseInfo', emps, this.allDeptList)
      },
      //递归获取所有部门id this.allDeptList
      getDeptIds(depts) {
        if (depts && depts.length > 0) {
          depts.forEach(dept => {
            if (!this.allDeptList.includes(dept.dept.deptId)) {
              this.allDeptList.push(dept.dept.deptId)
            }
            if (dept.children && dept.children.length > 0) {
              this.getDeptIds(dept.children)
            }
          })
        }
      }
    }
  }
</script>
<style >
  .vodal-index {
    z-index: 2000;
  }

  .vodal-dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 101;
    padding: 0px!important;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
    /*box-sizing: border-box;*/
  }

  /* -- title -- */

  .vheader {
    font-size: 16px;
    /*padding-bottom: 10px;*/
    border-bottom: 1px solid #e9e9e9;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 15px;
  }
  .pageContent {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  /* -- body -- */


  .vbody {
    /*padding-top: 15px;*/
    overflow: auto;
    flex: 1 1;
    padding: 0.2rem 0.2rem;
    height: 100%;
    overflow-y: auto;
  }

  .jiantou {
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    position: relative;
    top: -2px;
    top: 50%;
    margin-top: -4px;
    right: 3px;
  }

  /* -- button -- */

  .vodal-cancel-btn,
  .vodal-confirm-btn {
    position: absolute;
    font: inherit;
    bottom: 16px;
    width: 70px;
    padding: 4px 15px;
    border-radius: 3px;
    transition: background .2s;
    border: 1px solid #03a9f4;
  }

  .vodal-confirm-btn {
    color: #fff;
    right: 102px;
    background: #03a9f4;
  }

  .vodal-confirm-btn:hover {
    background: #0098e3;
  }

  .vodal-cancel-btn {
    color: #03a9f4;
    right: 16px;
    background: #fff;
  }

  .vodal-cancel-btn:hover {
    background: #fafafa;
  }

  .vodal-cancel-btn:focus,
  .vodal-confirm-btn:focus {
    outline: none;
  }

  .vodal-confirm-btn:active {
    background: #0087d2;
  }

  .vodal-cancel-btn:active {
    background: #fafafa;
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, .2), 0 0 1px transparent;
  }
  .vodal-close {
    top: 13px!important;
  }
  .weui-cells_checkbox .weui-check:checked+.weui-icon-checked-disable:before{color:#d9d9d9!important}

  .nav-font {
    color: midnightblue;
    text-overflow: ellipsis
  }
</style>
