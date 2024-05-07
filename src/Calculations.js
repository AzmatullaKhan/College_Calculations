import './Calculations.css'

function Calculations() {
  const generate=()=>{
    document.getElementById('cal-but-hid').className='cal-button'
    let es=document.getElementById('each-subject');
    let in1=document.createElement("input");
    in1.className='subject-input'
    in1.placeholder='Enter the expected/acheived grade'
    in1.type='number'
    in1.min=0
    in1.max=10
    in1.required=true;
    let in2=document.createElement("input");
    in2.className='subject-input'
    in2.placeholder='Enter Number of Credits'
    in2.type='number'
    in2.min=0
    in2.max=10
    in2.required=true
    let br=document.createElement('br');
    es.appendChild(in1)
    es.appendChild(in2)
    es.appendChild(br)

  }
  const numberOfSubjects=()=>{
    let nos=document.getElementById('numberOfSubjects').value;
    for(let i=0;i<nos;i++){
      generate();
    }
  }
  const calculateScore=()=>{
    let qes=document.querySelectorAll('.each-subject');
    qes=Array(qes[0].childNodes)
    let i=1,grade=Number(0), credits=Number(0);
    let acheived=Number(0);
    let total=Number(0);
    qes[0].forEach(element => {
      if(element.value){
        if(element.value===" "){
          alert("Enter the values properly");
          return -1;
        }
        if(i%2!==0){
          grade=Number(element.value)
        }
        else{
          credits=Number(element.value)
        }
        i++;
        if(grade && credits && i%2!==0){
          acheived+=(grade*credits)
          total+=(credits*10)
        }
      }
    });
    let ans=String((acheived/total)*10)
    console.log(ans)
    if(ans!=='NaN'){
      if(ans[2])
        alert("Aquired SGPA (or) CGPA for Entered values: "+(ans[0]+ans[1]+ans[2]))
      else if(ans[1])
        alert("Aquired SGPA (or) CGPA for Entered values: "+(ans[0]+ans[1]))
    }
  }

  return (
    <div className="main">
      <div className='container'>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <p style={{textDecoration:'underline'}}>No.Of Subjects:</p>
          <input type='number' className='input-numberOfSubjects' placeholder='Enter Number of Subjects' id='numberOfSubjects'/>
          <button onClick={numberOfSubjects} className='sub-button'>Submit</button>
        </div>
        <form method='none'>
        <div className='each-subject' id='each-subject'></div>
        <center><button type='submit' onClick={calculateScore} className='hid-cal-button' id='cal-but-hid'>Calculate</button></center>
        </form>
      </div>
    </div>
  );
}

export default Calculations;
