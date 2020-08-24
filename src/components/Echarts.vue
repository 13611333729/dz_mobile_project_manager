<template>
  <div>
    <el-card class="box-card">
      <div id="echart1" :style="{width:'100%',height:'300px',margin:'0 auto'}" ></div>
    </el-card>
    <el-card class="box-card">
      <div id="echart2" :style="{width:'100%',height:'300px',margin:'0 auto'}"></div>
    </el-card>
    <el-card class="box-card">
      <div id="echart3" :style="{width:'100%',height:'300px',margin:'0 auto'}"></div>
    </el-card>
    <el-card class="box-card">
      <div id="echart4" :style="{width:'100%',height:'300px',margin:'0 auto'}"></div>
    </el-card>
    <el-card class="box-card">
      <div id="echart5" :style="{width:'100%',height:'300px',margin:'0 auto'}"></div>
    </el-card>

    <!--<el-table :data="list" border size = "small" :height="table_height" :header-cell-style="{background:'#eef1f6'}">
      <el-table-column align="center" prop="project_name" label="项目名称"></el-table-column>
      <el-table-column align="center" prop="project_state" label="项目状态"></el-table-column>
    </el-table>-->

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div v-for="item in list" :key="item" :title="item" >
        {{item.project_name}}
      </div>
    </van-list>

  </div>
</template>

<script>
    export default {
        name: "Echarts",
        data(){
          return {
            list: [],
            loading: false,
            table_height:500,
            finished: false
          }
        },
        methods: {
          //签约项目产业结构
          initEcharts1() {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            _this.chart1 = this.$echarts.init(document.getElementById('echart1'),"light");
            //指定图表的配置项和数据
            var option = {
              title: {
                text: '签约项目产业结构',
                // left: 'center'
                // x:'left',
                left:'center'
              },
              tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}亿元,({d}%)'
              },
              //图例
              /*legend: {
                // orient: 'horizontal',
                orient: 'vertical',
                // bottom: '3%',
                x:'right',
                data: ['第一产业', '第二产业', '第三产业']
              },*/
              series: [
                {
                  name: '产业类型',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: [
                    {value: 0, name: '第一产业'},
                    {value: 0, name: '第二产业'},
                    {value: 0, name: '第三产业'}
                  ],
                  label: {
                    show:true,
                    position:'outside',
                    formatter: '{b}: {c}亿元,({d}%)'
                  },
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            };
            // 使用刚指定的配置项和数据显示图表
            _this.chart1.setOption(option);
          },
          getEcharts1Data() {
            var _this = this;
            _this.$axios.get("/api/dz/echarts/getDzEcharts1Data")
            .then(function (resp) {
                if (resp.data.code == '1') {
                  _this.chart1.setOption({
                  series:[{data:resp.data.dataList}],
                  title:{
                    text:resp.data.title
                  }
                  });
                }
            })
            .catch(function(resp){
                console.log("服务器请求失败");
                console.log(resp);
            });
          },
          //第二产业行业分布
          initEcharts2() {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            _this.chart2 = this.$echarts.init(document.getElementById('echart2'),"light");
            //指定图表的配置项和数据
            var option = {
              title: {
                text: '签约项目产业结构',
                // left: 'center'
                // x:'left',
                left:'center'
              },
              tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}亿元,({d}%)'
              },
              //图例
              /*legend: {
                // orient: 'horizontal',
                // bottom: '3%',
                orient: 'vertical',
                x:'right',
                data: ['雕塑文创', '五金', '汽摩','智能制造','静脉产业','电子信息','其他']
              },*/
              series: [
                {
                  name: '行业类型',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: [
                    {value: 0, name: '雕塑文创'},
                    {value: 0, name: '五金'},
                    {value: 0, name: '汽摩'},
                    {value: 0, name: '智能制造'},
                    {value: 0, name: '静脉产业'},
                    {value: 0, name: '电子信息'},
                    {value: 0, name: '其他'}
                  ],
                  label: {
                    show:true,
                    position:'outside',
                    formatter: '{b}: {c}亿元,({d}%)'
                  },
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            };
            // 使用刚指定的配置项和数据显示图表
            _this.chart2.setOption(option);
          },
          getEcharts2Data() {
            var _this = this;
            _this.$axios.get("/api/dz/echarts/getDzEcharts2Data")
              .then(function (resp) {
                if (resp.data.code == '1') {
                  _this.chart2.setOption({
                    series:[{data:resp.data.dataList}],
                    title:{
                      text:resp.data.title
                    }
                  });
                }
              })
              .catch(function(resp){
                console.log("服务器请求失败");
                console.log(resp);
              });
          },
          //月度累计正式合同签约额
          initEcharts3() {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            _this.chart3 = this.$echarts.init(document.getElementById('echart3'),"light");
            //指定图表的配置项和数据
            var option = {
              title: {
                text: '年度累计正式合同签约额',
                //subtext: '亿元',
                left:'center'
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              grid: {
                left: '3%',
                right:'1%',
                top:'27%',
                containLabel: true
              },
              //图例
              /*legend: {
                data:["2020年"],
                x:'right'
              },*/
              xAxis: {
                type: 'category',
                data: ["1月","2月","3月","4月","5月"]
              },
              yAxis: [
                {
                  type: 'value',
                  name: '签约额：亿元'
                }
              ],
              series: [
                {
                  name: '签约额',
                  type: 'bar',
                  barWidth: '25%',
                  data: [8.00,11.00,117.00,148.80,188.02
                  ],
                  yAxisIndex:0,
                  itemStyle: { //上方显示数值
                    normal: {
                      label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                          color: 'black'
                        }
                      }
                    }
                  }
                }]
            };
            // 使用刚指定的配置项和数据显示图表
            _this.chart3.setOption(option);
          },
          getEcharts3Data() {
            var _this = this;
            _this.$axios.get("/api/dz/echarts/getDzEcharts3Data")
              .then(resp => {
                if(resp.data.code == '1') {
                  _this.chart3.setOption({
                    xAxis:{data:resp.data.xList},
                    title:{text:resp.data.title},
                    series:[{data:resp.data.valueList}]
                  });
                }
              })
              .catch(resp =>{
                console.log("服务器请求失败");
                console.log(resp);
              });
          },
          //正式合同签约额和全年目标完成率
          initEcharts4() {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            _this.chart4 = this.$echarts.init(document.getElementById('echart4'),"light");
            //指定图表的配置项和数据
            var option = {
              title: {
                text: '正式合同签约额和全年目标完成率',
                //subtext: '亿元',
                left:'center'
                // x:'left'
              },
              tooltip: {
                trigger: 'axis',
                formatter:'{b}<br/>{a0}:{c0}亿元<br/>{a1}:{c1}%',
                axisPointer: {
                  type: 'shadow'
                }
              },
              //图例
              /*legend: {
                data:["正式合同签约额","全年目标完成率"],
                orient: 'vertical',
                x:'right',
              },*/
              grid: {
                left: '1%',
                right:'1%',
                top:'27%',
                containLabel: true
              },
              xAxis: {
                type: 'category',
                data: ["双桥经开区","部门招商组","大足高新区","大足工业园区","镇街招商组","大足文创园区","区招商投资局","海棠新城开发区","现在农业园区","龙水湖度假区"],
                axisLabel:{
                  rotate:30,
                  // fontSize:10
                }
              },
              yAxis: [
                {
                  type: 'value',
                  name: '签约额：亿元'
                },
                {
                  type: 'value',
                  name: '完成率',
                  min:0,
                  max:100,
                  axisLabel: {
                    formatter: '{value}%'
                  },
                  splitLine:{
                    show:false //去除网格线
                  }
                }
              ],
              series: [
                {
                  name: '正式合同签约额',
                  type: 'bar',
                  barWidth: '25%',
                  data: [61.1,29.24,26.7,26,20.1,16.7,10,0.025,0,0
                  ],
                  yAxisIndex:0,
                  itemStyle: { //上方显示数值
                    normal: {
                      label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                          color: 'black'
                        }
                      }
                    }
                  }
                },
                {
                  name: '全年目标完成率',
                  type: 'line',
                  data: [26,24,7,35,1,7,25,25,0,0]
                }
              ]
            };
            // 使用刚指定的配置项和数据显示图表
            _this.chart4.setOption(option);
          },
          getEcharts4Data() {
            var _this = this;
            _this.$axios.get("/api/dz/echarts/getDzEcharts4Data")
              .then(resp => {
                if(resp.data.code == '1') {
                  _this.chart4.setOption({
                    series:[{data:resp.data.valueList1},{data:resp.data.valueList3}],
                    title:{
                      text:resp.data.title
                    }
                  });
                }
              })
              .catch(resp =>{
                console.log("服务器请求失败");
                console.log(resp);
              });
          },
          //5000万以上项目
          initEcharts5() {
            var _this = this;
            //基于准备好的dom，初始化echarts实例
            _this.chart5 = this.$echarts.init(document.getElementById('echart5'),"light");
            //指定图表的配置项和数据
            var option = {
              title: {
                text: '2020年5000万以上项目',
                //subtext: '亿元',
                left:'center'
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              grid: {
                left: '3%',
                right:'1%',
                top:'27%',
                containLabel: true
              },
              //图例
              /*legend: {
                data:["2020年"],
                x:'right'
              },*/
              xAxis: {
                type: 'category',
                data: ["市外","投产","开工"]
              },
              yAxis: [
                {
                  type: 'value',
                  name: '数量：个'
                }
              ],
              series: [
                {
                  name: '数量',
                  type: 'bar',
                  barWidth: '25%',
                  data: [30,20,25],
                  yAxisIndex:0,
                  itemStyle: { //上方显示数值
                    normal: {
                      label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                          color: 'black'
                        }
                      }
                    }
                  }
                }]
            };
            // 使用刚指定的配置项和数据显示图表
            _this.chart5.setOption(option);
          },
          getEcharts5Data() {
            var _this = this;
            _this.$axios.get("/api/dz/echarts/getDzEcharts5Data")
              .then(resp => {
                if(resp.data.code == '1') {
                  _this.chart5.setOption({
                    title:{text:resp.data.title},
                    series:[{data:resp.data.valueList}]
                  });
                }
              })
              .catch(resp =>{
                console.log("服务器请求失败");
                console.log(resp);
              });
          },
          //调整图表大小时发生此事件
          reSize(chart) {
            window.addEventListener("resize", () => {
              chart.resize();
            });
          },
          getList(){
            var _this = this;
            _this.$axios.get("/api/dz/echarts/getFiveThousandProjectList")
              .then(resp => {
                if(resp.data.result == '1') {
                  console.log(resp.data.data);
                  _this.list=resp.data.data;
                }
              })
              .catch(resp =>{
                console.log("服务器请求失败");
                console.log(resp);
              });
          },
          onLoad() {
            // 异步更新数据
            var _this = this;
            _this.$axios.get("/api/dz/echarts/getFiveThousandProjectList")
              .then(resp => {
                if(resp.data.result == '1') {
                  console.log(resp.data.data);
                  _this.list=resp.data.data;
                }
              })
              .catch(resp =>{
                console.log("服务器请求失败");
                console.log(resp);
              });
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            /*setTimeout(() => {
              for (let i = 0; i < 10; i++) {
                this.list.push(this.list.length + 1);
              }

              // 加载状态结束
              this.loading = false;

              // 数据全部加载完成
              if (this.list.length >= 40) {
                this.finished = true;
              }
            }, 1000);*/
          }
        },
        mounted(){
          var _this = this;
          _this.initEcharts1();
          _this.getEcharts1Data();
          _this.reSize(_this.chart1);

          _this.initEcharts2();
          _this.getEcharts2Data();
          _this.reSize(_this.chart2);

          _this.initEcharts3();
          _this.getEcharts3Data();
          _this.reSize(_this.chart3);

          _this.initEcharts4();
          _this.getEcharts4Data();
          _this.reSize(_this.chart4);

          _this.initEcharts5();
          _this.getEcharts5Data();
          _this.reSize(_this.chart5);

          _this.getList();
        }
    }
</script>

<style scoped>

</style>
