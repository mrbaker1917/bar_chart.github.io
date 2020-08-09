
function drawBarChart(data, options, element) {
  element = document.getElementById("barchart");
  let chartHeight = parseInt(options.height);
  element.style.height = chartHeight;
  let barMargin = options.barMargin;
  element.innerHTML = "";
  let h1 = Math.max(...data) * 1.1;
  let colors = options.colors;
  console.log(colors)
  let top = document.getElementById("top");
  top.innerText = "MaxValue:" + String((h1 * 1.1).toFixed());
  let arr = [];
  for (let i of data) {
    let h = String((i / h1 * chartHeight)) + "px";
    let bar = document.createElement('div');
    bar.style.height = h;
    bar.style.marginRight = barMargin;
    bar.className = "bar";
    bar.innerHTML = "<h6>" + i + "</h6>";
    if (colors[0] == "") {
      bar.style.backgroundColor = randColor();
    } else {
      bar.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    }
    arr.push(element.append(bar));
  }
  return arr;
};

const randColor = () => {return "#" + Math.floor(Math.random() * 16777215).toString(16)};

function makeTicks(str) {
  let li = document.createElement('li');
  li.textContent = str;
  return li;
}

function makeRandArr(num) {
  let arr1 = [];
  let i = 0;
  while (i < num) {
    randNum = (Math.random() * 5).toFixed(2);
    arr1.push(randNum)
    i++;
  }
  return arr1;
}


$(function () {
  $("h1").fadeIn(3000);
  let data = makeRandArr(20);
  console.log(data)
  let options = {height: '500', width: '100%', barMargin: '1px', colors: randColor()};
  drawBarChart(data, options);
  $("div.bar").slideDown(3000, function () {
    $(this).animate({ width: "100%" }, 6000);
  });
  $("button#btn1").click(function () {
    let data = $("input#array").val().split(",");
    let chartHeight = $("input#chartHeight").val();
    let barMargin = $("input#barMargin").val();
    let colors = $("input#colors").val().split(",");
    colors = colors.map(i => i.trim());
    console.log(colors[0] == "");
    let options = {height: chartHeight, width: '100%', barMargin: barMargin, colors: colors};
    drawBarChart(data, options);
    $("div.bar").slideDown(3000, function () {
      $(this).animate({ width: "100%" }, 6000);
    })
  })
});