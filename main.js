  
let calendar=new Date();
let month=calendar.getMonth();
let day=calendar.getDate();
let year=calendar.getFullYear();
  const oy=[
	'Yanvar',
	'Fevral',
	'Mart',
	'Aprel',
	'May',
	'Iyun',
	'Iyul',
	'Avgust',
	'Sentabr',
	'Oktabr',
	'Noyabr',
	'Dekabr'
  ]

  document.querySelector('.paragraph') 
	.innerHTML=day +" "+ oy[month]+" "+year;
  


setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	
	


	

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec;

	document.getElementById("clock")
			.innerHTML = currentTime;
}
showTime();
console.log(day);
