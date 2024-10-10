export default function decorate(block) {
    
    
    
  // setup image carousel
    [...block.children].forEach((row) => {
        [...block.children].forEach((row) => {
            if(r==0){
                const nextbtn = document.createElement('button');
                nextbtn.classList.add('btn');
                nextbtn.classList.add('btn-next');
               const node = document.createTextNode(btnNxt);
               nextbtn.append(node);
               row.replaceWith(nextbtn);
            }else if(r==rows.length-1){
                const prebtn = document.createElement('button');
                prebtn.classList.add('btn');
                prebtn.classList.add('btn-prev');
                const node = document.createTextNode(btnPre);
                prebtn.append(node);
                row.replaceWith(prebtn);
            }else{
                row.classList.add('slide');
                [...row.children].forEach((col,c) => {
                  if(c==1){
                    col.classList.add('slide-text');
                  }
              
                });
            }

            
        });
    });
}