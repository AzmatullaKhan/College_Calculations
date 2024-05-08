import './Calculations.css'

function Calculations() {

  let del_id=Number(1);
  let grade_in_id=Number(1);
  let credits_in_id=Number(1);

  const generate=()=>{

    document.getElementById('cal-but-hid').className='cal-button'
    document.getElementById('res-but-hid').className='cal-button'

    let es=document.getElementById('each-subject');

    let in1=document.createElement("input");
    in1.className='subject-input'
    in1.placeholder='Enter the expected/acheived grade'
    in1.type='number'
    in1.min=0
    in1.max=10
    in1.required=true;
    in1.id='grade_input_delete_'+grade_in_id;
    grade_in_id+=1;

    let in2=document.createElement("input");
    in2.className='subject-input'
    in2.placeholder='Enter Number of Credits'
    in2.type='number'
    in2.min=0
    in2.max=10
    in2.required=true
    in2.id='credits_input_delete_'+credits_in_id;
    credits_in_id+=1;

    // let br=document.createElement('br');

    let del=document.createElement('img')
    del.src=require('./images/delete.jpg')
    del.className='delete-icon'
    del.id='delete_'+del_id;
    
    es.appendChild(in1)
    es.appendChild(in2)
    es.appendChild(del)
    // es.appendChild(br)
    
    document.getElementById(del.id).addEventListener('click',(e)=>{
      if(e.target.id==='delete_1'){
        alert('Kindly reset the page (or) delete the bottom inputs');
      }
      else{
        let g_id='grade_input_'+e.target.id
        let c_id='credits_input_'+e.target.id
        document.getElementById(g_id).value=""
        document.getElementById(c_id).value=""
        document.getElementById(g_id).className='hidden'
        document.getElementById(c_id).className='hidden'
        document.getElementById(e.target.id).className='hidden'
      }    
    })
    
    del_id+=1;
  }
  const numberOfSubjects=()=>{
    let nos=document.getElementById('numberOfSubjects').value;
    document.getElementById('numberOfSubjects').value=""
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
        console.log(element.id)
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
  const resetPage=()=>{
    window.location.reload()
  }
  return (
    <div className="main">
      <div className='container'>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <p style={{textDecoration:'underline'}}>No.Of Subjects:</p>
          <input type='number' className='input-numberOfSubjects' placeholder='Enter Number of Subjects' id='numberOfSubjects'/>
          <button onClick={numberOfSubjects} className='sub-button'>Submit</button>
        </div>
        <div className='each-subject' id='each-subject'></div>
        <center>
          <div>
            <button type='submit' onClick={calculateScore} className='hid-cal-button' id='cal-but-hid'>Calculate</button>
            <button className='hid-cal-button' id='res-but-hid' onClick={resetPage}>Reset</button>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Calculations;
