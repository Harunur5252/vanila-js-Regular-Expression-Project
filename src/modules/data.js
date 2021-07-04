import UI from "./ui"

const ui = new UI()
class Data{
   constructor(){

   }
   validCheckUserName(userNameInput,userNameRegex){
        if(userNameRegex.test(userNameInput)){
        ui.matchUserNameWithRegex()
        }else if(userNameInput===''){
        ui.removeUserNameErrAndErrClass()
        }
        else{
        ui.notMatchUserNameWithRegex()
        }
   }
   validCheckUserMobileNo(userMobileNoInput,userMobileNoRegex){
        if(userMobileNoRegex.test(userMobileNoInput)){
            ui.matchUserMobileNoWithRegex()
        }else if(userMobileNoInput===''){
            ui.removeUserMobileNoErrAndErrClass()
        }
        else{
            ui.notMatchUserMobileNoWithRegex()
        }
   }
   validCheckUserEmail(userEmailInput,userEmailRegex){
        if(userEmailRegex.test(userEmailInput)){
            ui.matchUserEmailWithRegex()
        }else if(userEmailInput===''){
            ui.removeUserEmailErrAndErrClass()
        }
        else{
            ui.notMatchUserEmailWithRegex()
        }
   }
   validCheckUserPassword(userPasswordInput,userPasswordRegex){
        if(userPasswordRegex.test(userPasswordInput)){
            ui.matchUserPasswordWithRegex()
        }else if(userPasswordInput===''){
            ui.removeUserPasswordErrAndErrClass()
        }
        else{
            ui.notMatchUserPasswordWithRegex()
        }
   }
   random_password_generate(max,min)
   {
        const passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
        const randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
        const randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
        return randPassword;
   }
}

export default Data