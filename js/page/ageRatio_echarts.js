/**
 * Created by Administrator on 2017/8/26.
 */
var myChart = echarts.init(document.getElementById('ageRatio'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        bottom:'10%',
        itemGap:2,
        data:[
            {name:'20-30岁',icon:'circle'},
            {name:'30-40岁',icon:'circle'},
            {name:'40-50岁',icon:'circle'},
            {name:'50-60岁',icon:'circle'},
            {name:'60岁以上',icon:'circle'},
        ],
        formatter:function (name) {
            return name ;
        }
    },
    grid: {
        left: '10%',
        bottom: '5%'
    },
    series: [
        {
            name:'性别比例',
            type:'pie',
            radius: ['35%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            center:['30%','50%'],
            itemStyle:{
                normal:{

                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'20-30岁'},
                {value:310, name:'30-40岁'},
                {value:310, name:'40-50岁'},
                {value:310, name:'50-60岁'},
                {value:310, name:'60岁以上'},
            ],
            itemStyle:{
                normal:{
                    label:{
                        show: true,
                        formatter: '{b} : {c} ({d}%)'
                    },
                    labelLine :{show:true}
                }
            }
        }
    ],
    color:['#5599FF','#37DF9F','#FCC50A','#FF6D96 ','#BF7CFA']

};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);