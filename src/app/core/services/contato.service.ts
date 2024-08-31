import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com'
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private serviceID = 'service_frlmwq7'
  private templateID = 'template_re9q4im'
  private userID = 'v-I3mnH7DKe8bSBAt'

  constructor() {
    emailjs.init(this.userID)
  }

  sendEmail(name: string, email: string, message: string) {
    const templateParams = {
      name,
      email,
      message
    }
    return emailjs.send(this.serviceID, this.templateID, templateParams).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
}
