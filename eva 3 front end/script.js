$(document).ready(function() {
    const spanishLanguage = {
        "processing": "Procesando...",
        "lengthMenu": "Mostrar _MENU_ registros",
        "zeroRecords": "No se encontraron resultados",
        "emptyTable": "Ningún dato disponible en esta tabla",
        "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
        "infoPostFix": "",
        "search": "Buscar:",
        "url": "",
        "infoThousands": ",",
        "loadingRecords": "Cargando...",
        "paginate": {
            "first": "Primero",
            "last": "Último",
            "next": "Siguiente",
            "previous": "Anterior"
        },
        "aria": {
            "sortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        "buttons": {
            "copy": "Copiar",
            "colvis": "Visibilidad",
            "collection": "Colección",
            "colvisRestore": "Restaurar visibilidad",
            "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br /> <br /> Para cancelar, haga clic en este mensaje o presione escape.",
            "copyTitle": "Copiar al portapapeles",
            "csv": "CSV",
            "excel": "Excel",
            "pageLength": {
                "-1": "Mostrar todas las filas",
                "_": "Mostrar %d filas"
            },
            "pdf": "PDF",
            "print": "Imprimir",
            "renameState": "Cambiar nombre",
            "removeAllStates": "Remover estados",
            "removeState": "Remover",
            "savedStates": "Estados guardados",
            "stateRestore": "Estado %d",
            "updateState": "Actualizar"
        },
        "searchBuilder": {
            "add": "Añadir condición",
            "button": {
                "0": "Constructor de búsqueda",
                "_": "Constructor de búsqueda (%d)"
            },
            "clearAll": "Borrar todo",
            "condition": "Condición",
            "conditions": {
                "date": {
                    "after": "Después",
                    "before": "Antes",
                    "between": "Entre",
                    "empty": "Vacío",
                    "equals": "Igual a",
                    "gt": "Mayor a",
                    "gte": "Mayor o igual a",
                    "lt": "Menor a",
                    "lte": "Menor o igual a",
                    "not": "No",
                    "notBetween": "No entre",
                    "notEmpty": "No vacío"
                },
                "number": {
                    "between": "Entre",
                    "empty": "Vacío",
                    "equals": "Igual a",
                    "gt": "Mayor a",
                    "gte": "Mayor o igual a",
                    "lt": "Menor a",
                    "lte": "Menor o igual a",
                    "not": "No",
                    "notBetween": "No entre",
                    "notEmpty": "No vacío"
                },
                "string": {
                    "contains": "Contiene",
                    "empty": "Vacío",
                    "endsWith": "Termina con",
                    "equals": "Igual a",
                    "not": "No",
                    "notEmpty": "No vacío",
                    "notEndsWith": "No termina con",
                    "notContains": "No contiene",
                    "notStartsWith": "Empieza con"
                },
                "array": {
                    "empty": "Vacío",
                    "equals": "Igual a",
                    "not": "No",
                    "notEmpty": "No vacío",
                    "without": "Sin",
                    "contains": "Contiene"
                }
            },
            "data": "Datos",
            "deleteTitle": "Eliminar regla de filtrado",
            "leftTitle": "Izquierda",
            "logicAnd": "Y",
            "logicOr": "O",
            "rightTitle": "Derecha",
            "title": {
                "0": "Constructor de búsqueda",
                "_": "Constructor de búsqueda (%d)"
            },
            "value": "Valor"
        },
        "searchPanes": {
            "clearMessage": "Borrar todo",
            "collapse": {
                "0": "Paneles de búsqueda",
                "_": "Paneles de búsqueda (%d)"
            },
            "count": "{total}",
            "countFiltered": "{shown} ({total})",
            "emptyPanes": "No hay paneles de búsqueda",
            "loadMessage": "Cargando paneles de búsqueda...",
            "title": "Filtros Activos - %d",
            "showMessage": "Mostrar todo",
            "collapseMessage": "Colapsar todo"
        },
        "thousands": ".",
        "datetime": {
            "previous": "Anterior",
            "next": "Siguiente",
            "hours": "Horas",
            "minutes": "Minutos",
            "seconds": "Segundos",
            "amPm": [
                "am",
                "pm"
            ],
            "unknown": "-",
            "weekdays": {
                "0": "Dom",
                "1": "Lun",
                "2": "Mar",
                "3": "Mié",
                "4": "Jue",
                "5": "Vie",
                "6": "Sáb"
            },
            "months": {
                "0": "Enero",
                "1": "Febrero",
                "2": "Marzo",
                "3": "Abril",
                "4": "Mayo",
                "5": "Junio",
                "6": "Julio",
                "7": "Agosto",
                "8": "Septiembre",
                "9": "Octubre",
                "10": "Noviembre",
                "11": "Diciembre"
            }
        },
        "editor": {
            "close": "Cerrar",
            "create": {
                "button": "Nuevo",
                "submit": "Crear",
                "title": "Crear Nuevo Registro"
            },
            "edit": {
                "button": "Editar",
                "submit": "Actualizar",
                "title": "Editar Registro"
            },
            "error": {
                "system": "Ocurrió un error en el sistema (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">Más información<\/a>)."
            },
            "multi": {
                "info": "Los elementos seleccionados contienen diferentes valores para este entrada. Para editar y establecer todos los elementos de este entrada con el mismo valor, haga clic o toque aquí, de lo contrario conservarán sus valores individuales.",
                "restore": "Deshacer cambios",
                "title": "Múltiples Valores"
            },
            "remove": {
                "button": "Eliminar",
                "submit": "Eliminar",
                "title": "Eliminar Registro",
                "confirm": {
                    "_": "¿Está seguro de que desea eliminar %d filas?",
                    "1": "¿Está seguro de que desea eliminar 1 fila?"
                }
            }
        },
        "decimal": ",",
        "stateRestore": {
            "creationModal": {
                "button": "Crear",
                "columns": {
                    "search": "Búsqueda de Columnas",
                    "visible": "Visibilidad de Columnas"
                },
                "name": "Nombre:",
                "order": "Ordenar",
                "paging": "Paginación",
                "scroller": "Posición de desplazamiento",
                "search": "Buscar",
                "select": "Seleccionar",
                "title": "Crear Nuevo Estado",
                "toggleLabel": "Incluir:"
            },
            "duplicateError": "Ya existe un estado con este nombre.",
            "emptyStates": "No hay estados guardados",
            "removeConfirm": "¿Está seguro de que desea eliminar el Estado %s?",
            "removeError": "Error al eliminar el estado.",
            "removeJoiner": "y",
            "removeSubmit": "Eliminar",
            "removeTitle": "Eliminar Estados",
            "renameButton": "Renombrar",
            "renameLabel": "Nuevo nombre para %s:",
            "renameTitle": "Renombrar Estado",
            "emptyError": "El nombre no puede estar vacío.",
            "removeMessage": "Este mensaje se puede definir en el lenguaje del usuario."
        }
    };

    function loadDataTable(dataType) {
        let apiUrl = `https://jsonplaceholder.typicode.com/${dataType}`;
        let columnsConfig = [];

        if (dataType === 'users') {
            columnsConfig = [
                { data: 'id', title: 'ID' },
                { data: 'name', title: 'Nombre' },
                { data: 'username', title: 'Usuario' },
                { data: 'email', title: 'Email' },
                { data: 'website', title: 'Sitio Web' }
            ];
        } else if (dataType === 'posts') {
            columnsConfig = [
                { data: 'id', title: 'ID' },
                { data: 'userId', title: 'ID Usuario' }, 
                { data: 'title', title: 'Título' },
                { data: 'body', title: 'Cuerpo' }
            ];
        } else if (dataType === 'comments') {
            columnsConfig = [
                { data: 'id', title: 'ID' },
                { data: 'postId', title: 'ID Publicación' }, 
                { data: 'name', title: 'Nombre' }, 
                { data: 'email', title: 'Email' }, 
                { data: 'body', title: 'Cuerpo' } 
            ];
        }

        if ($.fn.DataTable.isDataTable('#data-table')) {
            $('#data-table').DataTable().destroy();
            $('#data-table').empty();
        }

        $('#data-table').DataTable({
            ajax: {
                url: apiUrl,
                dataSrc: ''
            },
            columns: columnsConfig,
            responsive: true,
            language: spanishLanguage
        });
    }

    loadDataTable('users');

    $('#load-data-btn').on('click', function() {
        const selectedDataType = $('#data-selector').val();
        loadDataTable(selectedDataType);
    });
});