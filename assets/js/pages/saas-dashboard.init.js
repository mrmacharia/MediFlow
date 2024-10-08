var options = {
    series: [{
      name: "series1",
      data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76]
    }],
    chart: {
      height: 320,
      type: "line",
      toolbar: "false",
      dropShadow: {
        enabled: !0,
        color: "#000",
        top: 18,
        left: 7,
        blur: 8,
        opacity: .2
      }
    },
    dataLabels: {
      enabled: !1
    },
    colors: ["#556ee6"],
    stroke: {
      curve: "smooth",
      width: 3
    }
  },
  chart = new ApexCharts(document.querySelector("#line-chart"), options);
chart.render();
options = {
  series: [56,44],
  chart: {
    type: "donut",
    height: 262
  },
  labels: ["MPESA", "CASH"],
  colors: ["#556ee6", "#34c38f", "#f46a6a"],
  legend: {
    show: !1
  },
  plotOptions: {
    pie: {
      donut: {
        size: "70%"
      }
    }
  }
};
(chart = new ApexCharts(document.querySelector("#donut-chart"), options)).render();
var radialoptions1 = {
    series: [37],
    chart: {
      type: "radialBar",
      width: 60,
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    dataLabels: {
      enabled: !1
    },
    colors: ["#556ee6"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%"
        },
        track: {
          margin: 0
        },
        dataLabels: {
          show: !1
        }
      }
    }
  },
  radialchart1 = new ApexCharts(document.querySelector("#radialchart-1"), radialoptions1);
radialchart1.render();
var radialoptions2 = {
    series: [72],
    chart: {
      type: "radialBar",
      width: 60,
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    dataLabels: {
      enabled: !1
    },
    colors: ["#34c38f"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%"
        },
        track: {
          margin: 0
        },
        dataLabels: {
          show: !1
        }
      }
    }
  },
  radialchart2 = new ApexCharts(document.querySelector("#radialchart-2"), radialoptions2);
radialchart2.render();
var radialoptions3 = {
    series: [54],
    chart: {
      type: "radialBar",
      width: 60,
      height: 60,
      sparkline: {
        enabled: !0
      }
    },
    dataLabels: {
      enabled: !1
    },
    colors: ["#f46a6a"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%"
        },
        track: {
          margin: 0
        },
        dataLabels: {
          show: !1
        }
      }
    }
  },
  radialchart3 = new ApexCharts(document.querySelector("#radialchart-3"), radialoptions3);
radialchart3.render();

var walletOptions = {
  series: [41,59],
  chart: {
      height: 302,
      type: "radialBar"
  },
  plotOptions: {
      radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
              margin: 5,
              size: "25%",
              background: "transparent",
              image: void 0
          },
          track: {
              show: !0,
              startAngle: void 0,
              endAngle: void 0,
              background: "#f2f2f2",
              strokeWidth: "100%",
              opacity: 1,
              margin: 10,
              dropShadow: {
                  enabled: !1,
                  top: 0,
                  left: 0,
                  blur: 3,
                  opacity: .8
              }
          },
          dataLabels: {
              name: {
                  show: !0,
                  fontSize: "16px",
                  fontWeight: 600,
                  offsetY: -10
              },
              value: {
                  show: !0,
                  fontSize: "14px",
                  offsetY: 4,
                  formatter: function (e) {
                      return e + "%"
                  }
              },
              total: {
                  show: !0,
                  label: "Total",
                  color: "#373d3f",
                  fontSize: "16px",
                  fontFamily: void 0,
                  fontWeight: 600,
                  formatter: function (e) {
                      return e.globals.seriesTotals.reduce(function (e, t) {
                          return e + t
                      }, 0) + "%"
                  }
              }
          }
      }
  },
  stroke: {
      lineCap: "round"
  },
  colors: ["#f1b44c", "#50a5f1", "#34c38f","#f46a6a"],
  labels: ["Inpatient", "Outpatient"],
  legend: {
      show: !1
  }
};
(chart = new ApexCharts(document.querySelector("#wallet-balance-chart"), walletOptions)).render();
