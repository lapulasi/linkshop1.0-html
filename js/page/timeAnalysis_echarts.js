/**
 * Created by Administrator on 2017/8/29.
 */
var myChart = echarts.init(document.getElementById('time_analysis'));
// 指定图表的配置项和数据
var option = {
    title: {

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {

    },
    grid: {
        left: '1%',
        top:'6%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        data: ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h'],
        axisTick: {
            show: false
        },
        /*axisLine:{
            show:true,
            lineStyle:{
                color: 'rgba(235,237,242,1)'
            }
        },*/
        axisLabel: {
            show: true,
            interval: 'auto',    // {number}
            formatter: '{value}h',    // Template formatter!
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['海岸城店','世界之窗店','桃园店','南油店','科技园店']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [5,4,5,6,10],
            itemStyle: {
                normal: {
                    color: 'rgba(66,128,242,1)',
                }
            },
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
