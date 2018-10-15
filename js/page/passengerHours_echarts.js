/**
 * Created by Administrator on 2017/8/26.
 */
var myChart = echarts.init(document.getElementById('passengerHours'));
option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        top: '12%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['16-17点', '17-18点', '18-19点', '15-16点', '14-15点','19-20点'],
            axisTick: {
                show: false
            },
            axisLine:{
                show:false
            }
        }
    ],
    yAxis : [
        {
            type: 'value',
            splitNumber: 5,
            min: 0,
            max:100,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 'auto',    // {number}
                formatter: '{value}人',    // Template formatter!
                textStyle: {
                    color: '#565E6D',
                    fontSize: 12
                }
            }
        }
    ],
    series : [
        {
            name:'周期趋势图',
            type:'bar',
            barWidth: '60%',
            itemStyle: {
                normal: {
                    color: 'rgba(85,153,255,1)',
                }
            },
            data:[78, 67, 60, 55, 45,43]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);