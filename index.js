var xhr = new XMLHttpRequest();
xhr.open('GET', '/Hackathon/AequitasData.json', true);
xhr.responseType = 'json';
let data_response
let chart
xhr.onload = function() {
  var status = xhr.status;
  if (status === 200) {
    data_response = xhr.response;
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


  } else {
    console.log("could not load data")
  }
};

let dataset = new Map();

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
  dataset = updateDataSet(dataset, label)    
  updateChart(chart, dataset)
}


/*
 * Check if dataset contains label and increment request stage as required.
 */
let rm_stack = [];
function updateDataSet(dataset, label) {
  /* Remove cancelled transactions. */
  while (rm_stack.length != 0) {
      dataset.delete(rm_stack.pop());
  }

  if (!dataset.has(label)) {
      dataset.set(label, 1);
  } else {
      var prev_val = dataset.get(label);
      dataset.set(label, prev_val+1);
      /* Add to remove stack. */
      if (dataset.get(label) == 4) {
          rm_stack.push(label);
      }
  }

  return dataset;
}


function updateChart(chart, dataset)
{ 
  chart.data.datasets[0].data = Array.from(dataset.values());
  chart.data.labels = Array.from(dataset.keys());
  chart.update();
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

