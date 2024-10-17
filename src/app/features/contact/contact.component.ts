import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import Swal from 'sweetalert2'
import {ContactIn} from "../../interface/contact-Interface";
import {ApiContactService} from "../../services/api-contact.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "../../services/error.service";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = 'js.endifray@hotmail.com'
// Interface.
  contact: ContactIn = {
    name: '',
    email: '',
    message: ''
  }

  constructor(
    private _apiContactService: ApiContactService,
    private _errorService: ErrorService,
    private router: Router
  ) {
  }


// validando que rellene todos los campos
  sendMessage() {
    if (this.contact.name == '' || this.contact.email == '' || this.contact.message == '') {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Todos los campos son obligatorios',
        confirmButtonText: 'Ok'
      });
      return;
    }
    //Validacion que el correo sea correcto
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.contact.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'El correo electronico no es valido.',
        confirmButtonText: 'Ok'
      });
      return;
    }

    //Configuramos el api despues de ingresar todos los datos.
    this._apiContactService.sendMessage(this.contact).subscribe({
      next: (v) => {
        Swal.fire({
          icon: "success",
          title: 'El mensaje  se ha enviado correctamente',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/home']);
        //Mensaje de errores
      }, error: (error: HttpErrorResponse) => {
        this._errorService.msjError(error);
      }
    })
  }
}
