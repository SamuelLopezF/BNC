
var xhr = new XMLHttpRequest();
xhr.open('GET', '/Hackathon/AequitasData.json', true);
xhr.responseType = 'json';
let data_response
let chart
xhr.onload = function() {
  var status = xhr.status;
  if (status === 200) {
    data_response = xhr.response;
    // console.log(data_response)
    const ctx = document.getElementById('myChart');

    let labels = []

    let data = {
        labels: labels,
        datasets: [{
        label: 'Aequitas Data',
        data: []
      }]
    }

    chart = new Chart(ctx, {
      type : 'bar',
      data : data,
      options : { 
        scales: {
          beginAtZero: true
        }
      }
    })

    let data_set = new Array(2);
    let key_set = new Array()
    let value_set = new Array();

    data_set[0] = key_set
    data_set[1] = value_set


  } else {
    console.log("could not load data")
  }
};

let data_set = new Array(2);
let key_set = new Array()
let value_set = new Array();

data_set[0] = key_set
data_set[1] = value_set

xhr.send();
const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
}

const sample = async (counter) => {
  console.log('a');
  console.log('waiting...')
  stupid_function(counter++);
  let delayres = await delay(1000);
  console.log('b');
}

$.getJSON("/Hackathon/AequitasData.json", function (data) {
  console.log(data);
  console.log("MAFANCULO")
  let counter = 0

    // while (true) {
    //     stupid_function(counter++);
    // }
  //sample(counter);

  // setTimeout(async () => {
  //    await stupid_function(counter++);

  //  }, 1000);

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
      stupid_function(counter++)
    i++;                    //  increment the counter
    if (i < data_response.length) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 100)
}

myLoop();
  document.addEventListener("click", function()
  {
    stupid_function(counter)
    counter++
  })

});

var i = 1;                  //  set your counter to 1




function stupid_function(counter)
{
  console.log("click")
  single_message = data_response[counter]
  label = single_message.OrderID
  data_set = updateDataSet(data_set, label)    
  updateChart(chart, data_set)
}



/*
 * Check if dataset contains label and increment request stage as required.
 */
function updateDataSet(data_set, label){
  if (data_set[0] == undefined || data_set[0].length == 0)
  {
    data_set[0].push(label)
    data_set[1].push(1)
  }else{
    for(let i = 0 ; i < data_set[0].length; i ++)
    {
      if(data_set[0][i] === label)
      {
        data_set[1][i] = ++data_set[1][i]
        return data_set
      }
    }
    data_set[0].push(label)
    data_set[1].push(1)
  }
  return data_set
}


function updateChart(chart,data_set)
{ 
  let key_set = data_set[0]
  let value_set = data_set[1]
  // console.log("hello BOII")
  // console.log(key_set)
  // console.log(value_set)
  chart.data.datasets[0].data = value_set
  chart.data.labels = key_set
  chart.update();
}

// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }



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

