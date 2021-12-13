import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmailService } from 'src/app/email.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.scss']
})
export class EnterEmailComponent implements OnInit {
  hasSubmittedSuccessfully = false;
  emailForm: FormGroup;
  emails: any[] = [];

  constructor(private dialogRef: MatDialogRef<EnterEmailComponent>, private emailService: EmailService) {
    this.emailForm = this.emailService.emailForm;
  }

  ngOnInit(): void {
    this.emailService.getItems().subscribe((emails: Item[]) => {
      emails.forEach((email: Item) => {
        this.emails.push(email.email);
      });
    });

    this.emailForm.get('emailAddress')?.valueChanges.subscribe(email => {
      if (!(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?)*$/).test(email)) {
        this.emailFormControl.setErrors({'email': true});
      } else {
        this.emailFormControl.markAsUntouched();
        this.emailFormControl.setErrors(null);
        console.log(this.emailFormControl);
      }
    });
  }

  closeDialog(isSubmit?: boolean): void {
    this.emailFormControl.markAsUntouched();
    if (isSubmit) {
      this.emailForm.get('emailAddress')?.markAsDirty();
      if (!this.emailForm.get('emailAddress')?.invalid) {
        this.dialogRef.close(this.emailForm.get('emailAddress')?.value);
      }
    } else {
      this.dialogRef.close();
    }
  }

  submitEmail(): void {
    if (this.emails.includes(this.emailFormControl.value)) {
      this.emailFormControl.setErrors({'alreadyExists': true});
    } else {
      if (this.emailFormControl.valid && this.emailForm.get('gateKeeper')?.value === '') {
        this.emailFormControl.setErrors({'alreadyExists': false});
        this.emailService.addEmail(this.emailFormControl.value);
        this.hasSubmittedSuccessfully = true;
      }
    }
  }

  get emailFormControl(): FormControl {
    return this.emailForm.get('emailAddress') as FormControl;
  }

  get isRequired(): boolean {
    return this.emailFormControl.dirty;
  }

  get isSubmitDisabled(): boolean {
    return this.emailFormControl.hasError('required') || this.emailFormControl.hasError('email');
  }

  get showSubmitButton(): boolean {
    return this.emailFormControl.dirty && this.emailFormControl.valid && (this.emailFormControl.value).match(/[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}/);
    // (/[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}/).test(this.emailFormControl.value)
  }
}
