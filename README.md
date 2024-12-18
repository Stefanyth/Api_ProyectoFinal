
Estructura del Proyecto.
   
 Creamos el controlador de autenticación, y maneja la lógica de inicio de sesión para los usuarios.
Este código define un controlador UserController en Laravel que maneja operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para el modelo User.
Obtiene todos los usuarios de la base de datos y devuelve una respuesta JSON con esos usuarios y un código de estado HTTP 200 (OK).

  ![AuthController](https://github.com/user-attachments/assets/63498f4d-12f6-4c8b-bbb7-43ea0035ec3b)
  
  ![ExpenseController](https://github.com/user-attachments/assets/62311ba8-b00a-4332-b90e-6d3c97bc4665)


 Crea un nuevo usuario con los datos validados de la solicitud.
Devuelve una respuesta JSON con el usuario creado y un código de estado HTTP 201.
Si ocurre una excepción, registra el error y devuelve una respuesta JSON con un mensaje de error y un código de estado HTTP 500 (Internal Server Error).
Encuentra un usuario por su ID y devuelve una respuesta JSON con el usuario y un código de estado HTTP 200 (OK).
Si el usuario no se encuentra, lanza una excepción que devuelve un error 404 (Not Found).
Encuentra un usuario por su ID, lo actualiza con los datos validados de la solicitud y devuelve una respuesta JSON con el usuario actualizado y un código de estado HTTP 200 (OK).
Si ocurre una excepción, registra el error y devuelve una respuesta JSON con un mensaje de error y un código de estado HTTP 500 (Internal Server Error).
Encuentra un usuario por su ID, lo elimina y devuelve una respuesta JSON sin contenido y un código de estado HTTP 204 (No Content).

![registro component](https://github.com/user-attachments/assets/c67836cd-2b15-4292-9164-d995c2d592fe)
![registro component2](https://github.com/user-attachments/assets/221a0a84-1d3c-414f-94ed-29859396f7ed)

    
 Este código define un controlador ExpenseController en Laravel que maneja operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para el modelo Expense.
Define el espacio de nombres del controlador (App\Http\Controllers).
Importa varias clases necesarias: SaveExpenseRequest para validar las solicitudes de gastos, Expense para interactuar con el modelo de gastos, JsonResponse y Response para manejar las respuestas HTTP y Log para el registro de errores.
Obtiene todos los gastos de la base de datos ordenados por los más recientes y devuelve una respuesta JSON con esos gastos y un código de estado HTTP 200 (OK).
Crea un nuevo gasto con los datos validados de la solicitud.
Devuelve una respuesta JSON con el gasto creado y un código de estado HTTP 201 (Created). Si ocurre una excepción, registra el error y devuelve una respuesta JSON con un mensaje de error y un código de estado HTTP 500 (Internal Server Error).
Encuentra un gasto por su ID y devuelve una respuesta JSON con el gasto y un código de estado HTTP 200 (OK).
Si el gasto no se encuentra, lanza una excepción que devuelve un error 404 (Not Found).
    ![AuthController](https://github.com/user-attachments/assets/d37c54c9-4236-485b-934d-764e33719f3f)
![ExpenseController](https://github.com/user-attachments/assets/a6d1d0e7-b7e8-4dae-bf17-933100472713)

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


    
 Define los atributos que se pueden asignar masivamente (mass assignable). Esto significa que estos campos se pueden llenar automáticamente al crear o actualizar un registro en la base de datos. En este caso, se permiten los campos name, email, y password.
Define los atributos que deben ser ocultos en las respuestas JSON. Esto es útil para no exponer la contraseña y el token de recuerdo cuando se convierte el modelo a un array o JSON.
Define cómo se deben convertir los atributos a su tipo correspondiente. email_verified_at se convierte a un objeto datetime. password se trata como un atributo hasheado, lo que significa que Laravel lo gestionará correctamente en cuanto a la validación y comparación
Clase SaveExpenseRequest que extiende FormRequest de Laravel. Esta clase se utiliza para manejar la validación de las solicitudes de creación o actualización de gastos.
Define el espacio de nombres de la clase (App\Http\Requests), que organiza las clases de solicitud en Laravel.
Este método determina si el usuario está autorizado para realizar la solicitud.
En este caso, siempre devuelve true, lo que significa que cualquier usuario puede realizar esta solicitud sin restricciones. Si deseas implementar controles de acceso más específicos, puedes modificar este método para que devuelva true o false según las condiciones necesarias.
     ![SaveExpenseRequest](https://github.com/user-attachments/assets/8bb057d4-2b6e-4928-ae63-de961d2cabe9)

  Define el espacio de nombres de la clase (Database\Factories), organizando las clases de fábrica en Laravel.
La clase ExpenseFactory extiende Factory, lo que permite crear instancias del modelo Expense de manera fácil y conveniente.
Define el modelo al que corresponde esta fábrica. En este caso, se asigna el modelo Expense. Esto indica que esta fábrica generará instancias de Expense.
Este método define el estado por defecto del modelo Expense cuando se crea una nueva instancia utilizando esta fábrica. Devuelve un array asociativo donde cada clave corresponde a un atributo del modelo y cada valor es un dato generado automáticamente:
type: Genera una palabra aleatoria (un tipo de gasto).
amount: Genera un número de punto flotante aleatorio con 2 decimales entre 50 y 1000 (el monto del gasto).
description: Genera una oración aleatoria de 3 palabras (una breve descripción del gasto). expense_date: Genera una fecha y hora aleatorias entre una semana antes y una semana después de la fecha actual (la fecha del gasto).
   ![SaveUserRequest](https://github.com/user-attachments/assets/a26c5398-a67f-4bda-ace1-541361bb5d42)

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
   ![Expense](https://github.com/user-attachments/assets/265f8349-7960-4f52-8b1b-9ae027ec070a)


 
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

   ![User](https://github.com/user-attachments/assets/67d64a13-f23b-4324-82de-aade697b2dad)
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

![api](https://github.com/user-attachments/assets/18cecc41-d7e1-4cbd-b094-61557578ff41)

