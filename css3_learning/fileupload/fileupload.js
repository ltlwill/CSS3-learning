;$(function(){
    var options = {
        showCaption:true,/*是否显示文件的标题。默认值true*/
        showPreview:true,/*是否显示文件的预览图。默认值true*/
        showRemove:true,/*是否显示删除/清空按钮。默认值*/
        showUpload:true,/*是否显示文件上传按钮。默认是submit按钮，除非指定了uploadUrl属性。默认值true*/
        showCancel:true,/*是否显示取消文件上传按钮。只有在AJAX上传线程中该属性才可见可用。默认值true*/
        /*
        captionClass:'',/*在标题容器上额外的class,类型string*
        previewClass:'',/*在预览区域容器上的额外的class,类型string
        mainClass:'',/*添加在文件上传主容器,类型string*/
        'previewFileType':'any',
        initialPreview:[
            "<img src='1.jpg' class='file-preview-image' alt='Desert' title='Desert'>",
            "<img src='2.jpg' class='file-preview-image' alt='Desert' title='Desert'>"
        ],
        initialDelimiter:'*$$*',/*在initialPreview属性中用于上传多个文件时的分隔符。默认值：'*$$*',*/
        initialPreviewCount:2

         /*
        initialPreview,
        initialPreviewCount:1,/*类型int。被添加到选择的文件的初始化预览图的数量。当overwriteInitial属性设置为false时，该参数可以显示正确的文件标题
        initialPreviewDelimiter:'*$$*'/*类型string。用于分割初始化预览图内容的分割符。只有在initialPreview属性传入的参数是字符串而不是数组时可用。默认值是：*$$*。
        initialPreviewConfig:array,
         initialPreviewShowDelete,
         previewThumbTags,
         ....查看更多属性请查阅https://github.com/kartik-v/bootstrap-fileinput/
         */
    };
    $("#input_1").fileinput(options);
});