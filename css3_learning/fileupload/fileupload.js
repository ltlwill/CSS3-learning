;$(function(){
    var options = {
        showCaption:true,/*�Ƿ���ʾ�ļ��ı��⡣Ĭ��ֵtrue*/
        showPreview:true,/*�Ƿ���ʾ�ļ���Ԥ��ͼ��Ĭ��ֵtrue*/
        showRemove:true,/*�Ƿ���ʾɾ��/��հ�ť��Ĭ��ֵ*/
        showUpload:true,/*�Ƿ���ʾ�ļ��ϴ���ť��Ĭ����submit��ť������ָ����uploadUrl���ԡ�Ĭ��ֵtrue*/
        showCancel:true,/*�Ƿ���ʾȡ���ļ��ϴ���ť��ֻ����AJAX�ϴ��߳��и����Բſɼ����á�Ĭ��ֵtrue*/
        /*
        captionClass:'',/*�ڱ��������϶����class,����string*
        previewClass:'',/*��Ԥ�����������ϵĶ����class,����string
        mainClass:'',/*������ļ��ϴ�������,����string*/
        'previewFileType':'any',
        initialPreview:[
            "<img src='1.jpg' class='file-preview-image' alt='Desert' title='Desert'>",
            "<img src='2.jpg' class='file-preview-image' alt='Desert' title='Desert'>"
        ],
        initialDelimiter:'*$$*',/*��initialPreview�����������ϴ�����ļ�ʱ�ķָ�����Ĭ��ֵ��'*$$*',*/
        initialPreviewCount:2

         /*
        initialPreview,
        initialPreviewCount:1,/*����int������ӵ�ѡ����ļ��ĳ�ʼ��Ԥ��ͼ����������overwriteInitial��������Ϊfalseʱ���ò���������ʾ��ȷ���ļ�����
        initialPreviewDelimiter:'*$$*'/*����string�����ڷָ��ʼ��Ԥ��ͼ���ݵķָ����ֻ����initialPreview���Դ���Ĳ������ַ�������������ʱ���á�Ĭ��ֵ�ǣ�*$$*��
        initialPreviewConfig:array,
         initialPreviewShowDelete,
         previewThumbTags,
         ....�鿴�������������https://github.com/kartik-v/bootstrap-fileinput/
         */
    };
    $("#input_1").fileinput(options);
});