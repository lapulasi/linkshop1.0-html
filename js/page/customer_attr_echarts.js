/**
 * Created by Administrator on 2017/8/29.
 */
var myChart = echarts.init(document.getElementById('customer_attr'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        bottom:'40%',
        data:[
            {name:'高于平均值的门店',icon:'circle'},
            {name:'低于平均值的门店',icon:'circle'}
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
                {value:335, name:'高于平均值的门店'},
                {value:310, name:'低于平均值的门店'},
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
    color:['#FF6D96 ','#5599FF']

};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);