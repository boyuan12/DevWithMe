$(document).ready(function() {
    $('textarea').keydown(function(e){
        if(e.keyCode === 9) {
            var start = this.selectionStart;
            var end = this.selectionEnd;
            var $this = $(this);
            var value = $this.val();
            $this.val(value.substring(0, start) + '\t' + value.substring(end));
            this.selectionStart = this.selectionEnd = start + 1;
            e.preventDefault();
        }
        });
    
    function getHTML(){
        var html = $('#html').val();
        return html;
    }
    function getCSS(){
        var css = $('#css').val();
        return css;
    }
    
    function getJS(){
        var js = $('#js').val();
        return js;
    }
    
    $('textarea').keyup(function(){
        var targetIframe = $('#preview')[0].contentWindow.document;
        targetIframe.open();
        targetIframe.close();
        var html = getHTML();
        var css='<style>' + getCSS() + '</style>';
        var js='<script>' + getJS() + '</script>';
        $('body',targetIframe).append(html);
        $('head',targetIframe).append(css);
        $('body',targetIframe).append(js);
        });
});