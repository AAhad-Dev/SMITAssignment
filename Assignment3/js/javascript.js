function addPara(text) {
    let p = document.createElement('p');
    p.textContent = text;  
    document.body.appendChild(p);
  }
  addPara('Text Goes Here');
  