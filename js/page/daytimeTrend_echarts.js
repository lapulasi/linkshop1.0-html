/**
 * Created by Administrator on 2017/8/20.
 */
var myChart = echarts.init(document.getElementById('daytimeTrend'));
// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        x: '12%',
        y: '2%',
        x2: '10%',
        y2: '26%',
        borderWidth: 0
    },
    legend: {
        x: 'center',
        bottom: '0',
        data: ['进店人数（人）']
    },

    xAxis: {
        type: 'category',
        //interval :'auto',
        axisTick :false,
        axisLine:{
            show:true,
            lineStyle:{
                color: 'rgba(235,237,242,1)'
            }
        },
        axisLabel:{
            textStyle:{
                color:'#565E6D'
            }
        },
        data: function () {
            var list = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'];
            return list;
        }()
    },
    yAxis: [
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
    series: [
        {
            name: '进店人数（人）',
            type: 'line',
            z: 2,
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 4,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(66,128,242,1)',
                    width: 2
                }
            },
            lineStyle: {
                normal: {
                    color: 'rgba(66,128,242,1)',
                    width: 2
                }
            },
            data: function () {
                var list = ['20', '56', '24', '65', '43', '33', '44', '65', '56', '67', '78', '87', '89', '87'];
                return list;
            }(),
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ],
                lineStyle:{
                    normal: {
                        color:'rgba(235,53,119,1)',
                        width: 2
                    }

                }
            }
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
