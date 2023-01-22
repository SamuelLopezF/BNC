
var xhr = new XMLHttpRequest();
xhr.open('GET', '/Hackathon/AequitasData.json', true);
xhr.responseType = 'json';
let data_response
let chart
const colors = {
  Blue: "rgba(54, 162, 235, 0.7)",
  Green: "rgba(75, 192, 192, 0.7)",
  Yellow: "rgba(255, 205, 86, 0.7)",
  Orange: "rgba(255, 99, 132, 0.7)",
  Purple: "rgba(141, 108, 171, 0.7)",
}
xhr.onload = function() {
  var status = xhr.status;
  if (status === 200) {
    data_response = xhr.response;
    const ctx = document.getElementById('myChart');

    let labels = []

    let data = {
        labels: labels,
        datasets: [{
          data: [],
        }]

    }

    chart = new Chart(ctx, {
      type : 'bar',
      data : data,
      options: {
        plugins: {
           legend: {
              display: false
           }
        },
        scales: {
          x: {
            ticks: {
                font: {
                    size: 5,
                }
            }
        },
          y: {
            min: 0,
            max: 5,
          }
        }
      }
    })


  } else {
    console.log("could not load data")
  }
};

let data_set = new Array(3);
let key_set = new Array()
let value_set = new Array();
let colors_set = new Array();
data_set[0] = key_set
data_set[1] = value_set
data_set[2] = colors_set 
xhr.send();

$.getJSON("/Hackathon/AequitasData.json", function (data) {
  console.log(data);
  console.log("MAFANCULO")
  let counter = 0
  document.addEventListener("click", function()
  {
    stupid_function(counter)
    counter++
  })
})

function stupid_function(counter)
{
  single_message = data_response[counter]
  label = single_message.OrderID
  let message_direction = single_message.Direction
  data_set = updateDataSet(data_set, label, message_direction)   
  updateChart(chart, data_set)
}



function updateDataSet(data_set, label, message_direction){
  console.log("MESSAGE DIRECTION : " + message_direction)
  if(data_set[0] == undefined || data_set[0].length == 0 )
  {
    if( message_direction === "NBFToExchange")
    {
    data_set[0].push(label)
    data_set[1].push(1)
    data_set[2].push(colors.Blue)
   } 
  }else{
    for(let i = 0 ; i < data_set[0].length; i ++)
    { 

      if(data_set[0][i] === label)
      {
        if(data_set[1][i] == 1 && message_direction === "ExchangeToNBF")
        {
          data_set[1][i] = ++data_set[1][i];
          data_set[2][i] = colors.Green
        }else if(data_set[1][i] == 2 && message_direction === "NBFToExchange")
        {
          data_set[1][i] = ++data_set[1][i];
          data_set[2][i] = colors.Yellow
        }else if(data_set[1][i] == 2 && message_direction === "Trade")
        {
          data_set[1][i] = ++data_set[1][i];
          data_set[2][i] = colors.Yellow
        }else if(data_set[1][i] == 3 && message_direction === "ExchangeToNBF")
        {
          data_set[1][i] = ++data_set[1][i];
          data_set[2][i] = colors.Orange
        }else{
          data_set[1][i] = 5
          data_set[2][i] = colors.Purple
        }
        return data_set
      }
    }
    data_set[0].push(label)
    data_set[1].push(1)
    data_set[2].push(colors.Blue)
  }
  return data_set
}


function updateChart(chart,data_set)
{ 
  let key_set = data_set[0];
  let value_set = data_set[1];
  let colors_set = data_set[2];
  chart.data.datasets[0].data = value_set; 
  chart.data.labels = key_set;
  chart.data.datasets[0].backgroundColor = colors_set;
  chart.update();
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}




async function extract_next_message(data)
{

}



async function renderChart()
{
  
}


async function createDelay(delay)
{
  return new Promise(resolve => setTimeout(resolve, delay));
}


