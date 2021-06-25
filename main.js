
const data = {
  validCheckUserName(userNameInput,userNameRegex){
      if(userNameRegex.test(userNameInput)){
         UI.matchUserNameWithRegex()
      }else if(userNameInput===''){
         UI.removeUserNameErrAndErrClass()
      }
      else{
         UI.notMatchUserNameWithRegex()
      }
  },
  validCheckUserEmail(userEmailInput,userEmailRegex){
    if(userEmailRegex.test(userEmailInput)){
        UI.matchUserEmailWithRegex()
    }else if(userEmailInput===''){
        UI.removeUserEmailErrAndErrClass()
    }
    else{
        UI.notMatchUserEmailWithRegex()
    }
  },
  validCheckUserPassword(userPasswordInput,userPasswordRegex){
    if(userPasswordRegex.test(userPasswordInput)){
        UI.matchUserPasswordWithRegex()
    }else if(userPasswordInput===''){
        UI.removeUserPasswordErrAndErrClass()
    }
    else{
        UI.notMatchUserPasswordWithRegex()
    }
  },
}

const UI={
  loadAllSelectors(){
    const userName = document.querySelector('#user_name');
    const userEmail = document.querySelector('#email');
    const userPassword = document.querySelector('#password');
    const userNameErr = document.querySelector('.userNameErr');
    const userEmailErr = document.querySelector('.userEmailErr');
    const userPasswordErr = document.querySelector('.userPasswordErr');
    return {
        userName,email,userPassword,userNameErr,userEmail,userEmailErr,userPasswordErr
    }
  },
   matchUserNameWithRegex(){
    const {
      userName,userNameErr
    }=this.loadAllSelectors();
      userNameErr.style.display='none';
      userName.classList.add('boxS');
      userName.classList.remove('boxE');
  },
  notMatchUserNameWithRegex(){
    const {
      userName,userNameErr
    }=this.loadAllSelectors();
    userNameErr.style.display='block';
    userName.classList.add('boxE');
    userName.classList.remove('boxS');
 },
 removeUserNameErrAndErrClass(){
    const {
      userName,userNameErr
    }=this.loadAllSelectors();
    userName.classList.remove('boxE');
    userNameErr.style.display='none';
 },
 matchUserEmailWithRegex(){
    const {
      userEmail,userEmailErr
    }=this.loadAllSelectors();
    userEmailErr.style.display='none';
    userEmail.classList.add('boxS');
    userEmail.classList.remove('boxE');
 },
 notMatchUserEmailWithRegex(){
    const {
      userEmail,userEmailErr
    }=this.loadAllSelectors();
    userEmailErr.style.display='block';
    userEmail.classList.add('boxE');
    userEmail.classList.remove('boxS');
 },
 removeUserEmailErrAndErrClass(){
    const {
      userEmail,userEmailErr
    }=this.loadAllSelectors();
    userEmail.classList.remove('boxE');
    userEmailErr.style.display='none';
 },
 matchUserPasswordWithRegex(){
    const {
      userPassword,userPasswordErr
    }=this.loadAllSelectors();
    userPasswordErr.style.display='none';
    userPassword.classList.add('boxS');
    userPassword.classList.remove('boxE');
 },
 notMatchUserPasswordWithRegex(){
    const {
      userPassword,userPasswordErr
    }=this.loadAllSelectors();
    userPasswordErr.style.display='block';
    userPassword.classList.add('boxE');
    userPassword.classList.remove('boxS');
 },
 removeUserPasswordErrAndErrClass(){
    const {
      userPassword,userPasswordErr
    }=this.loadAllSelectors();
    userPassword.classList.remove('boxE');
    userPasswordErr.style.display='none';
 },

  allEventListener(){
    const {
      userName,userEmail,userPassword
    }=this.loadAllSelectors();
    userName.addEventListener('keyup',e=>{
        const userNameInput = e.target.value;
        const userNameRegex = /[a-z]{4,5}\_?\-?[\D]/gi;
        data.validCheckUserName(userNameInput,userNameRegex);
    })

    userEmail.addEventListener('keyup',e=>{
      const userEmailInput = e.target.value;
      const userEmailRegex = /[a-z_0-9\.-]{2,20}@[a-z0-9.]{2,20}\.[a-z]{3,6}/gi;
      data.validCheckUserEmail(userEmailInput,userEmailRegex);
    })

    userPassword.addEventListener('keyup',e=>{
      const userPasswordInput = e.target.value;
      const userPasswordRegex = /[\w-\.#$&^()(\d)?]{4,8}/gi;
      data.validCheckUserPassword(userPasswordInput,userPasswordRegex);
    })
  },
  init(){
     this.allEventListener()
  },
}

UI.init()





