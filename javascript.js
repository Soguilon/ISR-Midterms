const questions = [
{term:"Patchwork Plagiarism",q:"Which term describes stealing ideas or language from two or three sources and passing them off as one's own?",a:["Patchwork Plagiarism","Paraphrasing Plagiarism","Self Plagiarism","Unintentional Plagiarism"]},
{term:"Research",q:"Which term is defined as a systematic and refined technique of thinking?",a:["Research","Framework","Empirical","Analytical"]},
{term:"Honorary Authorship",q:"Which authorship issue occurs when a person is listed as an author despite not making a significant contribution to the research?",a:["Honorary Authorship","Ghost Authorship","Coercion Authorship","Denial of Authorship"]},
{term:"Empirical",q:"Which term means based on experience or observation?",a:["Logical","Empirical","Critical","Analytical"]},
{term:"R.A. 8293 (Intellectual Property Code of the Philippines)",q:"Which law affirms the rights of an author?",a:["R.A. 8293 (Intellectual Property Code of the Philippines)","Patent","Copyright","Penalty Fee of RA 8293"]},
{term:"Action Research",q:"Which type of research uses investigative, evaluative, and analytical methods to diagnose weakness and create a solution?",a:["Applied Research","Action Research","Pure Research","Research"]},
{term:"Senior Author",q:"Which author comes last and oversaw and directed the project?",a:["First/Primary Author","Contributing Author","Senior Author","Coercion Authorship"]},
{term:"Copyright",q:"Which term means the exclusive given right to the originator?",a:["Patent","Copyright","Authorship","Framework"]},
{term:"Logical",q:"Which characteristic of research means it is based on valid procedures and principles?",a:["Analytical","Logical","Empirical","Cyclical"]},
{term:"Self Plagiarism",q:"Which term, also called text recycling, involves copying large parts of one's own work?",a:["Duplicate Publication","Self Plagiarism","Intentional Plagiarism","Patchwork Plagiarism"]},
{term:"Framework",q:"Which term refers to the essential supporting structure of an object or the underlying structure of a system?",a:["Framework","Norms","Research","Ethics (In research)"]},
{term:"First/Primary Author",q:"Which author comes first, conducted most of the work, and drafted the manuscript?",a:["Senior Author","Contributing Author","First/Primary Author","Ghost Authorship"]},
{term:"Critical",q:"Which research characteristic involves careful and precise judgment, with higher confidence established at a 5% level of confidence?",a:["Critical","Logical","Analytical","Replicability"]},
{term:"Duplicate Publication",q:"Which term describes submitting work that was previously published?",a:["Duplicate Publication","Self Plagiarism","Unintentional Plagiarism","Plagiarism (Issues)"]},
{term:"Ethical Considerations in Research",q:"Which term includes fabrication or falsifying, confidentiality and anonymity, researcher accountability, and protection of human subjects?",a:["Ethical Considerations in Research","Ethics (In research)","Norms","Research Agencies"]},
{term:"Contributing Author",q:"Which author comes between the primary and senior authors and is identified by relative contribution?",a:["Contributing Author","First/Primary Author","Senior Author","Mutual Support Authorship"]},
{term:"Patent",q:"Which term means an authority or license conferring a right or title?",a:["Copyright","Patent","R.A. 8293 (Intellectual Property Code of the Philippines)","Authorship"]},
{term:"Plagiarism (Issues)",q:"What is identified as the most common form of scientific misconduct?",a:["Plagiarism (Issues)","Plagiarism","Intentional Plagiarism","Duplicate Publication"]},
{term:"Cyclical",q:"Which term describes the sequence: problem → completed → conclusion → problem?",a:["Cyclical","Analytical","Logical","Research"]},
{term:"Mutual Support Authorship",q:"Which authorship practice occurs when two or more investigators include their names as co-authors on each other's papers to enhance perceived productivity?",a:["Mutual Support Authorship","Honorary Authorship","Coercion Authorship","Ghost Authorship"]},
{term:"Applied Research",q:"Which type of research is conducted to solve a specific, practical problem?",a:["Pure Research","Applied Research","Action Research","Analytical"]},
{term:"Penalty Fee of RA 8293",q:"Under the reviewer, what are the penalty fees listed for the first, second, and third offenses under RA 8293?",a:["First 150k; Second 500k; Third 1.5M","First 500k; Second 1.5M; Third 150k","First 1.5M; Second 150k; Third 500k","First 150k; Second 1.5M; Third 500k"]},
{term:"Unintentional Plagiarism",q:"Which term means taking credit for someone else's ideas without awareness?",a:["Intentional Plagiarism","Unintentional Plagiarism","Paraphrasing Plagiarism","Plagiarism"]},
{term:"Analytical",q:"Which research characteristic involves critical analysis of all data?",a:["Analytical","Critical","Logical","Empirical"]},
{term:"Norms",q:"Which term refers to practices that promote the aims of research?",a:["Ethics (In research)","Norms","Framework","Research Agencies"]},
{term:"Ghost Authorship",q:"Which authorship issue describes work written by people who are not the listed authors themselves?",a:["Denial of Authorship","Ghost Authorship","Honorary Authorship","Coercion Authorship"]},
{term:"Ethics (In research)",q:"Which term means promoting values that are essential?",a:["Ethical Considerations in Research","Norms","Ethics (In research)","Framework"]},
{term:"Research Agencies",q:"Which term covers agencies such as IRB, IABC, SSBR, and PHSR?",a:["Research Agencies","Ethical Considerations in Research","Norms","Authorship"]},
{term:"Intentional Plagiarism",q:"Which term describes knowingly lifting texts?",a:["Intentional Plagiarism","Unintentional Plagiarism","Paraphrasing Plagiarism","Self Plagiarism"]},
{term:"Paraphrasing Plagiarism",q:"Which form of plagiarism involves moving around the original words?",a:["Patchwork Plagiarism","Paraphrasing Plagiarism","Duplicate Publication","Intentional Plagiarism"]},
{term:"Coercion Authorship",q:"Which authorship issue involves intimidation being used?",a:["Honorary Authorship","Coercion Authorship","Denial of Authorship","Mutual Support Authorship"]},
{term:"Replicability",q:"Which term refers to a conclusive result becoming more valid through more replicas?",a:["Replicability","Critical","Cyclical","Analytical"]},
{term:"Authorship",q:"Which term refers to the primary contributor who holds and is responsible for a published work and confers credit?",a:["Authorship","First/Primary Author","Senior Author","Copyright"]},
{term:"Plagiarism",q:"Which term comes from the Latin 'Plagiarus' and means stealing or claiming someone's work?",a:["Plagiarism","Plagiarism (Issues)","Self Plagiarism","Intentional Plagiarism"]},
{term:"Pure Research",q:"Which type of research is also known as basic or fundamental and is exploratory in nature?",a:["Applied Research","Action Research","Pure Research","Empirical"]},
{term:"Denial of Authorship",q:"Which term describes publishing a work without acknowledging or bestowing authorship on people who made substantial contributions?",a:["Ghost Authorship","Denial of Authorship","Honorary Authorship","Coercion Authorship"]},
{term:"Penalty Fee of RA 8293",q:"Which listed sequence correctly matches the first, second, and third penalty fees in the reviewer?",a:["150k, 500k, 1.5M","500k, 150k, 1.5M","1.5M, 500k, 150k","150k, 1.5M, 500k"]},
];

// Remove accidental duplicate term question while preserving exactly one occurrence.
// The duplicate is the penalty-fee item; retain the first occurrence.
const seen = new Set();
const examQuestions = questions.filter(x => {
  if (seen.has(x.term)) return false;
  seen.add(x.term); return true;
});
if (examQuestions.length !== 36 || new Set(examQuestions.map(x=>x.term)).size !== 36) {
  throw new Error("Exam verification failed: terms are not represented exactly once.");
}

let current=0, score=0, selected=null;
const startScreen=document.getElementById("startScreen"), examScreen=document.getElementById("examScreen"), resultScreen=document.getElementById("resultScreen");
const progress=document.getElementById("progress"), progressBar=document.getElementById("progressBar"), questionNumber=document.getElementById("questionNumber"), questionText=document.getElementById("questionText"), choices=document.getElementById("choices"), nextBtn=document.getElementById("nextBtn");

function shuffle(arr){return [...arr].sort(()=>Math.random()-0.5)}
function render(){
  const item=examQuestions[current]; selected=null; nextBtn.disabled=true;
  progress.textContent=`Question ${current+1} of ${examQuestions.length}`;
  progressBar.style.width=`${((current+1)/examQuestions.length)*100}%`;
  questionNumber.textContent=`Question ${current+1}`;
  questionText.textContent=item.q;
  choices.innerHTML="";
  shuffle(item.a).forEach((text,i)=>{
    const btn=document.createElement("button"); btn.className="choice";
    btn.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span><span>${text}</span>`;
    btn.onclick=()=>{selected=text; document.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected")); btn.classList.add("selected"); nextBtn.disabled=false};
    choices.appendChild(btn);
  });
  nextBtn.textContent=current===examQuestions.length-1?"Submit Exam":"Next Question";
}
document.getElementById("startBtn").onclick=()=>{startScreen.classList.add("hidden");examScreen.classList.remove("hidden");render()};
nextBtn.onclick=()=>{
  if(!selected)return;
  if(selected===examQuestions[current].a[0])score++;
  current++;
  if(current<examQuestions.length)render(); else showResults();
};
function showResults(){
  examScreen.classList.add("hidden");resultScreen.classList.remove("hidden");
  const total=examQuestions.length, incorrect=total-score, pct=Math.round(score/total*100);
  document.getElementById("score").textContent=`${score}/${total}`;
  document.getElementById("percentage").textContent=`${pct}%`;
  document.getElementById("correct").textContent=score;
  document.getElementById("incorrect").textContent=incorrect;
}
document.getElementById("restartBtn").onclick=()=>{current=0;score=0;resultScreen.classList.add("hidden");examScreen.classList.remove("hidden");render()};
