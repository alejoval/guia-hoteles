$(function () {
            $("[data-toggle='tooltip']").tooltip();
            $("[data-toggle='popover']").popover();
            $("carousel").carousel({
                interval: 100
            });
            
            $('#contacto').on('show.bs.modal',function(e){
            console.log('El modal contacto se está mostrando');
             
              $('#contactoBtn').removeClass('btn-outline-success');  
              $('#contactoBtn').addClass('btn-primary');
              $('#contactoBtn').prop('disabled',true);
            });
            
            $('#contacto').on('shown.bs.modal',function(e){
                console.log('El modal contacto se mostró');
            });
            
             $('#contacto').on('hide.bs.modal',function(e){
                console.log('El modal contacto se oculta');
            });
            
             $('#contacto').on('hidden.bs.modal',function(e){
                console.log('El modal contacto se ocultó');
             $('#contactoBtn').prop('disabled',false);
             $('#contactoBtn').removeClass('btn-primary');
             $('#contactoBtn').addClass('btn-outline-success');
             });
        });
