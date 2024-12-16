Documentación del Proyecto.
 
Estructura del Proyecto.
   
 Creamos el controlador de autenticación, y maneja la lógica de inicio de sesión para los usuarios.
Este código define un controlador UserController en Laravel que maneja operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para el modelo User.
Obtiene todos los usuarios de la base de datos y devuelve una respuesta JSON con esos usuarios y un código de estado HTTP 200 (OK).
  
 Crea un nuevo usuario con los datos validados de la solicitud.
Devuelve una respuesta JSON con el usuario creado y un código de estado HTTP 201.
Si ocurre una excepción, registra el error y devuelve una respuesta JSON con un mensaje de error y un código de estado HTTP 500 (Internal Server Error).
Encuentra un usuario por su ID y devuelve una respuesta JSON con el usuario y un código de estado HTTP 200 (OK).
Si el usuario no se encuentra, lanza una excepción que devuelve un error 404 (Not Found).
Encuentra un usuario por su ID, lo actualiza con los datos validados de la solicitud y devuelve una respuesta JSON con el usuario actualizado y un código de estado HTTP 200 (OK).
Si ocurre una excepción, registra el error y devuelve una respuesta JSON con un mensaje de error y un código de estado HTTP 500 (Internal Server Error).
Encuentra un usuario por su ID, lo elimina y devuelve una respuesta JSON sin contenido y un código de estado HTTP 204 (No Content).
    
 Este código define un controlador ExpenseController en Laravel que maneja operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para el modelo Expense.
Define el espacio de nombres del controlador (App\Http\Controllers).
Importa varias clases necesarias: SaveExpenseRequest para validar las solicitudes de gastos, Expense para interactuar con el modelo de gastos, JsonResponse y Response para manejar las respuestas HTTP y Log para el registro de errores.
Obtiene todos los gastos de la base de datos ordenados por los más recientes y devuelve una respuesta JSON con esos gastos y un código de estado HTTP 200 (OK).
Crea un nuevo gasto con los datos validados de la solicitud.
Devuelve una respuesta JSON con el gasto creado y un código de estado HTTP 201 (Created). Si ocurre una excepción, registra el error y devuelve una respuesta JSON con un mensaje de error y un código de estado HTTP 500 (Internal Server Error).
Encuentra un gasto por su ID y devuelve una respuesta JSON con el gasto y un código de estado HTTP 200 (OK).
Si el gasto no se encuentra, lanza una excepción que devuelve un error 404 (Not Found).
    
 Encuentra un gasto por su ID, lo actualiza con los datos validados de la solicitud y devuelve una respuesta JSON con el gasto actualizado y un código de estado HTTP 200 (OK).
Si ocurre una excepción, registra el error y devuelve una respuesta JSON con un mensaje de error y un código de estado HTTP 500 (Internal Server Error).
Encuentra un gasto por su ID, lo elimina y devuelve una respuesta JSON sin contenido y un código de estado HTTP 204 (No Content).
Clase Handler en el namespace App\Exceptions, que extiende la clase ExceptionHandler de Laravel. Este controlador de excepciones maneja cómo se reportan y se muestran las excepciones.
   
 Define el espacio de nombres del modelo (App\Models).
Importa la clase Model de Laravel, que es la base para todos los modelos Eloquent, y el trait HasFactory, que permite la creación de fábricas para generar instancias del modelo para pruebas y desarrollo.
La clase Expense extiende Model, lo que la convierte en un modelo Eloquent.
Usa el trait HasFactory, lo que permite crear fábricas de modelos (útiles para pruebas).
Define los atributos que se pueden asignar masivamente (mass assignable). Esto significa que estos campos se pueden llenar automáticamente al crear o actualizar un registro en la base de datos.
En este caso, los campos type, amount, description, expense_date, y stock son los atributos que se pueden llenar de manera masiva.
Define el espacio de nombres del modelo (App\Models).
Importa las clases necesarias:
Authenticatable: Proporciona funcionalidad para la autenticación de usuarios.
HasFactory: Permite la creación de fábricas para generar instancias del modelo.
Notifiable: Permite enviar notificaciones a los usuarios.
HasApiTokens: Permite a los usuarios emitir tokens de API, generalmente usado con Laravel Sanctum.
La clase User extiende Authenticatable, lo que la convierte en un modelo que puede ser autenticado.
Usa los traits HasApiTokens, HasFactory y Notifiable para agregar funcionalidades específicas al modelo.
    
 Define los atributos que se pueden asignar masivamente (mass assignable). Esto significa que estos campos se pueden llenar automáticamente al crear o actualizar un registro en la base de datos. En este caso, se permiten los campos name, email, y password.
Define los atributos que deben ser ocultos en las respuestas JSON. Esto es útil para no exponer la contraseña y el token de recuerdo cuando se convierte el modelo a un array o JSON.
Define cómo se deben convertir los atributos a su tipo correspondiente. email_verified_at se convierte a un objeto datetime. password se trata como un atributo hasheado, lo que significa que Laravel lo gestionará correctamente en cuanto a la validación y comparación
Clase SaveExpenseRequest que extiende FormRequest de Laravel. Esta clase se utiliza para manejar la validación de las solicitudes de creación o actualización de gastos.
Define el espacio de nombres de la clase (App\Http\Requests), que organiza las clases de solicitud en Laravel.
Este método determina si el usuario está autorizado para realizar la solicitud.
En este caso, siempre devuelve true, lo que significa que cualquier usuario puede realizar esta solicitud sin restricciones. Si deseas implementar controles de acceso más específicos, puedes modificar este método para que devuelva true o false según las condiciones necesarias.
     
 Este método define las reglas de validación que se aplican a la solicitud. Devuelve un array con las reglas para cada uno de los campos que se esperan en la solicitud:
type: Debe ser requerido y tener un máximo de 100 caracteres.
amount: Debe ser requerido, ser numérico y tener un formato decimal con hasta 2 cifras decimales.
description: Debe ser requerido.
expense_date: Debe ser requerido y debe ser una fecha válida. stock: Debe ser requerido, ser entero y no puede ser menor que 0.
Este código define una clase SaveUserRequest que extiende FormRequest de Laravel, y se utiliza para manejar la validación de las solicitudes relacionadas con la creación o actualización de usuarios.
Define el espacio de nombres de la clase (App\Http\Requests), organizando las clases de solicitud de Laravel.
La clase SaveUserRequest extiende FormRequest, lo que permite manejar la validación de los datos de entrada de manera estructurada y reutilizable.
Este método determina si el usuario está autorizado para realizar la solicitud.
En este caso, siempre devuelve true, lo que significa que cualquier usuario puede realizar esta solicitud sin restricciones. Si es necesario, puedes implementar controles de acceso más específicos aquí.
   
  Define el espacio de nombres de la clase (Database\Factories), organizando las clases de fábrica en Laravel.
La clase ExpenseFactory extiende Factory, lo que permite crear instancias del modelo Expense de manera fácil y conveniente.
Define el modelo al que corresponde esta fábrica. En este caso, se asigna el modelo Expense. Esto indica que esta fábrica generará instancias de Expense.
Este método define el estado por defecto del modelo Expense cuando se crea una nueva instancia utilizando esta fábrica. Devuelve un array asociativo donde cada clave corresponde a un atributo del modelo y cada valor es un dato generado automáticamente:
type: Genera una palabra aleatoria (un tipo de gasto).
amount: Genera un número de punto flotante aleatorio con 2 decimales entre 50 y 1000 (el monto del gasto).
description: Genera una oración aleatoria de 3 palabras (una breve descripción del gasto). expense_date: Genera una fecha y hora aleatorias entre una semana antes y una semana después de la fecha actual (la fecha del gasto).
   
 Este código define una fábrica UserFactory en Laravel para el modelo User, que facilita la creación de instancias de este modelo durante pruebas y desarrollo.
Define el espacio de nombres de la clase (Database\Factories), que organiza las clases de fábrica en Laravel.
Importa las clases necesarias:
Factory: La clase base para las fábricas de modelos en Laravel.
Hash: Proporciona funciones para hashear contraseñas.
Str: Proporciona funciones para manipular cadenas, como generar cadenas aleatorias.
Define una propiedad estática ?string $password que se utiliza para almacenar una contraseña hasheada.
Este método define el estado por defecto del modelo User cuando se crea una nueva instancia utilizando esta fábrica. Devuelve un array asociativo donde cada clave corresponde a un atributo del modelo y cada valor es un dato generado automáticamente:
name: Genera un nombre aleatorio.
email: Genera un correo electrónico único y seguro.
email_verified_at: Asigna la fecha y hora actual, indicando que el correo electrónico ha sido verificado.
password: Utiliza una contraseña hasheada. La contraseña por defecto es 'password', y se guarda de manera estática para evitar rehacer el hash en cada instancia creada. remember_token: Genera un token aleatorio de 10 caracteres, que se utiliza para la funcionalidad de "recordarme" durante la autenticación.
   
 MIGRACIONES.
Se importan las clases necesarias para crear migraciones y definir la estructura de la base de datos:
Migration: Clase base que se utiliza para definir migraciones.
Blueprint: Clase que permite definir la estructura de la tabla.
Schema: Clase que proporciona métodos para interactuar con la base de datos.
Aquí se define una migración anónima que extiende la clase Migration.
Este método se ejecuta cuando se aplica la migración. Aquí se define la creación de la tabla users con las siguientes columnas:
id: Crea una columna de tipo bigint auto-incremental que sirve como clave primaria.
name: Crea una columna de tipo string para almacenar el nombre del usuario.
email: Crea una columna de tipo string para almacenar el correo electrónico del usuario, y se establece como unique, lo que significa que no puede haber dos usuarios con el mismo correo. email_verified_at: Crea una columna de tipo timestamp que es nullable (puede ser nula). Esta columna se utiliza para almacenar la fecha y hora en que el correo electrónico fue verificado. password: Crea una columna de tipo string para almacenar la contraseña del usuario. rememberToken: Crea una columna de tipo string para almacenar un token que se utiliza en la funcionalidad "recordarme" durante el inicio de sesión.
timestamps: Crea automáticamente dos columnas, created_at y updated_at, que se actualizan automáticamente cuando se crea o se modifica un registro.
  Este método se ejecuta cuando se revierte la migración. Aquí se elimina la tabla users si existe. Esto es útil para deshacer cambios en la base de datos.
 
 Este código define una migración en Laravel para crear la tabla password_reset_tokens en la base de datos.
Se importan las clases necesarias para crear migraciones y definir la estructura de la base de datos:
Migration: Clase base utilizada para definir migraciones.
Blueprint: Clase que permite definir la estructura de la tabla.
Schema: Clase que proporciona métodos para interactuar con la base de datos. Aquí se define una migración anónima que extiende la clase Migration.
Este método se ejecuta cuando se aplica la migración. Aquí se define la creación de la tabla password_reset_tokens con las siguientes columnas:
email: Crea una columna de tipo string que sirve como clave primaria de la tabla. Esto significa que cada dirección de correo electrónico en esta tabla debe ser única.
token: Crea una columna de tipo string para almacenar el token de restablecimiento de contraseña asociado con el correo electrónico. Este token es utilizado para verificar la identidad del usuario que solicita un restablecimiento de contraseña.
created_at: Crea una columna de tipo timestamp que es nullable. Esta columna se utiliza para almacenar la fecha y hora en que se generó el token de restablecimiento de contraseña.
Este método se ejecuta cuando se revierte la migración. Aquí se elimina la tabla password_reset_tokens si existe. Esto es útil para deshacer cambios en la base de datos.
   
 Este código define una migración en Laravel para crear la tabla failed_jobs en la base de datos. Se importan las clases necesarias para crear migraciones y definir la estructura de la base de datos:
Migration: Clase base utilizada para definir migraciones.
Blueprint: Clase que permite definir la estructura de la tabla.
Schema: Clase que proporciona métodos para interactuar con la base de datos.
Este método se ejecuta cuando se aplica la migración. Aquí se define la creación de la tabla failed_jobs con las siguientes columnas:
id: Crea una columna de tipo bigint auto-incremental que sirve como clave primaria.
uuid: Crea una columna de tipo string que es única, utilizada para identificar de manera única cada trabajo fallido.
connection: Crea una columna de tipo text para almacenar el nombre de la conexión que se utilizó para el trabajo.
queue: Crea una columna de tipo text para almacenar el nombre de la cola en la que se colocó el trabajo.
payload: Crea una columna de tipo longText para almacenar los datos del trabajo que falló. exception: Crea una columna de tipo longText para almacenar los detalles de la excepción que ocurrió al fallar el trabajo.
failed_at: Crea una columna de tipo timestamp que almacena la fecha y hora en que el trabajo falló. Se utiliza la fecha y hora actual por defecto con useCurrent().
  Este método se ejecuta cuando se revierte la migración. Aquí se elimina la tabla failed_jobs si existe. Esto es útil para deshacer cambios en la base de datos.
 
 Este código define rutas para una aplicación Laravel, especificando qué controladores manejarán ciertas solicitudes HTTP.
Se importan los controladores necesarios (AuthController, ExpenseController, UserController) y la clase Route que se utiliza para definir rutas en Laravel.
Método: POST
Ruta: /login
Controlador: AuthController
Método del Controlador: login
Descripción: Esta ruta maneja la solicitud de inicio de sesión. Cuando se envía una solicitud POST a /login, se invoca el método login del AuthController.
Ruta: /expenses
Controlador: ExpenseController
Descripción: Esta línea define un conjunto completo de rutas RESTful para el recurso expenses, que son manejadas por el ExpenseController. Las rutas generadas incluyen:
GET /expenses: Lista todos los gastos.
POST /expenses: Crea un nuevo gasto.
GET /expenses/{expense}: Muestra un gasto específico.
PUT/PATCH /expenses/{expense}: Actualiza un gasto específico.
DELETE /expenses/{expense}: Elimina un gasto específico.
Ruta: /users
Controlador: UserController
Descripción: Similar al anterior, esta línea define un conjunto completo de rutas RESTful para el recurso users, que son manejadas por el UserController. Las rutas generadas incluyen:
GET /users: Lista todos los usuarios.
POST /users: Crea un nuevo usuario.
GET /users/{user}: Muestra un usuario específico.
PUT/PATCH /users/{user}: Actualiza un usuario específico.
DELETE /users/{user}: Elimina un usuario específico.
  
 Se importa la fachada Broadcast que proporciona métodos para registrar canales de difusión. Canal: 'App.Models.User.{id}'
Este es el nombre del canal. El {id} en la ruta del canal es un comodín que representa el ID del usuario.
Callback de Autorización:
Parámetros: $user y $id
$user: El usuario autenticado que intenta escuchar el canal.
$id: El ID extraído de la ruta del canal.
Lógica: return (int) $user->id === (int) $id;
La función de callback verifica si el ID del usuario autenticado ($user->id) coincide con el ID en la ruta del canal ($id). Si coinciden, se retorna true, permitiendo al usuario escuchar el canal. Si no coinciden, se retorna false, denegando el acceso.
 
 Frontend.
Este código define un componente de Angular para un formulario de inicio de sesión. Component: Importa la clase Component para definir el componente.
CommonModule: Importa el módulo CommonModule que proporciona directivas comunes de Angular.
FormsModule: Importa el módulo FormsModule para trabajar con formularios.
Router: Importa el servicio Router para la navegación.
AuthService: Importa el servicio AuthService para manejar la autenticación.
selector: Define el selector del componente (<app-login>).
standalone: Indica que el componente es independiente.
imports: Especifica los módulos que el componente necesita (CommonModule y FormsModule). templateUrl: La ruta al archivo HTML del componente.
styleUrls: La ruta al archivo CSS del componente.
form: Un objeto que almacena los valores del formulario (email y password). constructor: Inicializa el componente e inyecta el Router y AuthService.
validateEmail: Valida el formato del correo electrónico utilizando una expresión regular. validatePassword: Verifica que la contraseña tenga al menos 6 caracteres.
    
 onSubmit: Maneja el evento de envío del formulario:
Previene el comportamiento por defecto del formulario.
Valida el correo electrónico y la contraseña.
Si las validaciones pasan, llama al método login del AuthService.
Maneja la respuesta de la autenticación: redirige a /menu si es exitosa o muestra un error si falla.
navigateToRegister: Maneja la navegación al formulario de registro: Previene el comportamiento por defecto del evento.
Navega a la ruta /register.
  
 Codigo html de la vista.
Component: Importa la clase Component para definir el componente.
CommonModule: Importa el módulo CommonModule que proporciona directivas comunes de Angular.
RouterModule: Importa el módulo RouterModule para manejar la navegación dentro del componente.
selector: Define el selector del componente (<app-menu>).
standalone: Indica que el componente es independiente.
imports: Especifica los módulos que el componente necesita (CommonModule y RouterModule).
templateUrl: La ruta al archivo HTML del componente.
styleUrls: La ruta al archivo CSS del componente.
   
 Propiedades:
isUserMenuOpen: Almacena el estado del menú de usuario (abierto o cerrado). isEventMenuOpen: Almacena el estado del menú de eventos (abierto o cerrado).
isMenuOpen: Almacena el estado general del menú (abierto o cerrado).
Métodos:
toggleUserMenu: Alterna el estado de isUserMenuOpen entre true y false, abriendo o cerrando el menú de usuario.
toggleEventMenu: Alterna el estado de isEventMenuOpen entre true y false, abriendo o cerrando el menú de eventos.
toggleMenu: Alterna el estado de isMenuOpen entre true y false, abriendo o cerrando el menú general.
Vista del menu.
  
 Component: Importa la clase Component para definir el componente.CommonModule: Importa el módulo CommonModule para usar directivas comunes de Angular.FormsModule: Importa el módulo FormsModule para trabajar con formularios.Router: Importa el servicio Router para la navegación.AuthService: Importa el servicio AuthService para manejar la lógica de autenticación y actualización de usuarios.
form: Un objeto que almacena los valores del formulario (name y email). constructor: Inicializa el componente e inyecta los servicios Router y AuthService.
onSubmit: Maneja el evento de envío del formulario:
Obtiene el userId del localStorage.
Verifica que userId no sea nulo.
Llama al método updateUser del AuthService pasando el userId y los datos del formulario. Maneja la respuesta de la actualización:
Si es exitosa, muestra un mensaje de éxito y redirige al menú. Si hay un error, muestra un mensaje de error apropiado.
    
 Vista modificar usuario.
Component: Importa la clase Component para definir el componente.
CommonModule: Importa el módulo CommonModule para usar directivas comunes de Angular. FormsModule: Importa el módulo FormsModule para trabajar con formularios.
Router: Importa el servicio Router para la navegación.
AuthService: Importa el servicio AuthService para manejar la lógica de autenticación y registro de usuarios.
form: Un objeto que almacena los valores del formulario (username, email, password y confirmPassword).
constructor: Inicializa el componente e inyecta los servicios Router y AuthService.
   
 validateEmail: Verifica que el correo electrónico tenga un formato válido.
validatePassword: Verifica que la contraseña tenga al menos 6 caracteres.
validateForm: Realiza todas las validaciones del formulario y muestra alertas si alguna de ellas falla.
onSubmit: Maneja el evento de envío del formulario:
Previene el comportamiento predeterminado del formulario. Verifica si el formulario es válido.
Crea un objeto user con los datos del formulario.
Llama al método register del AuthService para registrar al usuario. Maneja la respuesta del registro:
Si es exitosa, muestra un mensaje de éxito y redirige al login.
Si hay un error, muestra un mensaje de error.
  
