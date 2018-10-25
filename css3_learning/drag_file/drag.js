window.onload = function(e)
{
    var filesCache = new Array();
    var dragArea = document.getElementById("drag-area");
    dragArea.addEventListener("drop",getSelectedFiles);
    dragArea.addEventListener("dragover",onOtherDrag);
    dragArea.addEventListener("dragend",onOtherDrag);
    dragArea.addEventListener("dragleave",onOtherDrag);

    function onOtherDrag(e)
    {
        e.stopPropagation();
        e.preventDefault();
        console.log("e.type:" + e.type);
        if(e.type == 'dragover')
        {
            ondragover.call(e.target)
        }else if(e.type == 'dragend' || e.type == 'dragleave')
        {
            ondragend.call(e.target)
        }
        return this;
    };
    function getSelectedFiles(e)
    {
        e= e || window.event;
        onOtherDrag(e);
        //1:e.target.files用于获取inpput type="file" 弹出框中的文件
        //2:e.datatransfer.files用于获取拖拉进来的文件
        var files = e.target.files || e.dataTransfer.files;
        createPreview(files);
        ondragend.call(e.target);
    };
    function ondragover()
    {
        //this.style.border = 'solid 1px red';
        this.className = this.className
            + (this.className.indexOf('drag-area-active')>0?'':' drag-area-active' );
    };

    function ondragend()
    {
        //this.style.border = 'dashed 1px darkslategray';
        this.className = this.className.substring(0,this.className.indexOf('drag-area-active'))
            + this.className.substring(this.className.indexOf('drag-area-active')
                +1+'drag-area-active'.length);
    };
    function createPreview(files)
    {
        var preveiw = document.getElementById('preview-area');

        for(var i=0;i<files.length;i++) {
            var file = files[i];
            // 如果已经存在
            if(exists(file))
            {
                continue;
            }
            var mineType = file.type,type;
            if(/^image/i.test(mineType))
            {
                type = 'image';
            }else if(/^text/i.test(mineType))
            {
                type = 'text';
            }else
            {
                type = 'other';
            }
            var reader = new FileReader();
            reader.onload = (function(file,type){
                return function(e)
                {
                    /*1*/
                    /*var span = document.createElement("a");
                    var img = document.createElement("img");
                    img.src = e.target.result;
                    img.alt = file.name;
                    img.className = 'preview-img';
                    span.style.width = '100px';
                    span.style.height = '55px';
                    span.appendChild(img);
                    preveiw.appendChild(span);*/

                    /*2*/
                    var a = document.createElement("a");
                    a.style.width = '100px';
                    a.style.height = '55px';
                    var html = (type == 'text') ? '<div class="preview-text"><pre>'+ encodeHTML(e.target.result) +'</pre></div>'
                        : '<img src="'+ e.target.result+'" class="preview-img" alt="'+file.name+'"/>';
                    a.innerHTML = html;
                    preveiw.appendChild(a);
                }
            })(file,type);
            (type == 'text') ? reader.readAsText(file) : reader.readAsDataURL(file);
        }
        preveiw.className = preveiw.className
            + (preveiw.className.indexOf('preview-area-active') > 0 ? '' : ' preview-area-active');
    }

    function exists(file)
    {
        var flag = false;
        if(filesCache.length > 0)
        {
            for (var i = 0; i < filesCache.length; i++) {
                var _file = filesCache[i];
                if (_file.name == file.name) {
                    flag = true;
                    break;
                } else {
                    flag = false;
                }
            }
        }
        flag ? null : filesCache.push(file);
        return flag;
    }

    function encodeHTML(html)
    {
        return html.replace(/&/g,'&').replace(/</g,'<').replace(/>/g,'>').replace(/"/g,'"').replace(/'/g,"'");
    }


};