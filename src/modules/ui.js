import Data from "./data";

const data = new Data()
class UI{
   constructor(){

    }
    loadAllSelectors(){
    const userNameElm = document.querySelector('#user_name');
    const userMobileNoElm = document.querySelector('#mobile_no');
    const userEmailElm = document.querySelector('#email');
    const userPasswordElm= document.querySelector('#password');
    const userNameErrElm = document.querySelector('.userNameErr');
    const userMobileNoErrElm = document.querySelector('.userMobileNoErr');
    const userEmailErrElm = document.querySelector('.userEmailErr');
    const userPasswordErrElm = document.querySelector('.userPasswordErr');
    const gnPwInputElm = document.querySelector('.gnPassInput');
    const gnPwBtnElm = document.querySelector('.gnPwBtn');
    const copyPwBtnElm = document.querySelector('.copyPwBtn');
    return {
        userNameElm,userPasswordElm,userNameErrElm,userEmailElm,userEmailErrElm,userPasswordErrElm,
        gnPwInputElm,gnPwBtnElm,copyPwBtnElm,userMobileNoElm,userMobileNoErrElm
    }
    }
    matchUserNameWithRegex(){
        const {
        userNameElm,userNameErrElm
        }=ui.loadAllSelectors();
        userNameErrElm.style.display='none';
        userNameElm.classList.add('boxS');
        userNameElm.classList.remove('boxE');
    }
    notMatchUserNameWithRegex(){
        const {
        userNameElm,userNameErrElm
        }=ui.loadAllSelectors();
        userNameErrElm.style.display='block';
        userNameElm.classList.add('boxE');
        userNameElm.classList.remove('boxS');
    }
    removeUserNameErrAndErrClass(){
        const {
        userNameElm,userNameErrElm
        }=ui.loadAllSelectors();
        userNameElm.classList.remove('boxE');
        userNameErrElm.style.display='none';
    }
    matchUserMobileNoWithRegex(){
        const {
        userMobileNoElm,userMobileNoErrElm
        }=ui.loadAllSelectors();
        userMobileNoErrElm.style.display='none';
        userMobileNoElm.classList.add('boxS');
        userMobileNoElm.classList.remove('boxE');
    }
    notMatchUserMobileNoWithRegex(){
        const {
        userMobileNoElm,userMobileNoErrElm
        }=ui.loadAllSelectors();
        userMobileNoErrElm.style.display='block';
        userMobileNoElm.classList.add('boxE');
        userMobileNoElm.classList.remove('boxS');
    }
    removeUserMobileNoErrAndErrClass(){
        const {
        userMobileNoElm,userMobileNoErrElm
        }=ui.loadAllSelectors();
        userMobileNoElm.classList.remove('boxE');
        userMobileNoErrElm.style.display='none';
    }
    matchUserEmailWithRegex(){
        const {
        userEmailElm,userEmailErrElm
        }=ui.loadAllSelectors();
        userEmailErrElm.style.display='none';
        userEmailElm.classList.add('boxS');
        userEmailElm.classList.remove('boxE');
    }
    notMatchUserEmailWithRegex(){
        const {
        userEmailElm,userEmailErrElm
        }=ui.loadAllSelectors();
        userEmailErrElm.style.display='block';
        userEmailElm.classList.add('boxE');
        userEmailElm.classList.remove('boxS');
    }
    removeUserEmailErrAndErrClass(){
        const {
        userEmailElm,userEmailErrElm
        }=ui.loadAllSelectors();
        userEmailElm.classList.remove('boxE');
        userEmailErrElm.style.display='none';
    }
    matchUserPasswordWithRegex(){
        const {
        userPasswordElm,userPasswordErrElm
        }=ui.loadAllSelectors();
        userPasswordErrElm.style.display='none';
        userPasswordElm.classList.add('boxS');
        userPasswordElm.classList.remove('boxE');
    }
    notMatchUserPasswordWithRegex(){
        const {
        userPasswordElm,userPasswordErrElm
        }=ui.loadAllSelectors();
        userPasswordErrElm.style.display='block';
        userPasswordElm.classList.add('boxE');
        userPasswordElm.classList.remove('boxS');
    }
    removeUserPasswordErrAndErrClass(){
        const {
        userPasswordElm,userPasswordErrElm
        }=ui.loadAllSelectors();
        userPasswordElm.classList.remove('boxE');
        userPasswordErrElm.style.display='none';
    }
    allEventListener(){
        const {
        userNameElm,userEmailElm,userPasswordElm,gnPwInputElm,gnPwBtnElm,copyPwBtnElm,userMobileNoElm
        }=ui.loadAllSelectors();
        userNameElm.addEventListener('keyup',e=>{
            const userNameInput = e.target.value;
            const userNameRegex = /[a-z\_\-]{4,10}[\D]?/gi; // [a-z]{4,5}\_?\-?[\D]
            data.validCheckUserName(userNameInput,userNameRegex);
        })
        userMobileNoElm.addEventListener('keyup',e=>{
            const userMobileNoInput = e.target.value
            const userMobileNoRegex = /\+?(\(?88\)?)?\d{11}/gi; 
            data.validCheckUserMobileNo(userMobileNoInput,userMobileNoRegex);
        })

        userEmailElm.addEventListener('keyup',e=>{
        const userEmailInput = e.target.value;
        const userEmailRegex = /[a-z_0-9\.-]{2,20}@[a-z0-9.]{2,20}\.[a-z]{3,6}/gi;
        data.validCheckUserEmail(userEmailInput,userEmailRegex);
        })

        userPasswordElm.addEventListener('keyup',e=>{
        const userPasswordInput = e.target.value;
        const userPasswordRegex = /[\w-\.#@!%&()]{8,16}/gi;
        data.validCheckUserPassword(userPasswordInput,userPasswordRegex);
        })
        gnPwBtnElm.addEventListener('click',(e)=>{
        e.preventDefault()
        gnPwInputElm.setAttribute('value',data.random_password_generate(16,8))
        copyPwBtnElm.style.display=''
        })
        copyPwBtnElm.addEventListener('click',()=>{
        gnPwInputElm.select()
        document.execCommand('Copy')
        })
    }
    static init(){
        ui.allEventListener()
    }
}

const ui = new UI()

export default UI


