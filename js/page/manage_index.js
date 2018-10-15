/**
 * Created by Administrator on 2017/8/20.
 */
var myChart = echarts.init(document.getElementById('manage_graph'));
var option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        x: '11.4%',
        bottom: '-10',
        data:['进店人数（人）', '平均驻留时间（分）']
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['海岸城','世界之窗','桃园','南油','科技园']
        }
    ],
    series : [
        {
            name:'进店人数（人）',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[200, 170, 240, 244, 200, 220, 210]
        },
        {
            name:'平均驻留时间（分）',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[320, 302, 341, 374, 390, 450, 420]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
