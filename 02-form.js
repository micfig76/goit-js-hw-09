import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e=document.querySelector(".form-feedback");e.addEventListener("submit",s=>{s.preventDefault();const t=new FormData(e),o=t.get("email"),a=t.get("message");typeof Storage<"u"?(localStorage.setItem("feedbackEmail",o),localStorage.setItem("feedbackMessage",a)):console.log("Local storage is not supported in this browser."),e.reset(),console.log("Feedback submitted:",o,a)});
//# sourceMappingURL=02-form.js.map
