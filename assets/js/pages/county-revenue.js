Highcharts.chart('county-rev', {
    chart: {
        type: 'bar',
        style: {
            fontFamily: '"Poppins",sans-serif'
        }
    },
    title: {
        text: ''
    },
    
    xAxis: {
        type: 'category',
        crosshair: true,
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
            }
        },
        
        
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Revenue (KES)'
        },
    },
    legend: {
        reversed: true
    },
    legend: {
      reversed: true
    },
    tooltip: {
        pointFormat: 'Collected Revenue For January: <b>KES {point.y:.1f}</b>'
    },
    series: [{
        color:'black',
        name: 'Collected Revenue',
        data: [
            ['Mombasa', 3733100],
            ['Kwale', 3118100],
            ['Kilifi', 2779100],
            ['Tana River', 2221003],
            ['Lamu', 2191001],
            ['Taita Taveta', 2100174],
            ['Garissa', 2110032],
            ['Wajir', 2089100],
            ['Mandera', 1910011],
            ['Marsabit', 1610045],
            ['Isiolo', 1610038],
            ['Meru', 1541001],
            ['Tharaka Nithi', 1521005],
            ['Embu', 14100974],
            ['Kitui', 14971000],
            ['Machakos', 1410086],
            ['Makueni', 1411006],
            ['Nyandarua', 131009],
            ['Nyeri', 1100364],

            ['Kirinyaga', 3733100],
            ['Murang’a', 3118100],
            ['Kiambu', 2779100],
            ['Turkana', 2221003],
            ['West Pokot', 2191001],
            ['Samburu', 2100174],
            ['Trans Nzoia', 2110032],
            ['Uasin Gishu', 2089100],
            ['Elgeyo/Marakwet', 2061007],
            ['Nandi', 1910011],
            ['Baringo', 1610045],
            ['Laikipia', 1610038],
            ['Nakuru', 1541001],
            ['Narok', 1521005],
            ['Kajiado', 14100974],
            ['Kericho', 14971000],
            ['Bomet', 1410086],
            ['Kakamega', 1411006],
            ['Vihiga', 131009],
            ['Bung’oma', 1100364],

            ['Busia', 1541001],
            ['Siaya', 1521005],
            ['Kisumu', 14100974],
            ['Homa Bay', 14971000],
            ['Migori', 1410086],
            ['Kisii', 1411006],
            ['Nyamira', 131009],
            ['Nairobi', 1100364]
        ],
       
    }]
});
