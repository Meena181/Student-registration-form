var appnumber=document.querySelector(".appnumber");
var studname=document.querySelector(".studname");
var age=document.querySelector(".age");
var fathername=document.querySelector(".fathername");
var mothername=document.querySelector(".mothername");
var address=document.querySelector(".address");
var standard=document.querySelector(".standard");
var percentage=document.querySelector(".percentage");
var board=document.querySelector(".board");
var form=document.querySelector(".wrap");
var tableshow=document.querySelector(".table");


function formhide(){
    form.style="display:none;";
	tableshow.style="display:block;";
	createrow();
}

function createrow(){
	var tr=document.createElement("tr");
	var td_appnumber=document.createElement("td");
	var td_studname=document.createElement("td");
	var td_age=document.createElement("td");
	var td_fathername=document.createElement("td");
	var td_mothername=document.createElement("td");
	var td_address=document.createElement("td");
	var td_standard=document.createElement("td");
	var td_percentage=document.createElement("td");
	var td_board=document.createElement("td");
	var tbody=document.querySelector("tbody");
	
	td_appnumber.innerHTML=appnumber.value;
	td_studname.innerHTML=studname.value;
	td_age.innerHTML=age.value;
	td_fathername.innerHTML=fathername.value;
	td_mothername.innerHTML=mothername.value;
	td_address.innerHTML=address.value;
	td_standard.innerHTML=standard.value;
	td_percentage.innerHTML=percentage.value;
	td_board.innerHTML=board.value;
	
	tr.appendChild(td_appnumber);
	tr.appendChild(td_studname);
	tr.appendChild(td_age);
	tr.appendChild(td_fathername);
	tr.appendChild(td_mothername);
	tr.appendChild(td_address);
	tr.appendChild(td_standard);
	tr.appendChild(td_percentage);
	tr.appendChild(td_board);
	
	tbody.appendChild(tr);

}

function formshow(){
    form.style="display:flex;";
	appnumber.value="";
	studname.value="";
	age.value="";
	fathername.value="";
	mothername.value="";
	address.value="";
	standard.value="";
	percentage.value="";
	board.value="";
}

var errorone=document.querySelector(".errorone");
var errortwo=document.querySelector(".errortwo");
var errorthree=document.querySelector(".errorthree");
var errorfour=document.querySelector(".errorfour");
var errorfive=document.querySelector(".errorfive");
var errorsix=document.querySelector(".errorsix");
var errorseven=document.querySelector(".errorseven");
var erroreight=document.querySelector(".erroreight");
var errornine=document.querySelector(".errornine");

function validate(){
	var counter = 0;
    if(appnumber.value.length===0){
		errorone.style="display:block;";
		appnumber.focus();
	} else {
		if(isNaN(appnumber.value)){
			errorone.innerHTML = "Please enter valid app number";
			errorone.style="display:block;";
			appnumber.focus();
			
		} else {
			errorone.style="display:none;";
			counter++;
		}
    } 
	
	if(studname.value.length===0){
		errortwo.style="display:block;";
		studname.focus();
	} else {
		if(isNaN(studname.value)){
			errortwo.style="display:none;";
			counter++;
			
		}  else{
			errortwo.innerHTML = "Please enter valid name";
			errortwo.style="display:block;";
			studname.focus();
		}
    }  
	
	if(age.value.length===0){
		errorthree.style="display:block;";
		age.focus();
	} else {
		if(isNaN(age.value)){
		errorthree.innerHTML = "Please enter valid age";
        errorthree.style="display:block;";
		age.focus();
		
		}  else{
			errorthree.style="display:none;";
			counter++;
		}
    }
	
	if(fathername.value.length===0){
		errorfour.style="display:block;";
		fathername.focus();
		
	} else {
		if(isNaN(fathername.value)){
        errorfour.style="display:none;";
		counter++;
		
		} else  {
			errorfour.innerHTML = "Please enter the valid fathername";
			errorfour.style="display:block;";
			fathername.focus();
		}
    } 
	
	if(mothername.value.length===0){
		errorfive.style="display:block;";
		mothername.focus();
	} else {
		if(isNaN(mothername.value)){
        errorfive.style="display:none;";
		counter++;
		
		}  else  {
			errorfive.innerHTML = "Please enter valid mothername";
			errorfive.style="display:block;";
			mothername.focus();
		}
    } 
	
	if(address.value.length===0){
		errorsix.style="display:block;";
		address.focus();
	} else {
		if(isNaN(address.value)){
        errorsix.style="display:none;";
		counter++;
		
		}  else  {
			errorsix.innerHTML = "Please enter valid address";
			errorsix.style="display:block;";
			address.focus();
		}
		
	} 
	
	if(standard.value.length===0){
		errorseven.style="display:block;";
		standard.focus();
	} else {
		if(isNaN(standard.value)){
		errorseven.innerHTML = "Please enter a valid standard number"
        errorseven.style="display:block;";
		standard.focus();
		
		} else  {
			errorseven.style="display:none;";
			counter++;
		}
    } 
	
	if(percentage.value.length===0){
		erroreight.style="display:block;";
		percentage.focus();
	} else {
		if(isNaN(percentage.value)){
		erroreight.innerHTML = "Please enter a valid percentage number";
        erroreight.style="display:block;";
		percentage.focus();
		
		}  else  {
			erroreight.style="display:none;";
			counter++;
		}
    } 
	
    if(board.value.length===0){
		errornine.style="display:block;";
		board.focus();
	} else {
		if(isNaN(board.value)){
        errornine.style="display:none;";
		counter++;
		
		}  else  {
			errornine.innerHTML = "Please enter valid board of learning";
			errornine.style="display:block;";
			board.focus();
		}
    }
	
	if(counter === 9){
		formhide();
	}
}
	
	