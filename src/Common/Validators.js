export const required = value => (value 
	? undefined 
	: <p>'Required'</p>);//поле обязательное для заполнения

export const maxLength = max => value =>
  value && value.length > max 
  ?<p> `Must be ${max} characters or less`</p> 
  : undefined//максимальная длина поля

export const minLength = min => value =>
  value && value.length < min 
  ?<p> Must be {min} characters or more</p> 
  : undefined//минимальная длина поля

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? <p>Invalid email address</p>
    : undefined

export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ?<p> Really? You still use AOL for your email?</p>
    : undefined   

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ?<p> Invalid phone number, must be 10 digits</p>
    : undefined

export const password = value =>
  value && !/^([A-Z0-9.-])$/i.test(value)
    ? <p>Invalid password, must be only numbers and letters</p>
    : undefined