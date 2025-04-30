# ReactiveForms
1. Why not use normal HTML form?
- When normal HTML form is submitted, it reloads the page by making an HTTP request to the server.
- Since we create a single page application using angular, we can say that it will restart the complete angular application.
- To avoid this we need angulars helps to stop this default behaviour. This can be achieved using template driven form or reactive form in angular.
- Using any one of these two approaches makes working with form easier.

STEP: 1
In order to work with reactive form we need to import ReactiveFormsModule from @angular/forms.

STEP: 2
initialize a form-group using new keyword

STEP: 3
declare form control in ngOnInit into the form group 

STEP: 4
use property binding to the form tag in html like.[formGroup]

STEP: 5
give form control name to each input field

STEP: 6
give type submit to the submit button

STEP: 7
add event to the form tag like: (ngSubmit)="onFormSubmitted()".


(ngSubmit)="onFormSubmitted()"

![image](https://github.com/user-attachments/assets/de129c8c-11da-4103-ba24-d443e5321484)


#Adding validations into the form:
Note: to add validation to the form inputs we have to use Validators from @angular/forms in form control.
To display validation message or change the border color if invalid we use form control properties for example invalid, touched, valid.

![image](https://github.com/user-attachments/assets/f6159321-c513-4713-908f-4cea2b84b480)


