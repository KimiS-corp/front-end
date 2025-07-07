$(document).ready(function() {
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
        });
    }

    loadDataTable('users');

    $('#load-data-btn').on('click', function() {
        const selectedDataType = $('#data-selector').val();
        loadDataTable(selectedDataType);
    });
});