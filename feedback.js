import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),s=()=>{const e=new FormData(a),t=e.get("email"),o=e.get("message"),m={email:t,message:o};localStorage.setItem("feedback-form-state",JSON.stringify(m))};a.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(a),o=t.get("email"),m=t.get("message");console.log("Feedback submitted:",{email:o,message:m}),localStorage.removeItem("feedback-form-state"),a.reset()});a.addEventListener("input",s);document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);a.querySelector('input[name="email"]').value=t.email,a.querySelector('textarea[name="message"]').value=t.message}});
//# sourceMappingURL=feedback.js.map
