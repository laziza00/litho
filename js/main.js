let elmodalbox=document.getElementById('modalBox');
let elheader__modalbtn=document.getElementById('modalbtn');
let elmodal__remove=document.getElementById('modalremove');

elheader__modalbtn.addEventListener('click',function () {
elmodalbox.classList.add('show');
});

elmodal__remove.addEventListener('click',function () {
elmodalbox.classList.remove('show');
 });