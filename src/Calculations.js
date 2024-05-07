import './Calculations.css'

function Calculations() {
  const generate=()=>{
    let es=document.getElementById('each-subject');
    let in1=document.createElement("input");
    in1.className='subject-input'
    in1.placeholder='Enter the expected/acheived grade'
    in1.type='number'
    let in2=document.createElement("input");
    in2.className='subject-input'
    in2.placeholder='Enter Number of Credits'
    in1.type='number'
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
  return (
    <div className="main">
      <div className='container'>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <p style={{textDecoration:'underline'}}>No.Of Subjects:</p>
              <input type='number' className='input-numberOfSubjects' placeholder='Enter Number of Subjects' id='numberOfSubjects'/>
              <button onClick={numberOfSubjects}>Submit</button>
            </div>
            <div className='each-subject' id='each-subject'>
            </div>
      </div>
    </div>
  );
}

export default Calculations;
