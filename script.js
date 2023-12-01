const windCard = document.createElement("button");
const step = document.createElement("span");
const input = document.createElement("input");
const text = document.createElement("span");
const points = document.createElement("div");

$("body").append(windCard);
$("body").append(step);
$("body").append(input);
$("body").append(text);
$("body").append(points);

$("body").css({width:"auto",
	height:"90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
	flexDirection:"column",
    backgroundImage: "url(fon.jpg)",
    backgroundAttachment: "fixed",
    backgroundSize: "100%",
    fontSize: "25pt"});
$(windCard).css({ border:"0px",
    width:"450px",
    height:"350px",
    backgroundColor:"rgba(255, 255, 255, 0.757)",
    boxShadow:"5px 5px 15px black",
    borderRadius:"25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
	flexDirection:"column",
    fontSize:"25pt" });
$(step).css({
    width:"auto",
    height:"40px",
    backgroundColor:"rgba(255, 255, 255, 0)",
    marginTop:"15px"});
$(input).css({width:"250px", 
    height:"30px",
    border:"0px",
    boxShadow:"inset 0px 1px 5px black",
    borderRadius:"25px",
    fontSize:"15pt",
    paddingLeft:"15px",
    marginTop:"15px"});
$(points).css({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection:"row",
    width:"250px",
    height:"100px",
    marginTop:"15px" });

const arrayWords = ["butterfly", "wings", "fog", "shy", "speak",
                    "book", "grass", "give", "flower", "boiling water", "seal"];
const answerWords = ["метелик", "крила", "туман", "сором'язливий", "говорити",
                    "книга", "трава", "давати", "квітка", "окріп", "тюлень"];

const useStep =[1,2,3,4,5,6,7,8,9,10];

$(text).html("<span>statistics</span>");
$(step).text("0/10");
let right = 0;
let wrong = 0;
let index;
let item;
let translateItem;
let i=0;

NewIndex();    

function Check(){
    $(step).text(`${++i}/10`);
    const answer = $(input).val().trim().toLowerCase();
    if(i<=10){
    if(answer == translateItem){
        $(points).html(`<span style="color:rgb(41, 119, 15)">${++right}</span><span style="color:red">${wrong}</span>`);
    }else{
        $(points).html(`<span style="color:rgb(41, 119, 15)">${right}</span><span style="color:red">${++wrong}</span>`);
    }
    NewIndex();
   
    }else{ 
    location.reload();
    alert(`You have ${right} right answers and ${wrong} wrong answers`);}
}


$(windCard).bind("click", Check);
$(document).keydown(function(event) {
    if (event.which === 13) {
        Check();
    }
    });

function NewIndex(){
    index = Math.floor(Math.random()*arrayWords.length);
    item = arrayWords.splice(index , 1)[0];
    $(windCard).text(item);
    translateItem = answerWords.splice(index,1)[0];
    $(input).val(" ");
}
