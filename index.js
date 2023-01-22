
var xhr = new XMLHttpRequest();
xhr.open('GET', '/Hackathon/AequitasData.json', true);
xhr.responseType = 'json';

xhr.onload = function() {
  var status = xhr.status;
  if (status === 200) {
    var data_response = xhr.response;
    console.log(data_response)
    const ctx = document.getElementById('myChart');

    let labels = []

    let data = {
        labels: labels,
        datasets: [{
        label: 'Aequitas Data',
        data: []
      }]
    }

    let chart = new Chart(ctx, {
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
    let single_message = data_response[0]
    let label = single_message.OrderID
    data_set = updateDataSet(data_set, label)    
    updateChart(chart, data_set)



  } else {
    console.log("could not load data")
  }
};

xhr.send();

function updateDataSet(data_set, label){
  if(data_set[0] == undefined || data_set[0].length == 0 )
  {
    data_set[0].push(label)
    data_set[1].push(2)
  }else{
    for(let i = 0 ; i < data_set[0].length; i ++)
    {
    if(data_set[0][i] === label)
    {
      data_set[1][i] = ++data_set[1][i]
    }else{
      console.log("could not find matching label ??")
    }
    }
  }
  return data_set
}


function updateChart(chart,data_set)
{ 
  let key_set = data_set[0]
  let value_set = data_set[1]
  console.log("hello BOII")
  console.log(key_set)
  console.log(value_set)
  chart.data.datasets[0].data = value_set
  chart.data.labels = key_set
  chart.update();
}

// function updateChartData(chart, label, data )
// { 
//   console.log("label from the add function : \t" + label)
//   chart.data.labels.push(label);
//   chart.data.datasets.forEach((dataset) => {
//       dataset.data.push(data);
//   });
//   chart.update();
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

// const parsed_aeq = JSON.parse(aeq_raw_data)

// console.log(parsed_aeq[1])

// console.log(" AEQ  L : " + aeq_raw_data_length)
// console.log(" ALPHA  L : " + alpha_raw_data_length)
// console.log(" TSX  L : " + tsx_raw_data_length)

// let aeq_map = new Map()

// let start_epoch = 1673015280013814157
// let end_epoch = 1673015519989216489

// // await new Promise(r => setTimeout(r, 10));
// // let increment_of_epoch = 1000


  
  
// function addData(chart, label, data) {
//   chart.data.labels.push(label);
//   chart.data.datasets.forEach((dataset) => {
//       dataset.data.push(data);
//   });
//   chart.update();
// }

// function removeData(chart) {
//   chart.data.labels.pop();
//   chart.data.datasets.forEach((dataset) => {
//       dataset.data.pop();
//   });
//   chart.update();
// }



// let counter_unique = 0

// for (let i = 0 ; i < parsed_aeq.length ; i ++)
// {
//   let key = parsed_aeq[i].OrderID
//   if(aeq_map.has(key))
//   {
//     let value = aeq_map.get(key)
//     value++
//     aeq_map.set(key, value)
//     //  updateChart()
//   }else{
    
//     counter_unique++
//     aeq_map.set(key, 1)
//     //  updateChart()
//   }

//   // sleep for 10 ms

// }

// const iteration_over_aeq_map = aeq_map.entries();

// for(let i = 0 ; i < aeq_map.size ; i ++)
// {
//   // console.log(iteration_over_aeq_map.next().value)

//   let temp = iteration_over_aeq_map.next().value
//   if(temp[1] == 2  || temp[1] == 4 )
//   {
//     // console.log(temp[0])      
//     // console.log("TRANSACTION APPROVED")
//   }else{
//     console.log(temp[0])
//     console.log(temp[1])
//     console.log("\t\tANOMALY DETECTED" )  
//   }

// }
// async function sleep(ms) {
//  
// }
// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });



// //  if any bar = 4 remove it

// // update chart remove old bars

// // update dataset for chart

// // render chart

// // wait 10 ms

