# ReactiveForms in Angular

Reactive Forms in Angular provide a powerful and flexible way to manage form inputs and validations. This approach is particularly useful in Single Page Applications (SPA) to prevent page reloads when a form is submitted.

---

## 🚫 Why Not Use Normal HTML Forms?
- Submitting a normal HTML form reloads the page by making an HTTP request to the server.
- In a Single Page Application (SPA) built with Angular, this behavior restarts the entire application, disrupting the user experience.
- Using Angular's **Reactive Forms** or **Template-Driven Forms** avoids this issue and simplifies form management.

---

## 🛠️ Steps to Create a Reactive Form

### Step 1: Import ReactiveFormsModule
Import the `ReactiveFormsModule` from `@angular/forms` to your Angular module.

```typescript
import { ReactiveFormsModule } from '@angular/forms';
```

---

### Step 2: Initialize a Form Group
Use the `FormGroup` class to initialize a form group.

---

### Step 3: Declare Form Controls
Declare the form controls in the `ngOnInit` lifecycle method and add them into the form group.

---

### Step 4: Bind Form Group to the HTML Form
Use property binding to bind the form group to the `<form>` tag in your HTML.

```html
<form [formGroup]="yourForm">
```

---

### Step 5: Assign Form Control Names
Provide a `formControlName` to each input field.

```html
<input formControlName="name" />
```

---

### Step 6: Add a Submit Button
Ensure the submit button in your form has the type `submit`.

```html
<button type="submit">Submit</button>
```

---

### Step 7: Add an Event Listener to the Form
Add the `(ngSubmit)` event to the form to handle form submission.

```html
<form (ngSubmit)="onFormSubmitted()">
```

---

## 🛑 Adding Validations to the Form
To add validations, use the `Validators` class from `@angular/forms`. For example:

```typescript
import { Validators } from '@angular/forms';
```

### Display Validation Messages
Use form control properties like `invalid`, `touched`, and `valid` to show validation messages or change styles dynamically.

```html
<input formControlName="email" />
<div *ngIf="email.invalid && email.touched" class="error">
  Please enter a valid email address.
</div>
```

---

## 📚 FormArray: Managing Collections of Form Controls
The `FormArray` class allows you to manage a collection of form controls dynamically.

### Creating Form Controls
Angular provides two ways to group form controls:
1. **FormGroup**: Stores form controls as key-value pairs in an object.
2. **FormArray**: Stores form controls as elements in an array.

### Example: Adding Form Controls Dynamically
Use the `push` method, available exclusively for `FormArray`, to add controls dynamically.

```typescript
this.formArray.push(new FormControl(''));
```

---

## 📸 Visuals and Examples

### Submitting a Reactive Form
![Reactive Form Submission](https://github.com/user-attachments/assets/de129c8c-11da-4103-ba24-d443e5321484)

### Validations in Forms
![Form Validation Example](https://github.com/user-attachments/assets/f6159321-c513-4713-908f-4cea2b84b480)

### Dynamic Form Controls
![Dynamic Form Controls](https://github.com/user-attachments/assets/537c0e4a-d7d3-4e2d-93f3-5f0e00f51c5f)

---

## 🚀 Conclusion
Reactive Forms in Angular provide a robust and scalable way to build forms with dynamic behavior and seamless validation. Whether you're working with simple forms or complex nested structures, Reactive Forms have got you covered!

Happy Coding! 🎉
