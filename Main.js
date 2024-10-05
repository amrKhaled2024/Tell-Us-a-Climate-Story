const cursor = document.getElementById('cursor');
const intro = document.getElementById('intro');
intro.addEventListener('click',function(){
    document.getElementById("intro_page").scrollIntoView({ behavior: "smooth" });
});
document.getElementById('prediction_btn').addEventListener('click',function(){
    document.getElementById('prediction_widget').scrollIntoView({behavior:"smooth"});
});
document.getElementById('logo').addEventListener('click',function(){
    document.getElementById('sec1').scrollIntoView({behavior:"smooth"});
});
document.getElementById('ex').addEventListener('click',function(){
    document.getElementById('examples').scrollIntoView({behavior:"smooth"});
})
document.addEventListener('mousemove',function(e){
    // cursor.style.left = `${e.clientX}px`;
    // cursor.style.top = `${e.clientY}px`;
    // Get the current scroll offset (in case of scrolling)
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const sec1 = document.getElementById('sec1');
  const main_text = document.getElementById('main_text');
  // Adjust the custom cursor's position based on the scroll offset and mouse position
  cursor.style.left = `${e.clientX + scrollX}px`;
  cursor.style.top = `${e.clientY + scrollY}px`;
});

const data = {
    labels: [
      "2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", 
      "2020-09", "2020-10", "2020-11", "2020-12", 
      "2021-01", "2021-02", "2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08", 
      "2021-09", "2021-10", "2021-11", "2021-12", 
      "2022-01", "2022-02", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08", 
      "2022-09", "2022-10"
    ],
    datasets: [{
      label: "CO₂ Emissions (mmol m²/s)",
      data: [
        -4.5, -3.2, -1.0, 1.5, 3.2, 4.0, 2.5, 0.0, 
        -2.5, -3.5, -1.0, 0.0, 
        -2.0, -2.5, -3.0, -1.0, 1.0, 3.0, 2.5, 0.0, 
        -1.0, 1.0, 2.5, 3.0, 
        -1.5, -2.5, -3.0, -2.0, 0.0, 1.0, 2.5, 3.5, 
        1.0, -1.0
      ],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointBorderColor: "rgba(255, 255, 255, 1)",
      pointHoverBackgroundColor: "rgba(255, 255, 255, 1)",
      pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      fill: true,
    }]
  };
  
  const config = {
    type: 'line',
    data: data,
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Time (Months)',
          },
          ticks: {
            autoSkip: false, // Show all labels
            maxRotation: 45, // Rotate labels for better visibility
            minRotation: 45,
          },
        },
        y: {
          title: {
            display: true,
            text: 'CO₂ Emissions (mmol m²/s)',
          },
          beginAtZero: false,
          suggestedMin: -6,
          suggestedMax: 5,
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' mmol/m²/s';
            }
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  };
  
  // Assuming you have a canvas element in your HTML with the id 'myChart'
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  