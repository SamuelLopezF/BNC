/* Visualized exchange between BNC and another Company. */
export class Exchange {
  constructor(fname) {
    this.fname = fname;
    this.dataset = new Map();
    this.rm_stk = [];
    this.chart = null;
    this.res = null;
  }

  init() {
    const ctx = document.getElementById("myChart");

    let labels = [];

    let data = {
      labels: labels,
      datasets: [
        {
          label: "Aequitas Data",
          data: [],
        },
      ],
    };

    this.chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          beginAtZero: true,
        },
      },
    });
  }

  /*
   * Check if dataset contains label and increment request stage as required.
   */
  update_data_set(label) {
    /* Remove cancelled transactions. */
    while (this.rm_stack.length != 0) {
      this.dataset.delete(rm_stack.pop());
    }

    if (!this.dataset.has(label)) {
      this.dataset.set(label, 1);
    } else {
      var prev_val = this.dataset.get(label);
      this.dataset.set(label, prev_val + 1);
      /* Add to remove stack. */
      if (this.dataset.get(label) == 4) {
        this.rm_stack.push(label);
      }
    }
  }

  update_chart() {
    this.chart.data.datasets[0].data = Array.from(this.dataset.values());
    this.chart.data.labels = Array.from(this.dataset.keys());
    this.chart.update();
  }

  stupid_function(counter) {
    console.log("res: " + this.res);
    console.log("Counter: " + counter);
    let single_message = this.res[counter];
    let label = single_message.OrderID;
    this.update_data_set(label);
    this.update_chart();
  }

  process_trades() {
    const delay = (delayInms) => {
      return new Promise((resolve) => setTimeout(resolve, delayInms));
    };

    const sample = async (counter) => {
      console.log("a");
      console.log("waiting...");
      this.stupid_function(counter++);
      let delayres = await delay(1000);
      console.log("b");
    };

    $.getJSON(this.fname, function (data) {
      this.res = data;
      console.log(data);
      console.log("MAFANCULO");
      let counter = 0;

      var i = 1; //  set your counter to 1
      const myLoop = () => {
        //  create a loop function
        setTimeout(function () {
          //  call a 3s setTimeout when the loop is called
          this.stupid_function(counter++);
          i++; //  increment the counter
          if (i < this.res.length) {
            //  if the counter < 10, call the loop function
            myLoop(); //  ..  again which will trigger another
          } //  ..  setTimeout()
        }, 100);
      };

      myLoop();
    });
  }

  run() {
    this.init();
    this.process_trades();
  }
}
