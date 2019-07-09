var ctx = document.getElementById('myChart').getContext('2d');
var hourlyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Current Rest',
            data: [],
            borderWidth: 1
        },
        {
        	label: 'Optimal Rest',
        	backgroundColor: 'transparent',
            data: [],
            borderWidth: 1	
        }],

    },
    options: {
    	scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

function calculateRest(array, optimalRest) {
	var reducer = (accumulator, currentValue) => accumulator + currentValue;
	return Math.floor((array.reduce(reducer) / (array.length * optimalRest)) * 100);
};

function addData(chart, label, data, target, base) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        if (dataset.label === target)
            dataset.data.push(data);
        else 
            dataset.data.push(base);
    });
    chart.update();
};

function updateHourlyChart(input) {
    var label = hourlyChart.data.labels.length > 0 ? hourlyChart.data.labels.length + 1 : 1;
    addData(hourlyChart, label, input, 'Current Rest', optimalRest);
};

// form logic
var optimalRest = 8;
(function () {
    var form1 = document.querySelector('#num_hours'),
        form2 = document.querySelector('#optimal_rest'),
        output = document.querySelector('output');

    form1.addEventListener('submit', function (e) {
        e.preventDefault();

        var value = this.hours.value.split(' ');
        if (value.length > 1) {
            value.forEach(function (v, i) {
                updateHourlyChart(parseInt(v));
            });
        } else {
            updateHourlyChart(parseInt(this.hours.value));
        }
        output.innerHTML = calculateRest(hourlyChart.data.datasets[0].data, optimalRest) + '%';
        this.reset();
    });
    form2.addEventListener('submit', function (e) {
        e.preventDefault();

        optimalRest = this.optimal.value;
        console.log(optimalRest);
    });
}());